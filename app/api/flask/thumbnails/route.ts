import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const imageDirectory =
    "/Users/atnuhs/College/Class/S5/isp1/project6/static/thumbnails";
  const imageFiles = fs.readdirSync(imageDirectory);

  const return_Files = imageFiles.map((file) => {
    const imagePath = path.join(imageDirectory, file);
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString("base64");
    const imageDataURI = `data:image/jpeg;base64,${imageBase64}`;

    return {
      src: imageDataURI,
      name: file,
    };
  });

  return NextResponse.json(return_Files);
}
