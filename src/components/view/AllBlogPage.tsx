import { allBlogsPage, totalBlogCount } from "@/lib/Groq";
import React from "react";
import { Blog } from "../../../typings";
import PaginationCom from "../ui/Pagination";
import AllBlogsSingleBlog from "../ui/AllBlogsSingleBlog";

export default async function AllBlogPage({
  limit,
  page,
  setPage,
}: {
  limit: number;
  page: number;
  setPage: (page: number) => void;
}) {
  const totalBlogs = await totalBlogCount();

  // all blogs and pagination
  const blogs = await allBlogsPage({});
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-none gap-5">
        {blogs.length ? (
          blogs.map((blog: Blog, idx: number) => (
            <AllBlogsSingleBlog key={blog.title} blog={blog} index={idx} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary">No Blogs Found</p>
        )}
      </div>
      <div className="mt-5">
        <PaginationCom
          totalData={totalBlogs}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}
