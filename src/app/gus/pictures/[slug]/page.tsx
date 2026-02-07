import path from "path";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";

export async function generateStaticParams() {
  const imageDirectory = path.join(process.cwd(), "/public/gus");
  const imageFilenames = await fs.readdir(imageDirectory);
  return imageFilenames.map((fileName) => ({
    slug: fileName,
  }));
}

export default async function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const image = await import(`@/../public/gus/${resolvedParams.slug}`);

  return (
    <main className="flex flex-auto flex-col">
      <div className="flex justify-end p-2">
        <Link href="/gus" className="hover:text-silver dark:hover:text-primary">
          <X />
        </Link>
      </div>
      <div className="flex flex-auto p-4 pt-0">
        <div className="flex flex-auto relative">
          <Image
            src={image.default.src}
            alt="A picture of Gus"
            fill
            style={{
              objectFit: "contain",
            }}
          ></Image>
        </div>
      </div>
    </main>
  );
}
