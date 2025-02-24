import React from "react";

import {
  FaTwitter,
  FaHome,
  FaSearchPlus,
  FaRegEnvelope,
  FaRegBell,
  FaRegBookmark,
  FaNetworkWired,
  FaUsers,
  FaUser,
  FaEllipsisH,
  FaPencilAlt,
} from "react-icons/fa";

const menuItems = [
  { name: "", icon: <FaTwitter /> },
  { name: "Home", icon: <FaHome /> },
  { name: "Explore", icon: <FaSearchPlus /> },
  { name: "Messages", icon: <FaRegEnvelope /> },
  { name: "Notifications", icon: <FaRegBell /> },
  { name: "Bookmarks", icon: <FaRegBookmark /> },
  { name: "Communities", icon: <FaNetworkWired /> },
  { name: "People", icon: <FaUsers /> },
  { name: "Profile", icon: <FaUser /> },
  { name: "More", icon: <FaEllipsisH /> },
];

const LeftBar = () => {
  return (
    <div className=" px-2 md:px-4   h-screen hidden w-max  sticky top-0 text-white sm:flex flex-col justify-between  ">
      <ul className="  flex flex-col gap-8 justify-end">
        {menuItems.map((menuItem, index) => (
          <li
            className=" flex cursor-pointer items-center gap-4 text-3xl p-2 rounded-full hover:bg-[#181818]"
            key={index}
          >
            {menuItem.icon}{" "}
            <span className="hidden xl:block  text-xl">{menuItem.name}</span>
          </li>
        ))}

        <li className=" cursor-pointer flex items-center gap-4 text-3xl p-2 rounded-full bg-white lg:text-gray-600 font-semibold lg:justify-center ">
          <FaPencilAlt className=" text-black " />{" "}
          <span className="hidden  text-lg ">Post</span>
        </li>
      </ul>

      {/* user div */}

      <div className=" flex gap-4 text-4xl items-center cursor-pointer">
        <FaUser />

        <div className="hidden flex-col">
          <span className=" text-base font-bold">Kennedy Mwangi</span>
          <span className=" text-sm">@kennedyMwangi</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
