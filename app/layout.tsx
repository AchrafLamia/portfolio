import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020617] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
