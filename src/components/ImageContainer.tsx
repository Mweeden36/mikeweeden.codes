import Image from "next/image";
import Link from "next/link";
import imageSize from "image-size";

export default async function ImageContainer(props: {
  imagePath: string;
  imageName: string;
  altText: string;
}) {
  const dimensions = imageSize(`@/..${props.imagePath}/${props.imageName}`);

  /** Apple images are kinda strange. Their height and width are always
   * the same, but the orientation changes.
   * Orientation 6 is vertical, 1 is horizontal */
  const height =
    dimensions.orientation === 6 ? dimensions.width : dimensions.height;
  const width =
    dimensions.orientation === 6 ? dimensions.height : dimensions.width;

  const widthHeightRatio = height! / width!;
  // 16rem * 16px & ratio
  const galleryHeight = Math.ceil(16 * 16 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  const imageLink = `${props.imagePath.replace("/public", "")}/pictures/${props.imageName.replace("_sm.jpg", ".jpg")}`;

  return (
    <div
      className="w-64 justify-self-center relative cursor-pointer"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link href={imageLink} className="grid place-content-center">
        <Image
          className="object-cover rounded-md bg-clip-content hover:drop-shadow-md hover:opacity-80"
          width={width}
          height={height}
          sizes="250px"
          alt={props.altText}
          src={`${props.imagePath.replace("/public", "")}/${props.imageName}`}
        />
      </Link>
    </div>
  );
}
