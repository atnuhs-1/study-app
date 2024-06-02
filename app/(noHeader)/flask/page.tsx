import Link from "next/link";
import CommentSection from "./components/comment-section";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import VideoSection from "./components/video-section";
import { getImagesBase64 } from "./static";

export default async function Page() {
  const thumbnails = await getImagesBase64();
  return (
    <>
      <Header />
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-2">
        {thumbnails.map((image, index) => (
          <Link
            href={`/flask/video/${encodeURIComponent(image.name.split(".")[0])}.mp4`}
            className="w-full"
            key={index}
          >
            <img
              className="rounded"
              width="330"
              src={image.src}
              alt={`Thumbnail ${index}`}
            />
            <p className="font-light">{image.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
