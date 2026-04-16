import { ImStatsDots } from "react-icons/im";

import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold text-[16px] ${isActive ? "text-white bg-[#244D3F]" : ""}`
          }
        >
          <RiHome2Line />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `font-semibold text-[16px] ${isActive ? "text-white bg-[#244D3F]" : ""}`
          }
        >
          <IoTimeOutline />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `font-semibold text-[16px] ${isActive ? "text-white bg-[#244D3F]" : ""}`
          }
        >
          <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <h1 className="font-bold text-xl md:ml-20">KeenKeeper</h1>
        </div>
        <div className="navbar-end  md:mr-20">
          <div className="hidden lg:flex -mr-1 md:mr-0">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3
              -ml-25 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
