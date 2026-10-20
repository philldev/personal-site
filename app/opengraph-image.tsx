import { ImageResponse } from "next/og";

export const alt =
  "Deddy Wolley — Senior frontend engineer. React, Next.js, and Shopify.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#080808",
        padding: "48px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "48px",
          background: "#ffffff",
          borderRadius: "24px",
        }}
      >
        <div style={{ fontSize: 22, color: "#737373" }}>deddywolley.com</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{ fontSize: 64, color: "#171717", letterSpacing: "-3px" }}
          >
            Deddy Wolley
          </div>
          <div
            style={{ fontSize: 42, color: "#737373", letterSpacing: "-1px" }}
          >
            Senior frontend engineer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#737373",
          }}
        >
          <span>React · Next.js · Shopify</span>
          <span>Manado, Indonesia</span>
        </div>
      </div>
    </div>,
    size,
  );
}
