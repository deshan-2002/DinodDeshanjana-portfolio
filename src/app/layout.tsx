import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinod Deshanjana | Portfolio",
  description: "B.Sc. MIT Undergraduate and IT Diploma Holder passionate about innovative technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth antialiased`}
    >
      <body id="home" className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-1 flex flex-col pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
