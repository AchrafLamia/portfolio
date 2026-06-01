import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "Achraf Lamia — ML & Computer Vision Engineer",
  description: "ML & CV Engineer — edge AI, real-time CV systems, AWS EKS production infrastructure. Open to senior roles & relocation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#040407] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
