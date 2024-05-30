import fs from "fs";
import path from "path";

export async function getFileList() {
  const directoryPath = path.join(process.cwd(), "public/static/videos");
  //   console.log(directoryPath);
  const files = fs.promises.readdir(directoryPath);
  return files;
}
