"use client";
import ReactPlayer from "react-player/lazy";



export default function PlayVideo({videoPath}: {videoPath: string}) {

  const path = "movie1_1.mp4";
  console.log(`videoPath: ${videoPath}`);
  // const videoPath = path.join(file, "/static/videos");
  return (
    <div className="">
      <video className="rounded-lg" width="1200" height="520" controls>
        <source src={videoPath} type="video/mp4" />
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
