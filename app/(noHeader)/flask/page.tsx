import CommentSection from "./components/comment-section";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import VideoSection from "./components/video-section";

export default function Page() {
  console.log("----------")
  return (
    <>
      <Header />
      <div className="h-screen mx-10 grid sm:grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-9 grid grid-rows-2">
          <VideoSection />
          <CommentSection />
        </div>

        <Sidebar />
      </div>
    </>
  );
}
