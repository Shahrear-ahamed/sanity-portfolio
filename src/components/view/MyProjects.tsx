import React from "react";
import SingleProject from "../ui/SingleProject";

export default function MyProjects() {
  return (
    <section className="wrapper-container mx-auto my-10">
      <h3 className="text-3xl my-5">
        My <span className="text-primary">Projects</span>
      </h3>
      <SingleProject />
    </section>
  );
}
