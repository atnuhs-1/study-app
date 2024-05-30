import { getImagesBase64 } from "../static";

export default async function Sidebar() {

  const thumbnails =  await getImagesBase64();
  return (
    <>
      <div className="col-span-3 w-full h-full flex flex-col items-start space-y-2 ">
        {thumbnails.map((imageDataURI, index) => (
          <img
            className="rounded"
            width="130"
   
            key={index}
            src={imageDataURI}
            alt={`Processed Image ${index}`}
          />
        ))}
      </div>
    </>
  );
}
