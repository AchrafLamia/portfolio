import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achraf Lamia — ML & Computer Vision Engineer",
  description:
    "ML & CV Engineer — real-time computer vision, edge AI on K230, AWS production infrastructure. Open to senior roles & relocation.",
  openGraph: {
    title: "Achraf Lamia — ML & CV Engineer",
    description: "Edge AI · AWS EKS · YOLOv12 · Knowledge Distillation · MLOps",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
