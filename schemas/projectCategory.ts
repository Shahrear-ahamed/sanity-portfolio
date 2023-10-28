import { defineField, defineType } from "sanity";

export default defineType({
  name: "project_category",
  title: "Project Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Category Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Project Category Description",
      type: "text",
    }),
  ],
});
