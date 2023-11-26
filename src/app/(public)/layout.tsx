import NavbarOther from "@/components/ui/NavbarOther";
import Footer from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarOther />
      {children}
      <Footer />
    </>
  );
}
