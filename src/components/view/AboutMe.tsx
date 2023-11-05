import SectionTitle from "../ui/SectionTitle";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Nextjs",
  "Redux",
  "Tailwindcss",
  "Nodejs",
  "Expressjs",
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "Firebase",
  "Netlify",
  "Vercel",
  "Git",
  "Github",
  "Figma",
];

export default function AboutMe() {
  return (
    <section className="wrapper-container mx-auto my-20 min-h-[60vh] h-full flex flex-col justify-center">
      <SectionTitle>
        <span className="text-primary">About Me</span>
      </SectionTitle>
      <p>
        Here you will find more information about me, and my current skills
        mostly in terms of programming and technology.
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
        <div>
          <h4 className="text-2xl mb-5">Get to know me!</h4>
          <div className="space-y-5">
            <p className="text-sm">
              I&apos;m Shahrear ahamed, a passionate{" "}
              <span className="text-primary">Full-stack Developer</span> from
              Bangladesh. With a diverse background i found my interest in
              Programming, Right now I&apos;ve tackled all layers of code, from
              the database to UI, and embraced every step of the{" "}
              <span className="text-primary">software</span> life cycle - from
              concept to seamless development.
            </p>
            <p className="text-sm">
              Whether you&apos;re a business owner or HR ready to embark on a
              web development venture with a freelance web developer, a fellow
              developer eager to collaborate on exciting projects, or simply
              someone wanting to say hello, feel free to send me a message.
              Let&apos;s connect and explore the possibilities of working
              together.
            </p>
            <p className="text-sm">
              When I&apos;m not at the computer, I&apos;m usually playing{" "}
              <span className="text-primary">video games</span> for mind
              refreshment, <span className="text-primary">Learning</span> new
              things, hanging out with my
              <span className="text-primary">family or friends</span>.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-2xl mb-5">My Skills</h4>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="inline-block bg-primary text-background px-5 py-3 rounded-md text-sm font-semibold mr-4 mb-4">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
