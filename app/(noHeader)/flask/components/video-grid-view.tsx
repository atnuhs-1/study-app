"use client";

import Link from "next/link";
import { getImagesBase64 } from "../static";
import { Button } from "@/components/ui/button";

interface Thumbnail {
  name: string;
  src: string;
}

export default function VideoGridView({
  thumbnails,
}: {
  thumbnails: Thumbnail[];
}) {
  return (
    <div>
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-2">
        {thumbnails.map((image, index) => (
          <Link
            href={`/flask/video/${encodeURIComponent(
              image.name.split(".")[0]
            )}.mp4`}
            className="w-full"
            key={index}
          >
            <img
              className="rounded"
              width="330"
              src={image.src}
              alt={`Thumbnail ${index}`}
            />
            <p className="font-light">{image.name.split(".")[0]}</p>
          </Link>
        ))}
      </div>
      <Button>Process</Button>
    </div>
  );
}
