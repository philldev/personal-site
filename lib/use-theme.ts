"use client";

import { useSyncExternalStore } from "react";

export function applyTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new Event("theme-change"));
}

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const sync = () => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {}
    applyTheme(
      stored === "dark" || (stored !== "light" && media.matches)
        ? "dark"
        : "light",
    );
  };
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", sync);
  media.addEventListener("change", sync);
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", sync);
    media.removeEventListener("change", sync);
  };
}

export function useDarkTheme() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );
}
