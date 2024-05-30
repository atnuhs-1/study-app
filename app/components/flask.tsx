"use client";
import { useEffect, useState } from "react";

export default function Flask() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data));
    console.log("aiueo");
  }, []);
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
