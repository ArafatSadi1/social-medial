import React from "react";
import profile from "../../../utilities/profile.png";
import myDay from "../../../utilities/myDay.jpg";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { BsCircleHalf, BsEmojiSmile } from "react-icons/bs";
import { MdMonochromePhotos } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import Vote from "./Vote/Vote";

const MySection = () => {
  return (
    <div className="w-[650px] mx-5">
      {/* add story section */}
      <div className="flex gap-2">
        <div
          style={{
            backgroundImage: `url(${profile})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-32 h-44 rounded"
        >
          <div className="mt-24">
            <div className="text-center mb-[-18px]">
              <button className="p-2 rounded-full bg-blue-700 border-2 border-gray-800">
                <AiOutlinePlus className="text-white font-bold" />
              </button>
            </div>
            <div className="bg-gray-900 h-16 rounded-t-3xl rounded-b">
              <p className="font-semibold text-sm text-white text-center pt-8">
                Your Story
              </p>
            </div>
          </div>
        </div>
        <div className="w-32 h-44 rounded bg-gray-400">
          <div className="h-full flex justify-center items-center">
            <div>
              <div class="avatar flex justify-end mb-[-8px] mr-2">
                <div class="w-6 rounded-full">
                  <img src={profile} />
                </div>
              </div>
              <img className="rounded mb-4" src={myDay} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Create post section */}
      <div className="bg-base-100 rounded my-3 p-3">
        <div className="w-full flex justify-between gap-3">
          <img className="w-10 h-10 rounded-full" src={profile} alt="" />
          <input
            type="text"
            placeholder="Create a new post..."
            className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:ring-1"
          />
        </div>
        <div class="divider"></div>
        <div className="text-gray-600 flex justify-evenly items-center gap-6 mt-8 mb-2">
          <span className="flex items-center gap-2">
            <BsCircleHalf />
            <p className="text-md">Background</p>
          </span>
          <span className="flex items-center gap-2">
            <MdMonochromePhotos />
            <p className="text-md">Photo/Video</p>
          </span>
          <span className="flex items-center gap-2">
            <BsEmojiSmile />
            <p className="text-md">Feeling/Activity</p>
          </span>
        </div>
      </div>
      {/* posts */}
      <div className="bg-base-100 p-3 rounded">
        <span className="flex items-center gap-4 font-semibold">
          <p className="text-red-500">Public Post</p>
          <p className="text-gray-800">Friend Post</p>
        </span>
      </div>
      {/* vote section */}
      <Vote/>
    </div>
  );
};

export default MySection;
