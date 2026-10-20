"use client";

import { applyTheme, useDarkTheme } from "@/lib/use-theme";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const dark = useDarkTheme();
  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      onClick={() => {
        const next = dark ? "light" : "dark";
        try {
          localStorage.setItem("theme", next);
        } catch {}
        applyTheme(next);
      }}
    >
      <SunIcon className="sun-icon" />
      <MoonIcon className="moon-icon" />
    </button>
  );
}
