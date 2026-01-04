"use client";

import { Typewriter } from "@/components/typewriter";
import { useState } from "react";

export function Title({ initialText }: { initialText: string }) {
  const texts = [
    initialText,
    "Software Engineer",
    "Frontend Developer",
    "Fullstack Developer",
  ];
  const [index, setIndex] = useState(0);

  return (
    <h1 className="text-4xl md:text-7xl">
      <span className="sr-only">{initialText}</span>
      <div aria-hidden>
        <Typewriter
          onAnimationDone={() => {
            if (index === texts.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          {texts[index]}
        </Typewriter>
      </div>
    </h1>
  );
}
