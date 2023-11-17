import { blogPaginationInterface } from "@/interfaces/blog.interface";
import { client } from "./sanity.client";

export const totalBlogCount = async () => {
  return await client.fetch(`count(*[_type == "blog"])`);
};

export const allBlogsPage = async ({
  skip = 0,
  limit = 10,
}: blogPaginationInterface) => {
  return await client.fetch(`*[_type == "blog"] | order(_createdAt desc)[${skip} .. ${
    limit - 1
  }] {title, "slug":slug.current, description, mainImage, publishedAt, "name": author->name, "authorImage": author->image, author,tag, "tag":tag->title, "tag_slug":tag->slug}
  `);
};
