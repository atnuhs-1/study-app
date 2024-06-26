"use client";

import Link from "next/link";

interface Image {
  name: string;
  src: string;
}

export default function ImageGridView({ images, loading }: { images: Image[] ,loading: boolean}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg-grid-cols-5 ">
      
      {images.map((image, index) => (
        <div key={index}>
          <Link
            href={`#`}
            className="w-fit"
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
