import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DESCRIPTION, SITE_URL, TITLE } from "../site";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/" },
	robots: { index: true, follow: true },
	openGraph: {
		type: "website",
		url: SITE_URL,
		siteName: "illi.sh",
		title: TITLE,
		description: DESCRIPTION,
	},
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
	colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				{children}
				<script src="https://lacymorrow.com/more.js" defer />
			</body>
		</html>
	);
}
