import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/Providers";
import GoogleAnalytics from "@/components/tools/GoogleAnalytics";
import MSClarity from "@/components/tools/MSClarity";

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
  description:
    "Hi i am Shahrear ahamed. I am a full stack web developer. My Stack is MERN and PERN. I am a self taught developer. I love to learn new things.",
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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {process.env.NEXT_PUBLIC_MS_CLARITY ? (
          <MSClarity msc_id={process.env.NEXT_PUBLIC_MS_CLARITY} />
        ) : null}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
