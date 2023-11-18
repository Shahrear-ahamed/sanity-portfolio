import React from "react";
import SingleBlog from "../ui/SingleBlog";
import SectionTitle from "../ui/SectionTitle";
import { client } from "@/lib/sanity.client";
import { Blog } from "../../../typings";

export default async function MyBlogs() {
  const blogs = await blogsClient();
  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        My <span className="text-primary">Blogs</span>
      </SectionTitle>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 gap-5">
        {blogs.length ? (
          blogs.map((blog: Blog, idx: number) => (
            <SingleBlog key={blog.title} blog={blog} index={idx} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary">No Blogs Found</p>
        )}
      </div>
    </section>
  );
}

const blogsClient = async () => {
  return await client.fetch(`*[_type == "blog"] | order(_createdAt desc)[0 .. 3] {title, "slug":slug.current, description, mainImage, publishedAt, "name": author->name, "authorImage": author->image, author,tag, "tag":tag->title, "tag_slug":tag->slug}
  `);
};
