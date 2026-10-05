import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Hex equivalents of the light theme tokens.
const colors = {
  paper: "#f9f6f2",
  ink: "#17130f",
  muted: "#5f5a54",
  brand: "#cb380d",
  rule: "#dddad5",
};

export default async function OpengraphImage() {
  const assets = join(process.cwd(), "src/assets/og");
  const [serif, serifItalic, portrait] = await Promise.all([
    readFile(join(assets, "InstrumentSerif-Regular.ttf")),
    readFile(join(assets, "InstrumentSerif-Italic.ttf")),
    readFile(join(assets, "portrait.jpg"), "base64"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: colors.paper,
        color: colors.ink,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 0 64px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: colors.muted,
          }}
        >
          Portfolio — {profile.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 148,
              lineHeight: 0.9,
              letterSpacing: -3,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontFamily: "Instrument Serif Italic",
              fontSize: 56,
              color: colors.brand,
            }}
          >
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 20,
            letterSpacing: 2,
            color: colors.muted,
          }}
        >
          <div style={{ width: 40, height: 2, background: colors.brand }} />
          React · Next.js · TypeScript · Node.js
        </div>
      </div>

      <div
        style={{
          width: 420,
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 64,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            right: -36,
            width: 260,
            height: 260,
            borderRadius: 9999,
            border: `2px solid ${colors.brand}`,
          }}
        />
        <img
          alt=""
          src={`data:image/jpeg;base64,${portrait}`}
          width={380}
          height={475}
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: 4,
            border: `1px solid ${colors.rule}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 24,
            width: 44,
            height: 44,
            background: colors.brand,
          }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal" },
        { name: "Instrument Serif Italic", data: serifItalic, style: "italic" },
      ],
    },
  );
}
