"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { allBlogsPage, totalBlogCount } from "@/lib/Groq";
import { useEffect, useState } from "react";
import { Blog } from "../../../../typings";
import AllBlogsSingleBlog from "@/components/ui/AllBlogsSingleBlog";
import { Pagination } from "@nextui-org/react";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export default function BlogsPage() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const totalBlogs = await totalBlogCount();
      const blogs = await allBlogsPage({ limit, page });
      setBlogs(blogs);
      setTotal(Math.ceil(totalBlogs / limit));
      setLoading(false);
    };
    fetchBlogs();
  }, [limit, page]);

  const handleChange = async (comPage: number) => {
    setPage(comPage);
  };

  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        All <span className="text-primary">Blogs</span>
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-none gap-5">
        {loading ? (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        ) : blogs.length && !loading ? (
          blogs.map((blog: Blog, idx: number) => (
            <AllBlogsSingleBlog key={blog.title} blog={blog} index={idx} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary">No Blogs Found</p>
        )}
      </div>
      <Pagination
        showShadow
        isCompact
        showControls
        total={total}
        initialPage={1}
        onChange={handleChange}
        className="[&>ul]:!bg-primary [&>ul]:!bg-opacity-10 [&>ul]:!rounded [&>ul>li]:!bg-transparent [&>ul>span]:!rounded [&>ul>span]:!text-background mt-5"
      />
    </section>
  );
}
