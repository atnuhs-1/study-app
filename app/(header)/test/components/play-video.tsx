"use client";
import { getFileList } from "@/app/data/static";
import ReactPlayer from "react-player/lazy";

// { fileList }: { fileList: string[] }

export default async function PlayVideo() {
  // console.log(fileList);
  const path = "movie1_1.mp4";
  // const videoPath = path.join(file, "/static/videos");
  return (
    <div className="">
      <video className="rounded-lg" width="1200" height="520" controls>
        <source src={`/static/videos/${path}`} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      {/* <ReactPlayer
        width="360px"
        height="240px"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing
        controls
      /> */}
    </div>
  );
}
