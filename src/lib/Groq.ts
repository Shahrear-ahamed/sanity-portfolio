import { client } from "./sanity.client";

export const totalBlogCount = async () => {
  return await client.fetch(`count(*[_type == "blog"])`);
};

export const totalProjectCount = async () => {
  return await client.fetch(`count(*[_type == "project"])`);
};

export const allBlogsPage = async ({
  limit = 10,
  page = 1,
}: {
  limit: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;
  const lastValue = page * limit - 1;
  return await client.fetch(`*[_type == "blog"] | order(_createdAt desc)[${skip} .. ${lastValue}] {title, "slug":slug.current, description, mainImage, publishedAt, "name": author->name, "authorImage": author->image, author,tag, "tag":tag->title, "tag_slug":tag->slug}
  `);
};

export const allProjectsPage = async ({
  limit = 10,
  page = 1,
}: {
  limit: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;
  const lastValue = page * limit - 1;
  return await client.fetch(`*[_type == "project"] | order(_createdAt desc)[${skip} .. ${lastValue}] {title, slogan, "slug":slug.current, metaDescription, backendUrl, frontendUrl, liveSiteUrl,showCaseUrl, body, publishedAt,"name": author->name, "authorImage": author->image, categories, mainImage, siteIcon, projectImages}
  `);
};
