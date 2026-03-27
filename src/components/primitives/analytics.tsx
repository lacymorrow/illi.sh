"use client";

import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <Script
        defer
        src="https://analytics.lacy.sh/script.js"
        data-website-id="20c60d66-27c3-4ca0-8bcf-996b99ff4e94"
      />
    </>
  );
}
