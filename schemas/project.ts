import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Project Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "slogan",
      title: "Project Slogan",
      type: "string",
      validation: (slogan) =>
        slogan.required().max(50).warning("Shorter is better"),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "liveSiteUrl",
      title: "Live Site URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "frontendUrl",
      title: "Front End Git URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "backendUrl",
      title: "Back End Git URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "showcaseUrl",
      title: "Showcase URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "categories",
      title: "Project Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    }),
    defineField({
      name: "siteIcon",
      title: "Site Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "projectImages",
      type: "array",
      title: "Project Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Gallery Image",
          options: { hotspot: true },
          fields: [
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description of Project",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "siteIcon",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
