import { useEffect } from "react";

export  async function getRecognize() {

  const data = await fetch("http://127.0.0.1:5000/")
  
  return data;
}

