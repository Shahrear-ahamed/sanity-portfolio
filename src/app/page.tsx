import ContactMe from "@/components/view/ContactMe";
import MyBlogs from "@/components/view/MyBlogs";
import MyProjects from "@/components/view/MyProjects";
import Specialized from "@/components/view/Specialized";

export default function Home() {
  return (
    <main>
      <div className="">This is home page</div>
      <Specialized />
      <MyProjects />
      <MyBlogs />
      <ContactMe />
    </main>
  );
}
