import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
//   const imagesDir = path.join(process.cwd(), 'public/images');
//   const imageFiles = fs.readdirSync(imagesDir).map(file => {
//     return path.join('/images', file);
//   });
    const imageDirectory = '/Users/atnuhs/College/Class/S5/isp1/project6/static/images';
    const imageFiles = fs.readdirSync(imageDirectory);
  
    // .DS_Storeを除外する
    const filteredFiles = imageFiles.filter(file => file !== '.DS_Store');
  
    const return_Files =  filteredFiles.map(file => {
      const imagePath = path.join(imageDirectory, file);
      const imageBuffer = fs.readFileSync(imagePath);
      const imageBase64 = imageBuffer.toString('base64');
      const imageDataURI = `data:image/jpeg;base64,${imageBase64}`;
  
      return {
        src: imageDataURI,
        name: file
      };
    });

  return NextResponse.json(return_Files);
}
