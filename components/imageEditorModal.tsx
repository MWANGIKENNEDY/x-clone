import Image from "next/image";
import React from "react";

import {
  FaBackspace,
  FaRegSquare,
  FaPhotoVideo,
  FaRegBuilding,
} from "react-icons/fa";

const ImageEditorModal = ({
  previewURL,
  setIsSettingsOpen,
  settings,
  setSettings,
}: {
  previewURL: string;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  const handleSensitiveSettings = (sensitive: boolean) => {
    setSettings((prev) => ({ ...prev, sensitive }));
  };

  const handleChangeType = (type: "original" | "wide" | "square") => {
    setSettings((prev) => ({ ...prev, type }));
  };
  return (
    <div className=" bg-black bg-opacity-80 absolute top-0 left-0 right-0 bottom-0 p-12 flex items-start justify-center z-50">
      {/* 
top section  */}

      <div className=" max-w-[600px] ">
        <div className=" flex items-center justify-between mb-8">
          <div className=" flex items-center gap-8">
            <FaBackspace
              className=" text-5xl cursor-pointer"
              onClick={() => setIsSettingsOpen(false)}
            />
            <h1 className=" text-lg font-semibold">Media settings</h1>
          </div>
          <button onClick={()=>setIsSettingsOpen(false)} className=" bg-white px-4 py-2 rounded-full  text-gray-800 font-bold text-sm">
            Save
          </button>
        </div>

        {/* image container  */}
        <div className=" relative h-[600px] ">
          <Image
            src={previewURL}
            alt=""
            width={600}
            height={400}
            className={`w-full ${
              settings.type === "original"
                ? "h-full object-contain"
                : settings.type === "square"
                ? " aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
        {/* settings  */}

        <div className=" flex text-sm items-center justify-between mt-8">
          <div className=" flex-1 flex items-center gap-4 text-lg ">
            <div
              onClick={() => handleChangeType("original")}
              className=" flex items-center gap-2 cursor-pointer"
            >
              <FaRegBuilding className={`${settings.type === "original" ? "text-blue-400" : ""}`} />
              <span>Original</span>
            </div>
            <div
              onClick={() => handleChangeType("wide")}
              className=" flex items-center gap-2 cursor-pointer"
            >
              <FaPhotoVideo className={`${settings.type === "wide" ? "text-blue-400" : ""}`}  />
              <span>Wide</span>
            </div>
            <div
              onClick={() => handleChangeType("square")}
              className=" flex items-center gap-2 cursor-pointer"
            >
              <FaRegSquare className={`${settings.type === "square" ? "text-blue-400" : ""}`}  />
              <span>Square</span>
            </div>
          </div>
          <div
            onClick={() => handleSensitiveSettings(!settings.sensitive)}
            className={`cursor-pointer w-max py-1 px-4 rounded-full font-bold ${
              settings.sensitive
                ? "bg-red-400 text-white"
                : " bg-white text-gray-800"
            }`}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditorModal;
