import React from "react";
import Explore from "./Explore/Explore";
import YourFriends from "./YourFriends/YourFriends";


const Home = () => {
  return (
    <div className="bg-slate-200 pt-2">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between">
        <Explore/>
        <YourFriends/>
        </div>
      </div>
    </div>
  );
};

export default Home;
