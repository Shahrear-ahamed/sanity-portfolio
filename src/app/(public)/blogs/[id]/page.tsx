import { getSingleBlog } from "@/lib/Groq";
import { Blog } from "../../../../../typings";
import FullBlogImage from "@/components/ui/FullBlogImage";
import { PortableText } from "@portabletext/react";
import { PortableTextShowComponent } from "@/components/ui/PortableTextShowComponent";
import { parseIsoDate } from "@/lib/luxonDateFormate";

export default async function SingleBlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog: Blog = await getSingleBlog(params.id);

  if (!blog) return <div>404</div>;
  const parseDate = parseIsoDate(blog.publishedAt);

  return (
    <article className="my-10">
      <FullBlogImage image={blog?.mainImage} title={blog.title} />
      <div className="-mt-10 z-50 relative w-full backdrop-blur-sm bg-background/40 py-10">
        <div className="wrapper-container mx-auto relative z-20">
          <h1 className="text-xl sm:text-2xl md:text-4xl pl-2 sm:pl-4 md:pl-7 lg:pl-10 flex items-center relative w-fit before:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-1">
            {blog.title}
          </h1>
          <div className="my-5 text-sm">
            <div className="flex space-x-4">
              <p>Published: {parseDate}</p>
              <p>
                by
                <span className="text-primary/80"> @{blog.name}</span>
              </p>
            </div>
          </div>
          <div>
            <PortableText
              value={blog.body}
              components={PortableTextShowComponent}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
