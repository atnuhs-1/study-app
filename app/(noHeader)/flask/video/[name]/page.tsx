
import Header from "../../components/header";
import VideoSection from "../../components/video-section";
import CommentSection from "../../components/comment-section";
import Sidebar from "../../components/sidebar";

const VideoPage = ({ params }: { params: { name: string } }) => {
  const name = params.name;

  if (!name) {
    return <div>Loading...</div>;
  }

  const videoUrl = `/static/videos/${encodeURIComponent(name as string)}`;

  return (
    <>
      <Header />
      <div className="h-screen mx-10 grid sm:grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-9 grid grid-rows-2">
          <VideoSection videoPath={videoUrl}/>
          <CommentSection />
        </div>

        <Sidebar />
      </div>
    </>
  );
};

export default VideoPage;
