import Link from "next/link";
import { getThumbnailsBase64 } from "../static";

export default async function Sidebar() {
  const thumbnails = await getThumbnailsBase64();

  return (
    <>
      <div className="col-span-3 w-full h-full flex flex-col items-start space-y-2 ">
        {thumbnails.map((image, index) => (
          <Link
            href={`/flask/video/${encodeURIComponent(image.name.split(".")[0])}.mp4`}
            className="w-full flex space-x-2"
            key={index}
          >
            <img
              className="rounded"
              width="130"
              src={image.src}
              alt={`Thumbnail ${index}`}
            />
            <p className="font-light antialiased ">{image.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
