import React from "react";
import PostInfo from "./postInfo";
import {
  FaRetweet,
  FaRocketchat,
  FaHeart,
  FaRegChartBar,
  FaRegBookmark,
  FaUpload,
} from "react-icons/fa";
import { imagekit } from "@/lib/utils";
import Image from "./image";
import Video from "./video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetaData?: { sensitive: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67b4c292432c47641612d428");

  return (
    <div className=" flex flex-col gap-1 px-3 cursor-pointer border-b-[1px] border-borderGray py-2 ">
      <div className=" flex gap-2 items-center text-gray-400  ">
        <div className="w-10 flex justify-end ">
          <FaRetweet />
        </div>
        <span className="  text-sm ">Kennedy reposted</span>
      </div>

      <div className=" flex gap-2  ">
        {/* user image section */}

        <div className="size-10 bg-blue-500 rounded-full "></div>

        {/* post content section */}

        <div className=" flex-1 flex flex-col gap-[2px] ">
          <PostInfo />
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            voluptas, incidunt expedita possimus, labore ipsa dolores
            necessitatibus ipsam hic ut impedit laboriosam tempore ea. A ea
            nobis quo atque officiis? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Illo voluptas, incidunt expedita possimus, labore
            ipsa dolores necessitatibus ipsam hic ut impedit laboriosam tempore
            ea. A ea nobis quo atque officiis? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo voluptas, incidunt expedita
            possimus, labore ipsa dolores necessitatibus ipsam hic ut impedit
            laboriosam tempore ea. A ea nobis quo atque officiis? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Illo voluptas,
            incidunt expedita possimus, labore ipsa dolores necessitatibus ipsam
            hic ut impedit laboriosam tempore ea. A ea nobis quo atque officiis?
          </div>

          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              alt=""
              path={fileDetails.url}
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetaData?.sensitive ? "blur-md" : ""}
            />
          ) : (
            <Video
              path={fileDetails.url}
              className={fileDetails.customMetaData?.sensitive ? "blur-md" : ""}
            />
          )}

          <div className=" mt-3 flex  text-gray-400 ">
            <div className=" flex flex-1 justify-between items-center  text-sm">
              <div className=" flex gap-2 items-center group ">
                <FaRocketchat className=" group-hover:fill-iconBlue text-base" />
                <span className=" group-hover:text-iconBlue">157</span>
              </div>
              <div className=" flex gap-2 items-center group">
                <FaRetweet className=" group-hover:fill-iconGreen text-base" />
                <span className=" group-hover:text-iconGreen">1.9k</span>
              </div>

              <div className=" flex gap-2 items-center group">
                <FaHeart className=" group-hover:fill-iconPink text-base" />
                <span className=" group-hover:text-iconPink">157</span>
              </div>

              <div className=" flex gap-2 items-center group ">
                <FaRegChartBar className=" group-hover:fill-iconBlue text-base" />
                <span className=" group-hover:text-iconBlue">1.3M</span>
              </div>

              <div className=" flex items-center gap-2 ">
                <div className=" group">
                  <FaRegBookmark className=" group-hover:fill-iconBlue text-base" />
                </div>
                <div className=" group">
                  <FaUpload className=" group-hover:fill-iconBlue text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
