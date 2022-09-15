import React from "react";
import profile from "../../../utilities/profile.png";
import myDay from "../../../utilities/myDay.jpg";
import { AiOutlinePlus } from "react-icons/ai";

const MySection = () => {
  return (
    <div className="w-[650px] mx-5">
      <div className="flex gap-2">
        <div
          style={{
            backgroundImage: `url(${profile})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-36 h-44 rounded"
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
        <div className="w-36 h-44 rounded bg-gray-400">
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
    </div>
  );
};

export default MySection;
