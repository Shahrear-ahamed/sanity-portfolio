import NextSanityImage from "@/lib/sanityImage";
import { Image } from "@nextui-org/react";

export default function FullBlogImage({
  image,
  title,
}: {
  image: any;
  title: string;
}) {
  const mainImage = NextSanityImage(image);
  return (
    <div className="wrapper-container mx-auto [&>div]:!w-full [&>div]:!max-w-full">
      <Image
        isBlurred
        src={mainImage?.src}
        alt={title}
        className="!rounded-md object-cover object-[center_top] !w-full max-h-[250px] sm:max-h-[400px] md:max-h-[500px] !scale-100"
      />
    </div>
  );
}
