import { ImageResponse } from "next/og";

export const alt = "illi.sh: Next.js build studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: 96,
				background: "#0b0b0c",
				color: "#f5f5f7",
			}}
		>
			<div style={{ fontSize: 36, color: "#2997ff", marginBottom: 32 }}>illi.sh</div>
			<div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
				I build Next.js apps, and leave your team able to run them.
			</div>
		</div>,
		size,
	);
}
