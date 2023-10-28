import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/lib/providers";

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
    <html lang="en">
      <body className={poppins.variable}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
