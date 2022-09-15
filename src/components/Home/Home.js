import React from "react";
import Explore from "./Explore/Explore";
import MySection from "./MySection/MySection";
import YourFriends from "./YourFriends/YourFriends";

const Home = () => {
  return (
    <div className="bg-slate-200 pt-2">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between">
          <Explore />
          <MySection/>
          <YourFriends />
        </div>
      </div>
    </div>
  );
};

export default Home;
