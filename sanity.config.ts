import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
  basePath: "/admin",
  name: "Shahrear_Portfolio",
  title: "Shahrear Portfolio Admin",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  // theme: myTheme,
  schema: {
    types: schemaTypes,
  },
});
