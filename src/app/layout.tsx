import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whispering Pines Golf Course | Cadott, Wisconsin",
  description:
    "Experience premier golf at Whispering Pines Golf Course - an 18-hole championship course nestled in the beautiful Chippewa Valley, 12 miles east of Eau Claire, Wisconsin.",
  keywords: [
    "golf course",
    "Cadott Wisconsin",
    "Eau Claire golf",
    "Chippewa Valley",
    "18 hole golf",
    "Wisconsin golf",
    "golf simulator",
    "tee times",
  ],
  openGraph: {
    title: "Whispering Pines Golf Course",
    description:
      "Where the pines meet the sky - Premier 18-hole golf in Wisconsin's Chippewa Valley",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
