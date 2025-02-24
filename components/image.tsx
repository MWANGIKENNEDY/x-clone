"use client";
import React from "react";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageTypes = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

import { IKImage } from "imagekitio-next";
const Image = ({ path, w, h, alt, className, tr }: ImageTypes) => {

  //when having a transformation property, the parent should have position relative
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      src={path}
      width={w}
      height={h}
      alt={alt}
      className={className}
      //this is the low quality image place-holder
      lqip={{active:true,quality:20}}
      {...(tr
        ? { transformation: [{ width: `$w`, height: `${h}` }] }
        : { width: w, height: h })}
    />
  );
};

export default Image;
0;
