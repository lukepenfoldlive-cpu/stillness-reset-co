import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// TODO: replace with the real domain once hosting/the domain is purchased.
const SITE_URL = "https://www.stillnessresetco.com.au";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stillness Reset Co. | Corporate Wellness, Melbourne",
    template: "%s | Stillness Reset Co.",
  },
  description:
    "Holistic counselling and wellness for corporate Melbourne. Evidence-based breathwork, sound bath meditation, energy healing and soul-led coaching that regulates nervous systems.",
  openGraph: {
    siteName: "Stillness Reset Co.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
