import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Shahrear Ahamed",
  creator: "Shahrear Ahamed",
  openGraph: {
    images: ["../../public/hero_one.png"],
  },
  metadataBase: new URL("https://www.shahrear-ahamed.com"),
  manifest: "https://www.shahrear-ahamed.com/manifest.json",
  authors: [
    { name: "Shahrear Ahamed", url: "https://www.shahrear-ahamed.com/" },
  ],
  description: "Hi i am Shahrear ahamed. I am a full stack web developer.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Sanity",
    "GraphQL",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "DigitalOcean",
    "Vercel",
    "Netlify",
    "GitHub",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
