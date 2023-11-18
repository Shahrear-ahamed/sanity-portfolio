type Base = {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};

export interface Blog extends Base {
  author: Author;
  name: string;
  title: string;
  slug: Slug;
  body: Block[];
  tag: Tag;
  description: string;
  mainImage: Image;
  publishedAt: string;
  categories: Category;
}

interface Category extends Base {
  title: string;
  description: string;
}

interface Tag extends Base {
  title: string;
  slug: Slug;
}

interface Author extends Base {
  name: string;
  username: string;
  image: Image;
  bio: Block[];
}

interface Project extends Base {
  title: string;
  slogan: string;
  slug: Slug;
  metaDescription: string;
  liveSiteUrl: string;
  frontendUrl: string;
  backendUrl: string;
  showcaseUrl: string;
  publishedAt: string;
  body: Block[];
  name: string;
  author: Author;
  siteIcon: Image;
  mainImage: Image;
  projectImages: Image;
  categories: ProjectCategory[];
}

interface ProjectCategory extends Base {
  title: string;
  description: string;
}

interface Image {
  _type: "string";
  asset: Reference;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "blockquote" | "code";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface MainImage {
  _type: "mainImage";
  asset: Reference;
}

interface ProjectImage {
  _type: "projectImage";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
