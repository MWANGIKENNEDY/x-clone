import React from "react";
import {
    FaGlobe,
    FaImage,
    FaRegSmile,
    FaCalendarAlt,
    FaLocationArrow,
    FaBold,
    FaItalic,
  } from "react-icons/fa";

const PostModal = () => {
  return (
    <div className=" absolute w-screen h-screen inset-0 z-50 bg-[#293139a6] flex justify-center ">
      <div className=" mt-5 bg-black h-max text-white w-full max-w-screen-md p-5 rounded-xl">
        <div className=" flex items-center justify-between ">
          <span>x</span>
          <span>Drafts</span>
        </div>

        <div>
          <div className=" flex mt-8 gap-2 ">
            <div className="size-12 bg-green-400   "></div>
            <textarea
              name=""
              id=""
              className=" text-lg p-0 placeholder-gray-500 h-max flex-1 mt-[0.5rem] bg-green-400 border-none outline-none "
              placeholder="What is happening  ?"
              rows={3}
            ></textarea>
          </div>
        </div>
        <span className=" mt-4 block text-blue-500 text-sm ">Everyone can reply </span>

          <div className=" flex items-center justify-between py-3 ">
                    <div className=" flex items-center gap-4 text-xl text-blue-500">
                      <input
                        type="file"
                        name="file"
                    
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
    </div>
  );
};

export default PostModal;
