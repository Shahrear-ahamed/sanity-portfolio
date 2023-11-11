import { useNextSanityImage } from "next-sanity-image";
import { client } from "./sanity.client";
import { SanityImageType } from "@/interfaces/sanityImageType";

const NextSanityImage = (image: any): SanityImageType => {
  return useNextSanityImage(client, image)!;
};

export default NextSanityImage;
