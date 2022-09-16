import React from "react";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { BsFillEmojiAngryFill, BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { HiEmojiHappy } from "react-icons/hi";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdPlayCircle, MdThumbUpAlt } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { VscComment } from "react-icons/vsc";
import car from "../../../../utilities/car (1).jpg";
import AngryComment from "../../../Shared/AngryComment";
import LikeComment from "../../../Shared/LikeComment";
import LoveComment from "../../../Shared/LoveComment";

const FriendsPosts = () => {
  return (
    <div>
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <span className="flex items-center gap-4">
                <p className="ml-3 font-semibold text-gray-700">
                  alfred parchment
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-500">
                    updated her profile picture
                  </span>
                </p>
              </span>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>17 hour ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <img className="my-6" src={car} alt="" />
        <div className="flex items-center gap-2 mb-3">
          <MdThumbUpAlt className="text-2xl text-[#13A0F8]" /> <p>3</p>
        </div>
        <LikeComment />
      </div>
      {/* sakil post */}
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <span className="flex items-center gap-4">
                <p className="ml-3 font-semibold text-gray-700">Sakil Ahmed</p>
                <p className="flex items-center gap-2">
                  <MdPlayCircle />
                  <span className="font-semibold">Black Business Owner</span>
                </p>
              </span>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>17 hour ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <p className="mt-3 mb-7">Hello Everyone!!!</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="flex">
              <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
              <IoHeartCircleSharp className="text-2xl text-red-500 ml-[-7px]" />
            </span>{" "}
            <p>6</p>
          </div>
          <div className="flex gap-1 font-semibold">
            <p>1</p>
            <p className="text-gray-500">Comment</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded flex justify-evenly items-center py-3">
          <div className="flex items-center gap-2 text-red-500">
            <span>
              <IoHeartCircleSharp className="text-2xl" />
            </span>
            <p className="font-semibold">Like</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <VscComment className="text-xl" />
            </span>
            <p>Comment</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <RiShareForwardLine className="text-xl" />
            </span>
            <p>Share</p>
          </div>
        </div>
      </div>
      {/* flo pharoah */}
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <p className="ml-3 font-semibold text-gray-700">Sakil Ahmed</p>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>23 days ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="mb-14">
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            obcaecati magni quaerat accusamus provident rem aspernatur a ex eos
            dicta illum sit esse eius, error inventore ipsum eaque odio. Dolores
            nam rem ad aliquam accusantium eligendi, aperiam aspernatur numquam
            optio animi eaque deserunt inventore deleniti quod molestias libero
            expedita id reprehenderit qui necessitatibus corporis.
          </p>
          <img src={car} alt="" />
        </div>
        <div className="flex items-center gap-2 my-3">
          <span className="flex items-center">
            <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
            <IoHeartCircleSharp className="text-2xl text-red-500 mx-[-6px]" />
            <BsFillEmojiAngryFill className="text-xl text-[#de5e4b]" />
          </span>
          <p className="underline">You and 2 Others</p>
        </div>
        <AngryComment />
      </div>
      {/* habib hossain post */}
      <div className="w-[620px] mx-auto bg-base-100 py-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3 px-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <p className="ml-3 font-semibold text-gray-700">Habib Hossain</p>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>24 days ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="mb-14 mt-3">
          <img src={car} alt="" />
        </div>
        <div className="px-3">
          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center">
                <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
                <IoHeartCircleSharp className="text-2xl text-red-500 mx-[-6px]" />
              </span>
              <p className="underline">You and 1 Other</p>
            </div>
            <div className="flex gap-1 font-semibold">
              <p>1</p>
              <p className="text-gray-500">Comment</p>
            </div>
          </div>
          <LoveComment viewMore="viewMore" />
        </div>
      </div>
      {/* flo pharoah */}
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <p className="ml-3 font-semibold text-gray-700">Flo Phaloah</p>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>25 days ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="mb-14">
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            obcaecati magni quaerat accusamus provident rem aspernatur a ex eos
            dicta illum sit esse eius, error inventore ipsum eaque odio. Dolores
            nam rem ad aliquam accusantium eligendi, aperiam aspernatur numquam
            optio animi eaque deserunt inventore deleniti quod molestias libero
            expedita id reprehenderit qui necessitatibus corporis.
          </p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <span className="flex items-center">
            <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
            <HiEmojiHappy className="text-2xl text-[#eeb405] mx-[-6px]" />
            <IoHeartCircleSharp className="text-2xl text-red-500" />
          </span>
          <p>9</p>
        </div>
        <LikeComment />
      </div>
      {/* mac dusa */}
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <p className="ml-3 font-semibold text-gray-700">Mac Dusa</p>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>25 days ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="mb-14">
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 my-3">
            <span className="flex items-center">
              <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
            </span>
            <p>3</p>
          </div>
          <div className="flex gap-1 font-semibold">
            <p>1</p>
            <p className="text-gray-500">Comment</p>
          </div>
        </div>
        <LikeComment viewMore="viewMore" />
      </div>
      {/* flo pharoah */}
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <p className="ml-3 font-semibold text-gray-700">Flo Pharoah</p>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>26 days ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="mb-14">
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <span className="flex items-center">
            <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
          </span>
          <p>2</p>
        </div>
        <LikeComment />
      </div>
      {/* flo pharoah */}
      <div className="w-[620px] mx-auto bg-base-100 p-3 my-3 rounded text-gray-700">
        <div className="flex items-center justify-between mt-3">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={car} />
            </div>
            <span>
              <p className="ml-3 font-semibold text-gray-700">Flo Pharoah</p>
              <p className="ml-3 mt-1 text-xs text-[#7B7E86] flex items-center gap-1">
                <span>26 days ago</span> <AiOutlineGlobal />
              </p>
            </span>
          </div>
          <span>
            <GoChevronDown className="font-bold" />
          </span>
        </div>
        <div className="mb-14">
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <span className="flex items-center">
            <MdThumbUpAlt className="text-2xl text-[#13A0F8]" />
            <IoHeartCircleSharp className="text-2xl text-red-500 mx-[-6px]" />
          </span>
          <p>3</p>
        </div>
        <LikeComment />
      </div>
    </div>
  );
};

export default FriendsPosts;
