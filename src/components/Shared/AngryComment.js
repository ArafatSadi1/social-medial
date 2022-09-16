import React from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BsFillEmojiAngryFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { HiGif } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import { VscComment } from "react-icons/vsc";
import { IoIosPaperPlane } from "react-icons/io";
import { IoHeartCircleSharp } from "react-icons/io5";
import profile from "../../utilities/profile.png";

const AngryComment = () => {
  return (
    <div>
      <div>
        <div className="bg-accent rounded flex justify-evenly items-center py-3">
          <div className="flex items-center gap-2 text-[#de5e4b]">
            <span>
              <BsFillEmojiAngryFill className="text-xl" />
            </span>
            <p className="font-semibold">Angry</p>
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
        <div className="my-4">
          <div className="w-full flex justify-between gap-7">
            <img className="w-10 h-10 rounded-full" src={profile} alt="" />
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
                  className="w-full py-2 px-3 pr-10 rounded-full bg-accent focus:outline-none focus:ring-1 font-semibold text-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngryComment;
