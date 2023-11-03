import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/Providers";
import NavbarCom from "@/components/ui/NavbarCom";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shahrear ahamed",
  description: "I am a full stack web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <Providers>
          <NavbarCom />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
