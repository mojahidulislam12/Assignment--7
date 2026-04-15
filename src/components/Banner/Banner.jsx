import React from "react";
import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#F8FAFC] pt-20 pb-10">
        <div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-10">
            <div className="card bg-white text-black w-64.8 h-34.25">
              <div className="card-body items-center text-center">
                <h2 className="card-title">10</h2>
                <p>Total Friends</p>
              </div>
            </div>
            <div className="card bg-white text-black w-64.8 h-34.25">
              <div className="card-body items-center text-center">
                <h2 className="card-title">3</h2>
                <p>On Track</p>
              </div>
            </div>
            <div className="card bg-white text-black w-64.8 h-34.25">
              <div className="card-body items-center text-center">
                <h2 className="card-title">6</h2>
                <p>Need Attention</p>
              </div>
            </div>
            <div className="card bg-white text-black w-64.8 h-34.25">
              <div className="card-body items-center text-center">
                <h2 className="card-title">12</h2>
                <p>Interactions This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
