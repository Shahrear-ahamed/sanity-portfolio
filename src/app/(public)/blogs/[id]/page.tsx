import type { Metadata, ResolvingMetadata } from "next";
import { getSingleBlog } from "@/lib/Groq";
import { Blog } from "../../../../../typings";
import FullBlogImage from "@/components/ui/FullBlogImage";
import { PortableText } from "@portabletext/react";
import { PortableTextShowComponent } from "@/components/ui/PortableTextShowComponent";
import { parseIsoDate } from "@/lib/luxonDateFormate";
import Share from "@/components/ui/Share";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const blog: Blog = await getSingleBlog(params.id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blog.title} | Shahrear Ahamed`,
    description: blog.description,
    openGraph: {
      type: "article",
      images: [...previousImages],
      description: blog.description,
      publishedTime: blog.publishedAt,
      title: `${blog.title} | Shahrear Ahamed`,
      authors: [blog.name ? blog.name : "Shahrear Ahamed"],
      url: `https://www.shahrear-ahamed.com/blogs/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      description: blog.description,
      creator: "@shahrear_ahamed",
      site: "@shahrear_ahamed",
      title: `${blog.title} | Shahrear Ahamed`,
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog: Blog = await getSingleBlog(params.id);

  if (!blog) return <div>404</div>;
  const parseDate = parseIsoDate(blog.publishedAt);

  return (
    <>
      <article className="my-10 relative">
        <FullBlogImage image={blog?.mainImage} title={blog.title} />
        <div className="-mt-10 z-50 relative w-full backdrop-blur-sm bg-background/40 py-10">
          <div className="wrapper-container mx-auto relative z-20">
            <h1 className="text-xl sm:text-2xl md:text-4xl pl-2 sm:pl-4 md:pl-7 lg:pl-10 flex items-center relative w-fit before:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-1">
              {blog.title}
            </h1>
            <div className="my-5 text-sm flex gap-5 justify-between items-center flex-wrap">
              <div className="flex space-x-4">
                <p className="text-xs md:text-sm">Published: {parseDate}</p>
                <p className="text-xs md:text-sm">
                  by
                  <span className="text-primary/80"> @{blog.name}</span>
                </p>
              </div>
              <Share title={blog.title} />
            </div>
            <div>
              <PortableText
                value={blog.body}
                components={PortableTextShowComponent}
              />
            </div>
            A
          </div>
        </div>
      </article>
    </>
  );
}
