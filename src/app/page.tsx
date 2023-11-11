import Footer from "@/components/ui/Footer";
import NavbarCom from "@/components/ui/NavbarCom";
import AboutMe from "@/components/view/AboutMe";
import ContactMe from "@/components/view/ContactMe";
import Hero from "@/components/view/Hero";
import MyBlogs from "@/components/view/MyBlogs";
import MyProjects from "@/components/view/MyProjects";
import Specialized from "@/components/view/Specialized";

export default async function Home() {
  return (
    <>
      <NavbarCom />
      <main>
        <Hero />
        <AboutMe />
        <Specialized />
        <MyProjects />
        <MyBlogs />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
