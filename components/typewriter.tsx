"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

const letterVariants = {
  hidden: (dir: number) => ({ opacity: dir > 0 ? 0 : 1 }),
  visible: (dir: number) => ({
    opacity: dir > 0 ? 1 : 0,
    transition: { opacity: { duration: 0 } },
  }),
};

const sentenceVariants = {
  hidden: {},
  visible: (dir: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, staggerDirection: dir },
  }),
};

export function Typewriter({
  children,
  onAnimationDone,
}: {
  children: string;
  onAnimationDone?: () => void;
}) {
  const [direction, setDirection] = useState(1);
  const [cursor, setCursor] = useState<{
    left: number;
    top: number;
  }>({
    left: 0,
    top: 0,
  });

  const [isAnimationDone, setIsAnimationDone] = useState(false);

  return (
    <>
      <motion.span
        key={children + direction + ""}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        className="relative"
        custom={direction}
      >
        <span
          className="absolute bg-amber-400 data-[blinking=true]:animate-caret-blink w-[22px] h-[47px] md:w-[77px] md:h-[166px]"
          data-blinking={isAnimationDone}
          style={{
            left: cursor.left,
            top: cursor.top,
          }}
        ></span>
        {children.split("").map((letter, index) => (
          <Letter
            onAnimationComplete={(el) => {
              const windowWidth = window.innerWidth;

              const isDesktop = windowWidth > 768;

              const width = isDesktop ? 77 : 22;

              setCursor({
                left: el.offsetLeft + (direction > 0 ? width : 0),
                top: el.offsetTop,
              });
              if (direction > 0 && index === children.length - 1) {
                setIsAnimationDone(true);
                setTimeout(() => {
                  setDirection(-1);
                }, 3000);
              }
              if (direction < 0 && index === 0) {
                setIsAnimationDone(true);
                setDirection(1);
                onAnimationDone?.();
              }
            }}
            direction={direction}
            key={`${letter}-${index}-${direction}`}
          >
            {letter}
          </Letter>
        ))}
      </motion.span>
    </>
  );
}

function Letter({
  children,
  onAnimationComplete: onAnimationStart,
  direction,
}: {
  children: string;
  direction: number;
  onAnimationComplete?: (el: HTMLSpanElement) => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      onAnimationComplete={() => {
        console.log("complete");
        onAnimationStart?.(ref.current!);
      }}
      custom={direction}
      ref={ref}
      key={children}
      variants={letterVariants}
    >
      {children}
    </motion.span>
  );
}
