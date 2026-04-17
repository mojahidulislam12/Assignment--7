import { useContext } from "react";
import TimelineCard from "../../components/TimelineCard/TimelineCard";
import { FriendContext } from "../../context/FriendProvider";

const Timeline = () => {
  const { call } = useContext(FriendContext);
  console.log(call);
  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-277.5 mx-auto pt-10 md:pt-20 ">
        <h1 className="font-bold text-[48px] ml-10 md:ml-0">Timeline</h1>
        <input
          type="text"
          className=" mt-6 bg-white w-87 h-13.5 border-1 rounded-md ml-10 md:ml-0"
          placeholder="Filter timeline"
        />
      </div>
      <div className="mt-6 pb-6 ">
        {call.length === 0 ? (
          <h1 className="w-277.5 mx-auto font-bold text-3xl">
            No Selected Friend{" "}
          </h1>
        ) : (
          call.map((info) => <TimelineCard info={info}></TimelineCard>)
        )}
      </div>
    </div>
  );
};

export default Timeline;
