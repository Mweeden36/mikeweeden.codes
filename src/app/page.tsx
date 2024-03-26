import Image from "next/image";
import InfoBlock from "@/components/InfoBlock";
import LinksBlock from "@/components/LinksBlock";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center p-8 gap-4">
      <Image
        className="rounded-full drop-shadow-md hover:grayscale"
        src="/headshot.jpg"
        alt="Mike's head"
        width="216"
        height="216"
      />
      <InfoBlock />
      <p className="md:w-1/3 text-center p-4 max-w-3xl">
        I&apos;m passionate about building easy-to-use, and snappy frontend
        applications. I like hockey, UI/UX Development, and moderate-length
        walks on the beach.
      </p>
      <LinksBlock />
    </main>
  );
}
