import fs from 'fs';
import path from 'path';


// export async function getImagesBase64() {
//     const imageDirectory = '/Users/atnuhs/College/Class/S5/isp1/project6/static/thumbnails';
//     const imageFiles = fs.readdirSync(imageDirectory);
//     console.log(imageFiles);

//     const imagesBase64 = [];

//     for (const file of imageFiles) {
//         try {
//             const imagePath = path.resolve(imageDirectory, file);
//             // console.log(imagePath);
//             const imageBuffer = fs.readFileSync(imagePath);
//             const imageBase64 = imageBuffer.toString('base64');
//             const imageDataURI = `data:image/jpeg;base64,${imageBase64}`;
//             imagesBase64.push(imageDataURI);
//         } catch (error) {
//             console.error(`Error processing file ${file}:`, error);
//         }
//     }

//     return imagesBase64;
// }

interface ImageData {
    src: string;
    name: string;
}

export async function getThumbnailsBase64(): Promise<ImageData[]> {
    const imageDirectory = '/Users/atnuhs/College/Class/S5/isp1/project6/static/thumbnails';
    const imageFiles = fs.readdirSync(imageDirectory);

    return imageFiles.map(file => {
        const imagePath = path.join(imageDirectory, file);
        const imageBuffer = fs.readFileSync(imagePath);
        const imageBase64 = imageBuffer.toString('base64');
        const imageDataURI = `data:image/jpeg;base64,${imageBase64}`;

        return {
            src: imageDataURI,
            name: file
        };
    });
}

export async function getImagesBase64(): Promise<ImageData[]> {
  const imageDirectory = '/Users/atnuhs/College/Class/S5/isp1/project6/static/images';
  const imageFiles = fs.readdirSync(imageDirectory);

  // .DS_Storeを除外する
  const filteredFiles = imageFiles.filter(file => file !== '.DS_Store');

  return filteredFiles.map(file => {
    const imagePath = path.join(imageDirectory, file);
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString('base64');
    const imageDataURI = `data:image/jpeg;base64,${imageBase64}`;

    return {
      src: imageDataURI,
      name: file
    };
  });
}

export async function fetchVideoData(videoName: string) {
    const response = await fetch('http://127.0.0.1:5000/flask/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ video: `${videoName}` }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data from Flask endpoint');
    }
  
    return response.json();
  }
  
  