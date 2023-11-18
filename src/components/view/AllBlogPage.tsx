// import { allBlogsPage, totalBlogCount } from "@/lib/Groq";
// import React from "react";
// import { Blog } from "../../../typings";
// import AllBlogsSingleBlog from "../ui/AllBlogsSingleBlog";
// import { Pagination } from "@nextui-org/react";

// export default async function AllBlogPage({
//   limit,
//   page,
//   handlePaginate,
// }: {
//   limit: number;
//   page: number;
//   handlePaginate: (page: number) => void;
// }) {
//   const totalBlogs = await totalBlogCount();

//   // all blogs and pagination
//   const blogs = await allBlogsPage({});

//   const total = Math.ceil(totalBlogs / limit);
//   return (
//     <>
//       <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-none gap-5">
//         {blogs.length ? (
//           blogs.map((blog: Blog, idx: number) => (
//             <AllBlogsSingleBlog key={blog.title} blog={blog} index={idx} />
//           ))
//         ) : (
//           <p className="text-center text-2xl text-primary">No Blogs Found</p>
//         )}
//       </div>
//       <Pagination
//         showShadow
//         isCompact
//         showControls
//         total={total}
//         initialPage={1}
//         onChange={handlePaginate}
//         className="[&>ul]:!bg-primary [&>ul]:!bg-opacity-10 [&>ul]:!rounded [&>ul>li]:!bg-transparent [&>ul>span]:!rounded [&>ul>span]:!text-background mt-5"
//       />
//     </>
//   );
// }
