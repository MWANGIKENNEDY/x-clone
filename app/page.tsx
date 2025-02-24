import Post from "@/components/post";
import Share from "@/components/share";

export default function Home() {
  return (
    
    
    <div className="  min-h-screen w-full lg:min-w-[600px] max-w-[600px] flex-1 text-white  border-x-[1px] border-borderGray ">
   <div className=" w-full overflow-auto bg-black no-scroll sticky top-0  bg-opacity-80">
   <div className="flex justify-between mt-5 border-b-2 border-borderGray   text-white">
          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className="border-b-4 border-blue-400 px-2 py-[16px] w-full  flex justify-center ">
              <span>For You</span>
            </div>
          </div>

          <div className="flex  hover:bg-gray-400/30 justify-center grow px-[16px]  ">
            <div className=" px-2 py-[16px] w-full  flex justify-center ">
              <span>Following</span>
            </div>
          </div>

        
        </div>

   </div>
   
  

      {/* post  */}

      <Share />

      <Post />
      <Post />
      <Post />
    </div>
  );
}
