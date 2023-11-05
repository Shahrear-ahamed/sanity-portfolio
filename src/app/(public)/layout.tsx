import NavbarCom from "@/components/ui/NavbarCom";
import Footer from "@/components/ui/Footer";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarCom />
      {children}
      <Footer />
    </>
  );
}
