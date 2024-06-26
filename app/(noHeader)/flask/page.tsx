"use client"

import { fetchThumbnails } from "@/app/api/videoApi";
import VideoGridView from "./components/video-grid-view";
import { useEffect, useState } from "react";

export default  function Page() {
  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // 初期表示時の処理
  useEffect(() => {

    const init = async () => {
      setLoading(true); // データ取得開始時にローディング状態をtrueに設定
      const thumbnailsData = await fetchThumbnails();
      setThumbnails(thumbnailsData);

      setLoading(false); // データ取得完了時にローディング状態をfalseに設定
    };

    init();
  }, []);

  return (
    <>
      <VideoGridView thumbnails={thumbnails}/>
    </>
  );
}
