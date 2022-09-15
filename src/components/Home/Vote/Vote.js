import React from "react";
import profile from "../../../utilities/profile.png";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import LikeComment from "../../Shared/LikeComment";

const Vote = () => {
  return (
    <div className="bg-base-100 p-3 my-3 rounded text-gray-700">
      <div className="flex items-center justify-between">
        <div class="avatar flex items-center">
          <div class="w-10 rounded-full">
            <img src={profile} />
          </div>
          <span>
            <p className="ml-3 font-semibold text-gray-700">Yasin Arafat</p>
            <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
              <span>1 hour ago</span> <AiOutlineGlobal />
            </p>
          </span>
        </div>
        <span>
          <GoChevronDown className="font-bold" />
        </span>
      </div>
      <p>your favourite game</p>
      <div className="mt-3 mb-14">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked="checked"
              name=""
              id=""
              className="w-4 h-4"
            />
            <div className="w-64 bg-gray-200 px-2 py-1 rounded">
              <p className="text-xs">Added by you</p>
              <p className="">Football</p>
            </div>
          </div>
          <div>
            <img src={profile} alt="" className="w-7 h-7 rounded-full" />
            <p className="text-xs">1 Vote</p>
          </div>
          <button className="p-1 rounded-full">
            <MdOutlineCancel className="bg-gray-300 rounded-full text-xl" />
          </button>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" className="w-4 h-4" />
            <div className="w-64 bg-gray-200 px-2 py-1 rounded">
              <p className="text-xs">Added by you</p>
              <p className="">Football</p>
            </div>
          </div>
          <button className="p-1 rounded-full">
            <MdOutlineCancel className="bg-gray-300 rounded-full text-xl" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" className="w-4 h-4" />
            <div className="w-64 bg-gray-200 px-2 py-1 rounded">
              <p className="text-xs">Added by you</p>
              <p className="">Football</p>
            </div>
          </div>
          <button className="p-1 rounded-full">
            <MdOutlineCancel className="bg-gray-300 rounded-full text-xl" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-end text-gray-600 mb-3">2 Comment</p>
      </div>
      <LikeComment />
    </div>
  );
};

export default Vote;
