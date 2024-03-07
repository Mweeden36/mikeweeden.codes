import Image from "next/image";
import InfoBlock from "@/components/InfoBlock";
import LinksBlock from "@/components/LinksBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-24 p-8 gap-4">
      <Image
        className="rounded-full drop-shadow-md"
        src="/headshotbw.jpg"
        alt="Mike's head"
        width="216"
        height="216"
      />
      <InfoBlock />
      <p className="sm:w-1/3 text-center p-4">
        I&apos;m passionate about building easy-to-use and snappy frontend
        applications. I like hockey and moderate-length walks on the beach.
      </p>
      <LinksBlock />
    </main>
  );
}
