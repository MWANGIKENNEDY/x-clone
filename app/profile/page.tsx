import Post from "@/components/post";
import React from "react";

import { FaLongArrowAltLeft, FaMapPin, FaCalendarAlt } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="  text-white flex-1 border-x border-borderGray">
      {/* intro section  */}

      <div className=" flex items-center gap-6 p-2 sticky top-0 bg-black z-50">
        <FaLongArrowAltLeft className=" text-3xl" />

        <div className=" flex flex-col">
          <span className=" text-xl font-bold">Kennedy Mwangi</span>
          <span className=" text-gray-400 text-sm">4000 posts</span>
        </div>
      </div>

      {/* image / profile section */}

      <div>
        {/* image section */}

        <div className=" h-32 bg-white w-full relative">
          <div className=" size-32 absolute bg-green-400 rounded-full left-5 top-[50%]"></div>
          <button className=" absolute -bottom-12 right-5 rounded-full border-[1px] border-gray-50 px-4 py-1">
            Edit profile
          </button>
        </div>

        <div className="mt-20 px-5">
          <h1 className=" text-xl font-bold">Kennedy Mwangi</h1>
          <span className=" text-gray-500">@kennedyMwangi</span>

          <div className=" flex items-center gap-6 text-gray-500 mt-4">
            <div className=" flex items-center gap-2">
              <FaMapPin />
              <span>Nairobi</span>
            </div>
            <button className="relative after:block after:w-full after:h-0.5 after:bg-blue-500 after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              Hover Me
            </button>
            <div className=" flex items-center gap-2">
              <FaCalendarAlt />
              <span>Joined April 2013</span>
            </div>
          </div>

          <div className=" flex items-center gap-6 text-gray-500 mt-4">
            <div className=" flex items-center gap-2">
              <span className=" text-white font-semibold">903</span>
              <span>Following</span>
            </div>

            <div className=" flex items-center gap-2">
              <span className=" text-white font-semibold">188</span>
              <span>Followers</span>
            </div>
          </div>
        </div>


        <div className="flex justify-between mt-5 border-b-2 border-borderGray  bg-black text-white overflow-x-scroll w-full  no-scrollbar">
          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className="border-b-4 border-blue-400 px-2 py-[16px] w-full  flex justify-center ">
              <span>Posts</span>
            </div>
          </div>

          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className=" px-2 py-[16px] w-full  flex justify-center ">
              <span>Replies</span>
            </div>
          </div>

          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className="px-2 py-[16px] w-full  flex justify-center ">
              <span>Highlights</span>
            </div>
          </div>

          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className=" px-2 py-[16px] w-full  flex justify-center ">
              <span>Articles</span>
            </div>
          </div>
          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className=" px-2 py-[16px] w-full  flex justify-center ">
              <span>Media</span>
            </div>
          </div>

          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className=" px-2 py-[16px] w-full  flex justify-center ">
              <span>Likes</span>
            </div>
          </div>
        </div>

        <Post />
        <Post />
      </div>
    </div>
  );
};

export default ProfilePage;
