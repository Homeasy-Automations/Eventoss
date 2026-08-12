import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import FloatingCTA from "@/components/FloatingCTA";
import AmbientBackground from "@/components/AmbientBackground";
import { ConsultationModalProvider } from "@/components/ConsultationModalProvider";
import ConsultationModal from "@/components/ConsultationModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eventoss Corporate Events | Precision-led Corporate Events Across India",
  description:
    "Eventoss Corporate Events plans and delivers conferences, meets, launches, galas, and employee experiences across India — with a decade-plus legacy of precision execution.",
  metadataBase: new URL("https://eventoss.in"),
  openGraph: {
    title: "Eventoss Corporate Events | Precision-led Corporate Events Across India",
    description: "Corporate events planned with precision. Delivered with impact.",
    url: "https://eventoss.in",
    siteName: "Eventoss",
    images: [{ url: "/images/eventoss-hero-stage.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventoss Corporate Events | Precision-led Corporate Events Across India",
    description: "Corporate events planned with precision. Delivered with impact.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased text-[#0F2A3D]">
        <ConsultationModalProvider>
          {/* Viewport-fixed, mounted once — same background on every route.
              Sibling of <main>, not inside it, so it never remounts on
              navigation and can't be clipped by PageTransition's motion.div. */}
          <AmbientBackground />

          <SmoothScroll />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main className="relative z-10">{children}</main>
          </PageTransition>
          <FloatingCTA />
          <div className="relative z-10">
            <Footer />
          </div>
          <ConsultationModal />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
