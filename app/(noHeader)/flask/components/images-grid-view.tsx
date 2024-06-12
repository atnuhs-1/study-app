"use client";

import Link from "next/link";
import { getImagesBase64 } from "../static";
import { Button } from "@/components/ui/button";

interface Image {
  name: string;
  src: string;
}

export default function ImageGridView({ images }: { images: Image[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg-grid-cols-5 ">
      {images.map((image, index) => (
        <div key={index}>
          <Link
            href={`/flask/video/${encodeURIComponent(
              image.name.split(".")[0]
            )}.mp4`}
            className=""
            key={index}
          >
            <img
              className="rounded"
              width="290"
              src={image.src}
              alt={`Thumbnail ${index}`}
            />
            {/* <p className="font-light">{image.name.split(".")[0]}</p> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
