import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achraf Lamia — ML & Computer Vision Engineer",
  description:
    "ML & CV Engineer specializing in real-time computer vision, edge AI deployment, and AWS cloud infrastructure.",
  openGraph: {
    title: "Achraf Lamia — ML & CV Engineer",
    description:
      "End-to-end ML pipelines · Edge AI · AWS Cloud Infrastructure · MLOps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
