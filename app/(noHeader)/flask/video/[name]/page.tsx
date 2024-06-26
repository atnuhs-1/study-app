"use client";

import VideoSection from "../../components/video-section";
import Sidebar from "../../components/sidebar";
import ImageGridView from "../../components/images-grid-view";
import { useEffect, useState } from "react";
import { fetchImages, fetchThumbnails, playVideo } from "@/app/api/videoApi";
import Skeletons from "../../components/skeletons";

const VideoPage = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const videoUrl = `/static/videos/${encodeURIComponent(name as string)}`;

  const [images, setImages] = useState([]); // Image-grid-viewの画像
  const [thumbnails, setThumbnails] = useState([]); // Sidebarのサムネイル画像
  const [loading, setLoading] = useState(true); // ローディング状態の管理
  const [num_faces, setNumFaces] = useState([])

  // const handleImageClick = (name) => {
  //   fetchImages(name);
  // };


  useEffect(() => {
    const init = async () => {
      setLoading(true); // データ取得開始時にローディング状態をtrueに設定
      const thumbnailsData = await fetchThumbnails();
      setThumbnails(thumbnailsData);

      const num_faces_data = await playVideo(name);
      console.log(num_faces_data)
      // setNumFaces(num_faces_data);

      const imagesData = await fetchImages();
      setImages(imagesData);
      setLoading(false); // データ取得完了時にローディング状態をfalseに設定
    };

    init();
  }, [name]);

  return (
    <>
      <div className="h-screen mx-10 grid sm:grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-9 grid grid-rows-2 space-y-5 ">
          <VideoSection videoPath={videoUrl} />
          {loading ? 
            <Skeletons count={9}/> // ローディング中はスケルトンを表示
            : 
            <ImageGridView images={images} loading={loading}/>}
        </div>

        <Sidebar thumbnails={thumbnails} />
      </div>
    </>
  );
};

export default VideoPage;
