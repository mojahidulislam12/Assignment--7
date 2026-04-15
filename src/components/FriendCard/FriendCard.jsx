import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { id, picture, name, status, tags } = friend;
  return (
    <div>
      <Link
        to={`/friendDetails/${id}`}
        className="card bg-base-100 w-64.8 h-63.5 shadow-sm"
      >
        <figure className="px-10 pt-6">
          <img
            src={picture}
            alt="Shoes"
            className="rounded-[1000px] w-20 h-20 "
          />
        </figure>
        <div className="card-body items-center text-center -mt-5">
          <h2 className="card-title">{name}</h2>
          <p>62d ago</p>
          <div>
            {tags.map((tag) => (
              <button className="btn text-[#244D3F] bg-[#CBFADB] rounded-[100px] h-6">
                {tag}
              </button>
            ))}
          </div>
          <div className="card-actions">
            <button className="btn bg-[#EF4444] text-white h-6 rounded-[100px]">
              {status}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
