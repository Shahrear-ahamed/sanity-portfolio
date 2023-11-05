import React from "react";
import SingleBlog from "../ui/SingleBlog";
import SectionTitle from "../ui/SectionTitle";

export default function MyBlogs() {
  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        My <span className="text-primary">Blogs</span>
      </SectionTitle>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 gap-5">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </section>
  );
}
