import { promises as fs } from "fs";
import path from "path";
import ImageContainer from "@/components/ImageContainer";

export default async function ImageGallery(props: {
  imageDir: string;
  defaultAltText: string;
}) {
  const imageDirectory = path.join(process.cwd(), props.imageDir);
  const imageFilenames = await fs.readdir(imageDirectory);
  return (
    <div className="flex-grow py-4 grid grid-cols-gallery auto-rows-[10px]">
      {imageFilenames.map((imageName: string) => (
        <ImageContainer
          imagePath={props.imageDir}
          imageName={imageName}
          key={imageName}
          altText={props.defaultAltText}
        />
      ))}
    </div>
  );
}
