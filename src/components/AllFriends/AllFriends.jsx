import React, { use } from "react";
import FriendCard from "../FriendCard/FriendCard";

const fiendsPromise = fetch("/Friends.json").then((res) => res.json());
const AllFriends = () => {
  const friends = use(fiendsPromise);
  console.log(friends);
  return (
    <div className="max-w-277.5 mx-auto mt-10">
      <h1 className="font-semibold text-[24px]">Your Friends</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 pb-20">
        {friends.map((friend, index) => (
          <FriendCard friend={friend} key={index}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
