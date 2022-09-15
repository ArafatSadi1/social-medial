import React from "react";
import Explore from "./Explore/Explore";
import MySection from "./MySection/MySection";
import GoodDay from "./NewsFeed/GoodDay/GoodDay";
import YourFriends from "./YourFriends/YourFriends";

const Home = () => {
  return (
    <div className="bg-gray-200 px-6 pt-2">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between">
          <Explore />
          <MySection />
          <YourFriends />
        </div>
      </div>
      <GoodDay />
    </div>
  );
};

export default Home;
