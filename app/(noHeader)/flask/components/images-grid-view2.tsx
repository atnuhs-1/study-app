"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Image {
  name: string;
  src: string;
}

export default function ImageGridView2({
  images,
}: {
  images: Image[];
}) {
  const [processedImages, setProcessedImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);

  const handleThumbnailClick = async (image: Image) => {
    setLoading(true);

    try {
      // Flaskのエンドポイントにリクエストを送信
      const response = await fetch("/api/flask/processVideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoName: image.name }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from Flask endpoint");
      }

      await response.json(); // 処理が完了したことを待つ

      // 処理済みの画像をフェッチ
      const fetchedImages = await fetch("/api/images").then((res) =>
        res.json()
      );

      // 最初の9枚の画像を取得
      const newProcessedImages = fetchedImages.slice(0, 9).map((img: { src: string, name: string }) => ({
        name: img.name,
        src: img.src,
      }));

      setProcessedImages(newProcessedImages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {loading ? (
          <p>Loading...</p>
        ) : processedImages.length > 0 ? (
          processedImages.map((image, index) => (
            <div key={index}>
              <img
                className="rounded"
                width="330"
                src={image.src}
                alt={`Processed Image ${index}`}
              />
              <p className="font-light">{image.name.split(".")[0]}</p>
            </div>
          ))
        ) : (
          images.map((image, index) => (
            <div key={index}>
              <img
                className="rounded"
                width="330"
                src={image.src}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(image)}
              />
              <p className="font-light">{image.name.split(".")[0]}</p>
            </div>
          ))
        )}
      </div>
      <Button onClick={() => setProcessedImages([])}>Reset</Button>
    </div>
  );
}
