import ImageGallery from "@/components/ImageGallery";

export default function Gus() {
  return (
    <main className="flex flex-grow p-8 justify-center">
      <div className="flex-col max-w-6xl flex-auto">
        <h1 className="font-semibold text-3xl">
          Enjoy some pictures of <b>Gus</b>
        </h1>
        <ImageGallery
          imageDir="/public/gus"
          defaultAltText="A picture of Gus"
        />
      </div>
    </main>
  );
}
