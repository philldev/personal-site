"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { useDarkTheme } from "@/lib/use-theme";

const Dithering = dynamic(
  () =>
    import("@paper-design/shaders-react").then((module) => module.Dithering),
  { ssr: false },
);

class ShaderBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function DitherArt({ shape }: { shape: "sphere" | "simplex" }) {
  const dark = useDarkTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(false);
  const [motion, setMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotion(!media.matches && !document.hidden);
    updateMotion();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReady(true);
        setActive(entry.isIntersecting);
      },
      { rootMargin: "80px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateMotion);
    };
  }, []);
  return (
    <div ref={ref} className={`dither-art dither-${shape}`}>
      <div className="dither-visual" aria-hidden="true">
        <div className="dither-fallback" />
        {ready && (
          <ShaderBoundary>
            <Dithering
              className="shader-canvas"
              shape={shape}
              type="8x8"
              size={shape === "sphere" ? 1.9 : 2}
              scale={shape === "sphere" ? 1 : 0.6}
              frame={shape === "sphere" ? 3583384.7 : 3300064.9}
              speed={active && motion && !paused ? 0.3 : 0}
              colorBack={dark ? "#171717" : "#ffffff"}
              colorFront={dark ? "#fafafa" : "#000000"}
            />
          </ShaderBoundary>
        )}
      </div>
      {ready && motion && (
        <button
          type="button"
          className="art-motion-toggle"
          aria-label={`${paused ? "Play" : "Pause"} ${shape === "sphere" ? "sphere" : "abstract"} animation`}
          onClick={() => setPaused((value) => !value)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            {paused ? (
              <path d="M4 2.5v11l9-5.5z" />
            ) : (
              <path d="M4 3h3v10H4zm5 0h3v10H9z" />
            )}
          </svg>
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      )}
    </div>
  );
}
