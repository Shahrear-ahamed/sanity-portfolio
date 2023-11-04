import ContactMe from "@/components/view/ContactMe";
import Hero from "@/components/view/Hero";
import MyBlogs from "@/components/view/MyBlogs";
import MyProjects from "@/components/view/MyProjects";
import Specialized from "@/components/view/Specialized";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specialized />
      <MyProjects />
      <MyBlogs />
      <ContactMe />
    </main>
  );
}
