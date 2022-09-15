import React from "react";
import profile from "../../../../utilities/profile.png";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineGif, AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import LikeComment from "../../../Shared/LikeComment";
import comment from "../../../../utilities/comment.jpg";
import { BsFillEmojiSmileFill, BsThreeDots } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { IoIosPaperPlane } from "react-icons/io";

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
      <p className="my-3">your favourite game</p>
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
      {/* comment section */}
      <div>
        <div className="flex gap-3">
          <img src={profile} alt="" className="w-11 h-11 rounded-full" />
          <div className="flex items-center gap-3">
            <div className="w-40 h-56 bg-gray-100 p-2 rounded-xl">
              <p className="font-semibold mb-1">Yasin Arafat</p>
              <img src={comment} alt="" />
            </div>
            <span>
              <BsThreeDots className="text-xl text-gray-500" />
            </span>
          </div>
        </div>
        <div className="ml-14 my-3 flex items-center gap-5">
          <span className="font-bold text-gray-500">Like</span>
          <span className="font-bold text-gray-500">Reply</span>
          <span className="text-sm font-semibold text-gray-500">
            54 minutes ago
          </span>
        </div>
        <div className="flex gap-3 ml-14">
          <img src={profile} alt="" className="w-11 h-11 rounded-full" />
          <div className="flex items-center gap-3">
            <div className="w-40 h-16 bg-gray-100 p-2 rounded-xl">
              <p className="font-semibold mb-1">Yasin Arafat</p>
              <p>Hello</p>
            </div>
            <span>
              <BsThreeDots className="text-xl text-gray-500" />
            </span>
          </div>
        </div>
        <div className="ml-28 my-3 flex items-center gap-5">
          <span className="font-bold text-gray-500">Like</span>
          <span className="text-sm font-semibold text-gray-500">
            1 second ago
          </span>
        </div>
        <div className="my-4 ml-14">
          <div className="w-full flex justify-between gap-7">
            <img className="w-11 h-11 rounded-full" src={profile} alt="" />
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-2">
                <BsFillEmojiSmileFill className="text-lg" />
                <FiPaperclip className="text-lg" />
                <AiOutlineGif className="text-2xl" />
              </div>
              <div className="w-full relative">
                <IoIosPaperPlane className="absolute right-5 top-2 text-xl" />
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full py-2 px-3 pr-10 rounded-full bg-gray-200 focus:outline-none focus:ring-1 font-semibold text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
