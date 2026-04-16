import React, { createContext, useState } from "react";

export const FriendContext = createContext();
const FriendProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const handleCall = (currentFriend, icon) => {
    //store friend id
    //where to store
    //array or collection
    //if the friend alrady exit
    setCall([...call, currentFriend]);
    console.log(currentFriend);
    console.log(call);
  };
  const data = {
    call,
    setCall,
    handleCall,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
