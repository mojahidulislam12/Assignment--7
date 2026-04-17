import {
  Archive,
  Bell,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FriendContext } from "../../context/FriendProvider";

const FriendDetails = () => {
  const { friendId } = useParams();
  const friends = useLoaderData();

  const expectedFriend = friends.find((friend) => friend.id == friendId);

  const { handleCall } = useContext(FriendContext);

  // ✅ Safety check
  if (!expectedFriend) {
    return <p className="text-center mt-10">Friend not found</p>;
  }

  const { picture, name, tags, status, bio, email } = expectedFriend;

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-4">
      <div className="md:flex max-w-7xl mx-auto gap-6 pt-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/3">
          <div className="card h-71 bg-base-100 shadow-sm p-4">
            <div className="flex flex-col items-center">
              <img
                src={picture}
                alt={name}
                className="rounded-full w-20 h-20"
              />

              <h2 className="font-semibold text-[20px] mt-2">{name}</h2>

              <button className="btn bg-[#EF4444] text-white h-6 rounded-full text-[12px] mt-2">
                {status}
              </button>

              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn text-[12px] bg-[#CBFADB] rounded-full h-6"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <p className="line-clamp-1 italic text-[16px] text-[#64748B] mt-2">
                "{bio}"
              </p>

              <p className="text-[16px] text-[#64748B]">Email: {email}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="card bg-base-100 shadow-sm mt-4 h-13.25 flex -gap-2 items-center justify-center">
            <Bell /> Snooze 2 weeks
          </div>

          <div className="card bg-base-100 shadow-sm mt-4 h-13.25 flex -gap-2 items-center justify-center">
            <Archive /> Archive
          </div>

          <div className="card bg-base-100 shadow-sm mt-4 h-13.25 flex -gap-2 items-center justify-center text-red-500">
            <Trash2 /> Delete
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-2/3">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card bg-base-100 h-33.5 shadow-sm py-6 text-center">
              <h1 className="text-[30px] font-semibold text-[#244D3F]">62</h1>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>

            <div className="card bg-base-100  h-33.5shadow-sm py-6 text-center">
              <h1 className="text-[30px] font-semibold text-[#244D3F]">30</h1>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>

            <div className="card bg-base-100 h-33.5 shadow-sm py-6 text-center">
              <h1 className="text-[30px] font-semibold text-[#244D3F]">
                Feb 27, 2026
              </h1>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="card bg-base-100 h-30.5 shadow-sm mt-4 p-4">
            <div className="flex justify-between">
              <p className="font-medium text-[20px] text-[#244D3F]">
                Relationship Goal
              </p>
              <button className="btn h-8">Edit</button>
            </div>

            <p className="mt-2 text-[#64748B]">
              Connect every{" "}
              <span className="font-bold text-[#1F2937]">30 days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="card bg-base-100 shadow-sm mt-4 p-6">
            <h1 className="text-[20px] text-[#244D3F]">Quick Check-In</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <button
                onClick={() => {
                  handleCall(expectedFriend);
                }}
                className="bg-[#F8FAFC] p-6 rounded-md flex flex-col items-center"
              >
                <div className="w-8 h-8">
                  <PhoneCall></PhoneCall>
                </div>
                <p className="mt-2 text-[18px]">Call</p>
              </button>
              <button
                onClick={() => {
                  handleCall(expectedFriend);
                }}
                className="bg-[#F8FAFC] p-6 rounded-md flex flex-col items-center"
              >
                <div className="w-8 h-8">
                  <MessageSquareMore></MessageSquareMore>
                </div>
                <p className="mt-2 text-[18px]">Text</p>
              </button>
              <button
                onClick={() => {
                  handleCall(expectedFriend);
                }}
                className="bg-[#F8FAFC] p-6 rounded-md flex flex-col items-center"
              >
                <div className="w-8 h-8">
                  <Video></Video>
                </div>
                <p className="mt-2 text-[18px]">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
