import React from "react";
import { FaSearch } from "react-icons/fa";
const RightBar = () => {
  return (
    <div className="ml-4 flex-1 md:ml-8 hidden lg:flex min-h-screen  flex-col gap-4 bg-black px-4 pt-1 sticky top-0">
      <div className="flex items-center sticky z-50 bg-black  top-0 overflow-hidden rounded-full border-2 border-[#2f3336] pl-2 text-gray-400">
        <FaSearch className="text-xl text-gray-400 size-8 0 rounded-full" />
        <input
          type="text"
          className="w-full border-none bg-transparent px-2 py-3 text-xl outline-none"
          placeholder="Search..."
        />
      </div>

      <div className="flex flex-col gap-4 overflow-hidden rounded-3xl border-2 border-[#2f3336] p-4 text-gray-400">
        <h1 className="text-xl font-semibold text-white">
          Subscribe to premium
        </h1>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde
          laborum optio quasi laudantium doloribus iste consequatur nisi!
          Excepturi, illum?
        </p>

        <button className="w-max rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-white">
          Subscribe
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-hidden rounded-3xl border-2 border-[#2f3336] p-4 text-gray-400">
        <h1 className="text-xl font-semibold text-white">Live on X</h1>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde
          laborum optio quasi laudantium doloribus iste consequatur nisi!
          Excepturi, illum?
        </p>
      </div>

      <div className="flex flex-col gap-6 overflow-hidden rounded-3xl border-2 border-[#2f3336] p-4 text-gray-400">
        <h1 className="text-xl font-semibold text-white">
          What&apos;s happening
        </h1>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Trending in Kenya</span>
            <span className="text-white font-bold">Khalif Kairo</span>
            <span className="text-xs text-gray-400">400 posts</span>
          </div>

          <div>...</div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Trending in Kenya</span>
            <span className="text-white font-bold">Elon Musk</span>
            <span className="text-xs text-gray-400">400 posts</span>
          </div>

          <div>...</div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Trending in Kenya</span>
            <span className="text-white font-bold">Donald Trump</span>
          </div>

          <div>...</div>
        </div>

        <span className="text-blue-400">Show more</span>
      </div>

      <div className="flex flex-col gap-6 overflow-hidden rounded-3xl border-2 border-[#2f3336] p-4 text-gray-400">
        <h1 className="text-xl font-semibold text-white">Who to follow</h1>

        <div className=" flex justify-between">
          <div className="flex items-center gap-1">
            <div className="size-8 rounded-full "></div>
            <div className="flex flex-col">
              <span className="text-sm text-white">Kennedy Mwangi</span>
              <span className="text-xs">@kennedyMwangi</span>
            </div>
          </div>

          <button className=" bg-white text-gray-700 px-4 rounded-full font-bold text-sm">
            Follow
          </button>
        </div>

        <div className=" flex justify-between">
          <div className="flex items-center gap-1">
            <div className="size-8 rounded-full bg-white"></div>
            <div className="flex flex-col">
              <span className="text-sm text-white">Kennedy Mwangi</span>
              <span className="text-xs">@kennedyMwangi</span>
            </div>
          </div>

          <button className=" bg-white text-gray-700 px-4 rounded-full font-bold text-sm">
            Follow
          </button>
        </div>

        <div className=" flex justify-between">
          <div className="flex items-center gap-1">
            <div className="size-8 rounded-full bg-white"></div>
            <div className="flex flex-col">
              <span className="text-sm text-white">Kennedy Mwangi</span>
              <span className="text-xs">@kennedyMwangi</span>
            </div>
          </div>

          <button className=" bg-white text-gray-700 px-4 rounded-full font-bold text-sm">
            Follow
          </button>
        </div>

        <span className="text-blue-400">Show more</span>
      </div>

      <div className=" text-gray-400 text-xs gap-4 flex flex-wrap p-4 ">
        <span>Terms of Service</span> <span>Privacy policy</span>{" "}
        <span>Cookie policy</span> <span>Accessibility</span>
        <span>Ads info</span> <span>More...</span>
      </div>
    </div>
  );
};

export default RightBar;
