import React from "react";
import Explore from "./Explore/Explore";
import MySection from "./MySection/MySection";
import FriendsPosts from "./NewsFeed/FriendsPosts/FriendsPosts";
import GoodDay from "./NewsFeed/GoodDay/GoodDay";
import YourFriends from "./YourFriends/YourFriends";

const Home = () => {
  return (
    <div className="bg-accent px-6 pt-2">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-5 gap-3">
          <Explore />
          <MySection />
          <YourFriends />
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div></div>
          <GoodDay />
          <div></div>
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div></div>
          <FriendsPosts />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
