import {
  Archive,
  Bell,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendProvider";
const FriendDetails = () => {
  const { friendId } = useParams();
  const friends = useLoaderData();
  const expectedFriend = friends.find((friend) => friend.id == friendId);
  const { picture, name, tags, status, bio, email } = expectedFriend;
  console.log(expectedFriend);

  const { handleCall } = useContext(FriendContext);
  //console.log(call);

  return (
    <div className="bg-[#F8FAFC]">
      <div className=" md:flex max-w-277.5  mx-auto gap-6 pt-20">
        <div className="w-87.5 h-122 ">
          <div>
            <div className="card bg-base-100 w-64.8 h-66.5 shadow-sm ">
              <figure className="px-10 pt-3">
                <img
                  src={picture}
                  alt="Shoes"
                  className="rounded-[1000px] w-20 h-20 "
                />
              </figure>
              <div className="card-body items-center text-center -mt-5">
                <h2 className="card-title font-semibold text-[20px]">{name}</h2>

                <div className="card-actions">
                  <button className="btn bg-[#EF4444] text-white h-6 rounded-[100px] font-medium text-[12px]">
                    {status}
                  </button>
                </div>
                <div>
                  {tags.map((tag) => (
                    <button className="btn font-medium text-[12px] text-[#244D3F] bg-[#CBFADB] rounded-[100px] h-6">
                      {tag}
                    </button>
                  ))}
                </div>
                <p className="line-clamp-1 font-medium italic text-[16px] text-[#64748B]">
                  "{bio}"
                </p>
                <p className="font-normal text-[16px] text-[#64748B]">
                  {" "}
                  Email: {email}
                </p>
              </div>
            </div>
          </div>
          <div className="card h-13.25 bg-base-100 shadow-sm mt-4">
            <p className="flex mt-4 ml-24.5 gap-2 font-medium text-[16px]">
              <Bell />
              Snooze 2 weeks
            </p>
          </div>
          <div className="card h-13.25 bg-base-100 shadow-sm mt-4">
            <p className="flex mt-4 ml-34 gap-2 font-medium text-[16px]">
              <Archive />
              Archive
            </p>
          </div>
          <div className="card h-13.25 bg-base-100 shadow-sm mt-4 ">
            <p className="flex mt-4 ml-34 gap-2 font-medium text-[16px] text-red-500 ">
              <Trash2 />
              Delete
            </p>
          </div>
        </div>
        <div className=" w-184 h-12">
          <div className="grid grid-cols-3 -mt-4 w-190">
            <div className="card w-57.5 h-33.5 bg-base-100 shadow-sm mt-4 py-8">
              <h1 className="text-center font-semibold text-[30px] text-[#244D3F]">
                62
              </h1>
              <p className="text-center font-normal text-[18px] text-[#64748B]">
                Days Since Contact
              </p>
            </div>
            <div className="card w-57.5 h-33.5 bg-base-100 shadow-sm mt-4 py-8">
              <h1 className="text-center font-semibold text-[30px] text-[#244D3F]">
                30
              </h1>
              <p className="text-center font-normal text-[18px] text-[#64748B]">
                Goal (Days)
              </p>
            </div>
            <div className="card w-57.5 h-33.5 bg-base-100 shadow-sm mt-4 py-8">
              <h1 className="text-center font-semibold text-[30px] text-[#244D3F]">
                Feb 27, 2026
              </h1>
              <p className="text-center font-normal text-[18px] text-[#64748B]">
                Next Due
              </p>
            </div>
          </div>
          <div className="card h-30.25 bg-base-100 shadow-sm mt-4 ">
            <div className="flex justify-between mt-6">
              <p className="ml-6 font-medium text-[20px] text-[#244D3F]">
                Relationship Goal
              </p>
              <button className="btn w-15 h-8.5 mr-6">Edit</button>
            </div>
            <div className="font-normal text-[18px] text-[#64748B] mt-4 ml-6">
              Connect every
              <span className="font-bold text-[18px]  text-[#1F2937]">
                30 days
              </span>
            </div>
          </div>
          <div className="card h-46.25 bg-base-100 shadow-sm mt-4 p-6">
            <h1 className="font-medium text-[20px] text-[#244D3F]">
              Quick Check-In
            </h1>
            <div className="grid grid-cols-3 pb-6">
              <button
                onClick={() => handleCall(expectedFriend)}
                className="w-54 h-23.75 bg-[#F8FAFC] mt-4 rounded-md"
              >
                <PhoneCall className="mx-auto mt-4 w-8 h-8" />
                <p className="mt-2 text-center font-normal text[18px]">Call</p>
              </button>
              <button
                onClick={() => handleCall(expectedFriend)}
                className="w-54 h-23.75 bg-[#F8FAFC] mt-4 rounded-md"
              >
                <MessageSquareMore className="mx-auto mt-4 w-8 h-8" />
                <p className="mt-2 text-center font-normal text[18px]">Text</p>
              </button>
              <button
                onClick={() => handleCall(expectedFriend)}
                className="w-54 h-23.75 bg-[#F8FAFC] mt-4 rounded-md"
              >
                <Video className="mx-auto mt-4 w-8 h-8" />
                <p className="mt-2 text-center font-normal text[18px]">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
