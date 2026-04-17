import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();
const FriendProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);
  const handleCall = (currentFriend) => {
    setCall([...call, currentFriend]);
    toast.success("Add Now.....");
    console.log(currentFriend);
  };
  const handleText = (currentFriend) => {
    setText([...text, currentFriend]);
    toast.success("Add Now.....");
    console.log(currentFriend);
  };
  const handleVideo = (currentFriend) => {
    setVideo([...video, currentFriend]);
    toast.success("Add Now.....");
    console.log(currentFriend);
  };
  const data = {
    call,
    text,
    video,
    setCall,
    handleCall,
    handleText,
    handleVideo,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
