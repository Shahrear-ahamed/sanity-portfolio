import React from "react";
import SingleBlog from "../ui/SingleBlog";

export default function MyBlogs() {
  return (
    <section className="wrapper-container mx-auto my-10">
      <h3 className="text-3xl my-5">
        My <span className="text-primary">Blogs</span>
      </h3>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 gap-5">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </section>
  );
}
