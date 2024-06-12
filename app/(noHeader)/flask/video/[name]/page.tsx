// "use client"

import Header from "../../components/header";
import VideoSection from "../../components/video-section";
import CommentSection from "../../components/comment-section";
import Sidebar from "../../components/sidebar";
import { fetchVideoData, getImagesBase64 } from "../../static";
import ImageGridView from "../../components/images-grid-view";
import ImageGridView2 from "../../components/images-grid-view2";

const VideoPage = async ({ params }: { params: { name: string } }) => {
  const { name } = params;

  // Flaskのエンドポイントにリクエストを送信
  let processedData;
  try {
    processedData = await fetchVideoData(name);
  } catch (error) {
    console.error('Error fetching video data:', error);
    return <div>Error loading video data</div>;
  }
  

  // Flaskの処理が完了してから画像を取得
  const images = await getImagesBase64();
  const videoUrl = `/static/videos/${encodeURIComponent(name as string)}`;
  // const videoUrl = `/Users/atnuhs/College/Class/S5/isp1/project6/static/videos/${encodeURIComponent(name as string)}`

  return (
    <>
      <div className="h-screen mx-10 grid sm:grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-9 grid grid-rows-2 space-y-5">
          <VideoSection videoPath={videoUrl}/>
          <ImageGridView images={images}/>
        </div>

        <Sidebar />
      </div>
    </>
  );
};

export default VideoPage;
