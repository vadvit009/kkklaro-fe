"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/images/home/hero-bg-animation.mp4";
// const POSTER_SRC = "/images/home/hero-bg.webp";
const POSTER_SRC = "/images/home/hero-bg-opti.webp";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const startVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || showVideo) return;

    video.currentTime = 0;
    video.play().then(() => setShowVideo(true));
  }, [showVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => startVideo();
    video.addEventListener("canplaythrough", handleReady);

    if (video.readyState >= 4) startVideo();

    return () => video.removeEventListener("canplaythrough", handleReady);
  }, [startVideo]);

  return (
    <>
      <img
        src={POSTER_SRC}
        alt=""
        className="pointer-events-none col-start-1 row-start-1 h-full w-full object-cover"
      />
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className={`pointer-events-none col-start-1 row-start-1 h-full w-full overflow-hidden object-cover ${
          showVideo ? "visible" : "invisible"
        }`}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </>
  );
};
