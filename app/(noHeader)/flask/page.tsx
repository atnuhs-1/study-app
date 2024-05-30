import CommentSection from "./components/comment-section";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import VideoSection from "./components/video-section";

export default function Page() {
  return (
    <>
      <Header />
      <div className="h-screen mx-8 grid sm:grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-9 grid grid-rows-2">
          <VideoSection />
          <CommentSection />
        </div>

        <Sidebar />
      </div>
    </>
  );
}
