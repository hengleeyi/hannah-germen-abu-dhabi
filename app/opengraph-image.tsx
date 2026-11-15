import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Hannah: German lessons in Abu Dhabi and online with a native speaker from Austria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/BricolageGrotesque-800.woff")),
    readFile(join(process.cwd(), "assets/hannah-og.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", fontFamily: "Bricolage Grotesque" }}>
        <div
          style={{
            width: 552,
            background: "#2f5fd0",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <span style={{ fontSize: 72, letterSpacing: -3, lineHeight: 1 }}>der</span>
            <span style={{ fontSize: 32 }}>Unterricht</span>
          </div>
          <div style={{ fontSize: 66, lineHeight: 1.02, letterSpacing: -2.5 }}>
            German lessons in Abu Dhabi and online.
          </div>
        </div>
        <div
          style={{
            width: 324,
            background: "#e86fa5",
            color: "#1b2547",
            display: "flex",
            flexDirection: "column",
            padding: "48px 32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 72, letterSpacing: -3, lineHeight: 1 }}>die</span>
            <span style={{ fontSize: 26 }}>Lehrerin</span>
          </div>
          <img src={photoSrc} width={260} height={325} alt="" style={{ marginTop: 40, objectFit: "cover" }} />
        </div>
        <div
          style={{
            width: 324,
            background: "#33a873",
            color: "#1b2547",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 72, letterSpacing: -3, lineHeight: 1 }}>das</span>
            <span style={{ fontSize: 26 }}>Ziel</span>
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.15 }}>Hannah · native speaker from Austria · A1 to C2</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Bricolage Grotesque", data: font, weight: 800, style: "normal" }] },
  );
}
