import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import MatrixRain from "@/components/MatrixRain";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ausimnla-portfolio.vercel.app"),
  title: "ausimnla — Frontend / UI Developer",
  description:
    "Portfolio of ausimnla, a frontend / UI developer building fast, accessible interfaces.",
  openGraph: {
    type: "website",
    title: "ausimnla — Frontend / UI Developer",
    description:
      "Portfolio of ausimnla, a frontend / UI developer building fast, accessible interfaces.",
    images: ["/opengraph.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ausimnla — Frontend / UI Developer",
    description:
      "Portfolio of ausimnla, a frontend / UI developer building fast, accessible interfaces.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-void text-text font-sans antialiased min-h-screen flex flex-col overflow-x-hidden">
        <MatrixRain />
        <CursorGlow />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Loader />
      </body>
    </html>
  );
}
