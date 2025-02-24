"use client"
import React from "react";
import { IKVideo } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({ path, className }: { path: string; className: string }) => {
  return (
    <IKVideo
      path={path}
      className={className}
      urlEndpoint={urlEndpoint}
      transformation={[{ height: "1080", width: "1920", q: "90" }]}
      controls={true}
    >
      Video
    </IKVideo>
  );
};

export default Video;
