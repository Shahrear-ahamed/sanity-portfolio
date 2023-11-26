"use client";

import React, { useEffect, useState } from "react";
import SingleBlog from "../ui/SingleBlog";
import SectionTitle from "../ui/SectionTitle";
import { Blog } from "../../../typings";
import { HomeBlogsClient } from "@/lib/Groq";
import { HomeBlogsLoading } from "../ui/LoadingSkeleton";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const blogs = await HomeBlogsClient();
      setBlogs(blogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);
  return (
    <section id="blog" className="wrapper-container mx-auto my-10">
      <SectionTitle>
        My <span className="text-primary">Blogs</span>
      </SectionTitle>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 gap-5">
        {loading ? (
          <>
            <HomeBlogsLoading />
            <HomeBlogsLoading />
            <HomeBlogsLoading />
            <HomeBlogsLoading className="md:hidden lg:block" />
          </>
        ) : blogs.length && !loading ? (
          blogs.map((blog: Blog, idx: number) => (
            <SingleBlog key={blog.title} blog={blog} index={idx} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary col-span-4">
            No Blogs Found
          </p>
        )}
      </div>
    </section>
  );
}
