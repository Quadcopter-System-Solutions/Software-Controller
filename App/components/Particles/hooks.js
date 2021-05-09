import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const useWebsocket = () => {
  const ref = useRef(undefined);
  const [videoFrame, setVideoFrame] = useState("");

  useEffect(() => {
    const socket = io("http://192.168.0.147:8080");

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("image", (data) => {
      setVideoFrame(data);
    });

    ref.current = socket;

    return () => socket.disconnect();
  }, []);

  return videoFrame;
};
