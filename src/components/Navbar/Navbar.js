import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../utilities/logo.png";
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import profile from "../../utilities/profile.png";
import "./Navbar.css";

const Navbar = () => {
  const items = (
    <>
      <span>
        <NavLink
          className={({ isActive }) => (isActive ? "text-base-100" : "")}
          to="/home"
        >
          <BiHome className="text-2xl" />
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) => (isActive ? "text-base-100" : "")}
          to="/friends"
        >
          <FaUserFriends className="text-2xl" />
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) => (isActive ? "text-base-100" : "")}
          to="/notifications"
        >
          <MdNotificationsNone className="text-2xl" />
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) => (isActive ? "text-base-100" : "")}
          to="/message"
        >
          <AiOutlineMessage className="text-2xl" />
        </NavLink>
      </span>
      <span>
        <div class="avatar flex justify-center items-center">
          <div class="w-6 rounded-full">
            <img src={profile} />
          </div>
          <p className="mx-1 text-white">Yasin Arafat</p>
          <span>
            <BsChevronDown />
          </span>
        </div>
      </span>
    </>
  );
  return (
    <div className="w-full bg-[#34465D]">
      <div className="max-w-[1300px] mx-auto navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <Link to="/home">
            <div className="w-10">
              <img src={logo} className="w-full" alt="" />
            </div>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <input
            type="text"
            placeholder="&#128269; Search"
            className="w-96 py-2 px-3 rounded-full focus:outline-none focus:border"
          />
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal p-0 flex gap-10 text-slate-400">
            {items}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
