import React from "react";
import { FiSave } from "react-icons/fi";
import { RiGroupLine, RiPagesLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import googlePlay from "../../../utilities/googleplay.png";
import appStore from "../../../utilities/appstore.png";
import profile from "../../../utilities/profile.png";

const Explore = () => {
  return (
    <div>
      <div className="bg-base-100 p-5 rounded">
        <h5 className="text-primary text-xl font-semibold">Explore</h5>
        <ul className="flex flex-col gap-3 text-secondary mt-3">
          <li>
            <span className="flex items-center gap-2">
              <FiSave className="text-xl" />
              <span className="font-semibold">Saved Posts</span>
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2">
              <RiGroupLine className="text-xl" />
              <span className="font-semibold">People</span>
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2">
              <HiOutlineUserGroup className="text-xl" />
              <span className="font-semibold">Groups</span>
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2">
              <RiPagesLine className="text-xl" />
              <span className="font-semibold">Pages</span>
            </span>
          </li>
          <li>
            <span className="flex items-center gap-2">
              <BsCalendar4Event className="text-xl" />
              <span className="font-semibold">Events</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-base-100 p-3 my-3 rounded">
        <h3 className="text-primary font-semibold text-xl">Download App</h3>
        <div className="flex items-center">
          <img className="w-1/2" src={googlePlay} alt="" />
          <img className="w-1/2 h-10" src={appStore} alt="" />
        </div>
      </div>
      <div className="bg-base-100 p-5 rounded">
        <h5 className="text-primary font-semibold text-xl">Suggested People</h5>
        <div className="flex justify-between items-center mt-3">
          <div class="avatar flex items-center">
            <div class="w-8 rounded-full">
              <img src={profile} />
            </div>
            <p className="ml-2 font-semibold text-secondary">Sadek Hossain</p>
          </div>
          <button class="btn btn-outline btn-sm text-secondary hover:bg-secondary">
            Add <AiOutlinePlus className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
