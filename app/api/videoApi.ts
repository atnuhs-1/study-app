// src/api/videoApi.ts
export const fetchThumbnails = async () => {
    try {
      const fetchedImages = await fetch("/api/flask/thumbnails").then((res) =>
        res.json()
      );
  
      const newProcessedImages = fetchedImages
        .slice(0, 9)
        .map((img: { src: string; name: string }) => ({
          name: img.name,
          src: img.src,
        }));
  
      return newProcessedImages;
    } catch (error) {
      console.error("Error fetching thumbnails:", error);
      return [];
    }
  };
  
  export const playVideo = async (name: string):Promise<Response | void> => {
    try {
      const res = await fetch("/api/flask/playVideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoName: name }),
      });
    //   console.log(res);
      const data = await res.json();
    //   console.log(data.num_faces)
      return data.num_faces
    } catch (e) {
      console.log(e);
    }
  };
  
  export const fetchImages = async () => {
    try {
      const fetchedImages = await fetch("/api/flask/images").then((res) =>
        res.json()
      );
  
      const newProcessedImages = fetchedImages
        .slice(0, 9)
        .map((img: { src: string; name: string }) => ({
          name: img.name,
          src: img.src,
        }));
  
      return newProcessedImages;
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };