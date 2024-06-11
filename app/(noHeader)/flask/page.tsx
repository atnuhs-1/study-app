
import Link from "next/link";
import Header from "./components/header";

import { getThumbnailsBase64 } from "./static";
import { getRecognize } from "@/app/components/flask";
import { Button } from "@/components/ui/button";
import VideoGridView from "./components/video-grid-view";


export default async function Page() {
  const thumbnails = await getThumbnailsBase64();

 

  return (
    <>
      <Header />
      <VideoGridView thumbnails={thumbnails}/>
    </>
  );
}
