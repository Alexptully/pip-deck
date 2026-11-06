import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "./globals.css";
import { config } from "@/content/config";

export const metadata: Metadata = {
  title: `${config.productName}, ${config.event}`,
  description: "Pip lets anyone build a working app by talking it through.",
};

export const viewport: Viewport = { themeColor: "#0e0e0d" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
