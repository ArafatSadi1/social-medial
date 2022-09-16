import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import profile from "../../../utilities/profile.png";

const YourFriends = () => {
  return (
    <div>
      <div className="bg-base-100 p-5 rounded">
        <h5 className="text-primary text-xl font-semibold">You Might Like</h5>
        <div class="divider"></div>
        <div class="avatar flex items-center mt-6">
          <div class="w-12 rounded-full">
            <img src={profile} />
          </div>
          <span>
            <p className="ml-4 font-semibold text-secondary">Sadfa</p>
            <p className="ml-4 text-sm font-semibold text-secondary">Hello</p>
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 mt-6">
          <button class="btn btn-outline text-secondary hover:bg-secondary w-1/2">
            Ignore
          </button>
          <button class="btn bg-[#DB2025] hover:bg-[#b7060c] w-1/2">
            Follow
          </button>
        </div>
      </div>
      <div className="bg-base-100 p-5 rounded mt-3">
        <h5 className="text-primary text-xl font-semibold">Your Friends</h5>
        <div className="relative">
          <AiOutlineSearch className="absolute text-xl mt-8 ml-3 text-gray-500 pointer-events-none" />
          <input
            type="text"
            className="w-full pl-8 py-2 px-3 my-5 rounded-full focus:outline-none focus:ring-1 bg-accent font-semibold text-primary"
          />
        </div>
        <div className="mt-2">
          <div class="avatar flex items-center">
            <div class="w-10 rounded-full">
              <img src={profile} />
            </div>
            <p className="ml-4 font-semibold text-secondary">Admin</p>
          </div>
          <div class="avatar flex items-center mt-3">
            <div class="w-10 rounded-full">
              <img src={profile} />
            </div>
            <p className="ml-4 font-semibold text-secondary">
              Kazi Musharrof Shishir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFriends;
