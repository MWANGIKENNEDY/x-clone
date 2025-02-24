"use client";
import { imageAction } from "@/actions/imageAction";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaGlobe,
  FaImage,
  FaRegSmile,
  FaCalendarAlt,
  FaLocationArrow,
  FaBold,
  FaItalic,
} from "react-icons/fa";
import ImageEditorModal from "./imageEditorModal";

const Share = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [media, setMedia] = useState<File | null>(null);
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const previewURL = media ? URL.createObjectURL(media) : null;

  console.log(media);

  return (
    <>
      <form
        action={(formData) => imageAction(formData, settings)}
        className=" flex gap-4 border-b-2 border-borderGray p-2"
      >
        <div className="size-10 rounded-full bg-yellow-500"></div>

        <div className=" flex  flex-1 flex-col">
          <input
            type="text"
            name="desc"
            id=""
            placeholder="What is happening?!"
            className=" border-none placeholder:text-textGray font-bold  outline-none bg-transparent text-xl text-gray-400 py-4"
            accept="image/*,video/*"
          />
          <div className=" pb-2 border-b-2 border-borderGray">
            <span className=" text-sm font-semibold text-blue-500">
              Everyone can reply
            </span>
          </div>

          {media?.type.includes("image") && previewURL && (
            <div className="relative rounded-xl overflow-hidden">
              <Image
                alt=""
                src={previewURL}
                width={750}
                height={750}
                className={`max-w-[600px] max-h-[600px] w-auto h-auto ${
                  settings.type === "original"
                    ? "h-full object-contain"
                    : settings.type === "square"
                    ? " aspect-square object-cover"
                    : "aspect-video object-cover"
                }`}
              />
 <div onClick={()=>setMedia(null)} className="absolute top-6 size-8  rounded-full cursor-pointer right-6 bg-black bg-opacity-50 text-sm text-white font-semibold">
                X
              </div>
              <div
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className=" absolute top-6 left-6 z-20 bg-gray-600 px-4 cursor-pointer rounded-full"
              >
                Edit
              </div>
            </div>
          )}

          {media?.type.includes("video") && previewURL && (
            <div className="relative rounded-xl overflow-hidden">
              <video src={previewURL} controls></video>
              <div onClick={()=>setMedia(null)} className="absolute top-6 size-8  rounded-full cursor-pointer right-6 bg-black bg-opacity-50 text-sm text-white font-semibold">
                X
              </div>
            </div>
          )}

          {isSettingsOpen && previewURL && (
            <ImageEditorModal
              previewURL={previewURL}
              setIsSettingsOpen={setIsSettingsOpen}
              settings={settings}
              setSettings={setSettings}
            />
          )}

          <div className=" flex items-center justify-between py-3 ">
            <div className=" flex items-center gap-4 text-xl text-blue-500">
              <input
                type="file"
                name="file"
                onChange={handleMediaChange}
                id="file"
                className=" hidden"
              />

              <FaGlobe className=" cursor-pointer" />

              <label className="cursor-pointer" htmlFor="file">
                <FaImage />
              </label>

              <FaRegSmile className=" cursor-pointer" />

              <FaCalendarAlt className=" cursor-pointer" />

              <FaLocationArrow className=" cursor-pointer" />

              <FaBold className=" cursor-pointer" />

              <FaItalic />
            </div>
            <div>
              <button
                type="submit"
                className=" bg-gray-600 px-6 py-2 rounded-full  text-black font-bold"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Share;
