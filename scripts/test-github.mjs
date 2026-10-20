import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import vm from "node:vm";
import { test } from "node:test";
import assert from "node:assert/strict";
import ts from "typescript";

const sourcePath = resolve("lib/github.ts");
const snapshot = JSON.parse(
  readFileSync(resolve("lib/github-snapshot.json"), "utf8"),
);
const compiled = ts.transpileModule(readFileSync(sourcePath, "utf8"), {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2021,
    esModuleInterop: true,
  },
}).outputText;
function load(fetch) {
  const exports = {};
  vm.runInNewContext(compiled, {
    exports,
    require: createRequire(sourcePath),
    fetch,
    AbortSignal,
    Date,
    Map,
    Error,
  });
  return exports;
}
const fixture = [...snapshot.days]
  .reverse()
  .map(
    (day, i) =>
      `<td data-level="${day.level}" id="day-${i}" data-date="${day.date}"></td><tool-tip for="day-${i}">${day.count === 0 ? "No" : day.count.toLocaleString("en")} contributions on a date.</tool-tip>`,
  )
  .join("");

test("calendar parser sorts dates and preserves real contribution counts", () => {
  const days = load().parseContributions(fixture);
  assert.deepEqual(JSON.parse(JSON.stringify(days)), snapshot.days);
});
test("incomplete or changed calendar markup is rejected", () => {
  assert.throws(
    () => load().parseContributions("<html>GitHub is unavailable</html>"),
    /incomplete/,
  );
  assert.throws(
    () =>
      load().parseContributions(
        fixture.replace(/<td[^>]+id="day-50"[^>]*>/, ""),
      ),
    /incomplete/,
  );
  assert.throws(
    () =>
      load().parseContributions(
        '<td data-date="2026-01-01" data-level="9"></td>',
      ),
    /incomplete/,
  );
});
test("network failures return the dated real snapshot", async () => {
  const result = await load(async () => {
    throw new Error("offline");
  }).getGithubActivity();
  assert.equal(result.stale, true);
  assert.equal(result.fetchedAt, snapshot.fetchedAt);
  assert.equal(result.days.length, snapshot.days.length);
});
test("fresh data is validated and requested with hourly revalidation", async () => {
  const result = await load(async (url, options) => {
    assert.equal(url, "https://github.com/users/philldev/contributions");
    assert.equal(options.next.revalidate, 3600);
    return { ok: true, text: async () => fixture };
  }).getGithubActivity();
  assert.equal(result.stale, false);
  assert.equal(result.days.length, snapshot.days.length);
});
