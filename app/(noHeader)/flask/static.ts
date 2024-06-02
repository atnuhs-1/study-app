import fs from 'fs';
import path from 'path';
import { GetServerSideProps } from 'next';

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

export async function getImagesBase64(): Promise<ImageData[]> {
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