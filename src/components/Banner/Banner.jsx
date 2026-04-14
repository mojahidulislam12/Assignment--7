import React from "react";
import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#F8FAFC] min-h-49  mx-auto pt-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-[48px] font-bold">
              Friends to keep close in your life
            </h1>
            <p className="font-normal text-[16px] text-[#64748B] mt-4">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture <br /> the relationships that matter most.
            </p>
            <button className="btn mt-8 bg-[#244D3F] text-[#FFFFFF] font-semibold text-[16px]">
              <FiPlus />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
