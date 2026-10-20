"use client";

import { useEffect, useState } from "react";

export function SiteFooter() {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en", {
          timeZone: "Asia/Makassar",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
          .format(new Date())
          .toLowerCase(),
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <footer className="site-footer">
      <p>
        Based in Manado, Indonesia
        {time ? (
          <>
            , where it&apos;s <time>{time}</time>.
          </>
        ) : (
          "."
        )}
      </p>
      <p>
        Want to get in touch? Find me on{" "}
        <a
          href="https://www.linkedin.com/in/deddy-wolley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://www.instagram.com/deddywolley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        , or <a href="mailto:deddywolley@gmail.com">email me directly</a>.
      </p>
      <p className="copyright">© {new Date().getFullYear()}, Deddy Wolley</p>
    </footer>
  );
}
