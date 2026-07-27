import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DATA } from "@/data/resume";

export const runtime = "nodejs";
export const alt = DATA.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const avatar = await readFile(join(process.cwd(), "public", "me.jpg"));
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={avatarSrc}
          width={160}
          height={160}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div style={{ fontSize: 64, fontWeight: 700, color: "#0a0a0a" }}>
          {`Hi, I'm ${DATA.firstName}`}
        </div>
        <div style={{ fontSize: 28, color: "#525252" }}>{DATA.description}</div>
      </div>
    ),
    { ...size }
  );
}
