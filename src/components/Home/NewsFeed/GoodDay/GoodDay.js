import React from "react";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { BsFillEmojiHeartEyesFill, BsPlusLg } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import profile from "../../../../utilities/profile.png";
import car from "../../../../utilities/car (1).jpg";
import car1 from "../../../../utilities/car (2).jpg";
import car2 from "../../../../utilities/car (3).jpg";
import LoveComment from "../../../Shared/LoveComment";
import { IoHeartCircleSharp } from "react-icons/io5";
import {
  MdBookmark,
  MdDeleteForever,
  MdFlag,
  MdModeEdit,
  MdOutlineLink,
} from "react-icons/md";

const GoodDay = () => {
  return (
    <div className="col-span-3">
      <div className="bg-base-100 p-3 rounded text-primary">
        <div className="flex items-center justify-between">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={profile} />
            </div>
            <span>
              <span className="flex items-center gap-4">
                <p className="ml-3 font-semibold text-primary">Yasin Arafat</p>
                <p className="flex items-center gap-2">
                  <BsFillEmojiHeartEyesFill className="text-[#bc8f0a]" />{" "}
                  <span className="text-sm font-semibold text-gray-500">
                    is feeling ok
                  </span>
                </p>
              </span>
              <p className="ml-3 mt-1 text-xs text-secondary flex items-center gap-1">
                <span>1 hour ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="relative">
          <p className="my-3">Have a good day !</p>
          <div className="mb-14">
            <div className="grid grid-cols-2 gap-2">
              <img className="w-full h-full" src={car} alt="" />
              <img className="w-full h-full" src={car1} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img className="w-full h-full" src={car2} alt="" />
              <img className="w-full h-full" src={car1} alt="" />
              <div className="relative">
                <div className="absolute bg-black w-full h-full opacity-40"></div>
                <span className="absolute top-12 left-16 flex items-center text-white">
                  <BsPlusLg /> <p className="text-3xl">1</p>
                </span>
                <img className="w-full h-full" src={car} alt="" />
              </div>
            </div>
          </div>
          <div className="w-48 bg-base-100 shadow-2xl border rounded p-3 text-gray-500 absolute top-0 right-0">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold flex items-center gap-2">
                <MdBookmark className="text-lg" />
                <p>Save post</p>
              </span>
              <span className="text-sm font-semibold flex items-center gap-2">
                <MdFlag className="text-lg" />
                <p>Report Post</p>
              </span>
              <span className="text-sm font-semibold flex items-center gap-2">
                <MdModeEdit className="text-lg" />
                <p>Edit post</p>
              </span>
              <span className="text-sm font-semibold flex items-center gap-2">
                <MdDeleteForever className="text-lg" />
                <p>Delete post</p>
              </span>
              <div className="divider my-0"></div>
              <span className="text-sm font-semibold flex items-center gap-2">
                <MdOutlineLink className="text-lg" />
                <p>Open post in new tab</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <IoHeartCircleSharp className="text-2xl text-red-500" /> <p>You</p>
        </div>
        <LoveComment />
      </div>
    </div>
  );
};

export default GoodDay;
