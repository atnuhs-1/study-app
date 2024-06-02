import PlayVideo from "./play-video";

export default function VideoSection({videoPath}: {videoPath: string}) {
  return (
    <div className="aspect-video">
      <PlayVideo videoPath={videoPath}/>
    </div>
  );
}
