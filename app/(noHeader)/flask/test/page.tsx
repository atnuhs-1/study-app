"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface Image {
  name: string;
  src: string;
}

export default function Page() {
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
      const fetchedImages = await fetch("/api/flask/images").then((res) =>
        res.json()
      );

      // 最初の9枚の画像を取得
      const newProcessedImages = fetchedImages
        .slice(0, 9)
        .map((img: { src: string; name: string }) => ({
          name: img.name,
          src: img.src,
        }));

      // console.log(newProcessedImages)

      setProcessedImages(newProcessedImages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        className="fixed top-50 left-64"
        onClick={() => handleThumbnailClick({ name: "movie1_2.mp4", src: "" })}
      >
        button
      </button>
      {processedImages.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt="" />
        </div>
      ))}
      <AlertDialog>
        <AlertDialogTrigger className="container">
          <Button>Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
