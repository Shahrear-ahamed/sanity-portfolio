import SingleProject from "../ui/SingleProject";
import SectionTitle from "../ui/SectionTitle";

export default function MyProjects() {
  return (
    <section className="wrapper-container mx-auto my-10">
      
      <SectionTitle>
        My <span className="text-primary">Projects</span>
      </SectionTitle>
      <SingleProject />
    </section>
  );
}
