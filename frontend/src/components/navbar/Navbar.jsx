import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line, RiHome3Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const linkStyle = "flex iems-center w-12 h-12 text-black";
  const activeStyle = "text-blue-500";

  return (
    <div className="flex md:flex-col justify-around md:items-center gap-4">
      {/* Profile */}
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <img
          src="/profilepic1.jpg"
          alt="Profile"
          className="h-auto w-20 rounded-lg"
        />
      </NavLink>

      {/* Home */}
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        {({ isActive }) => (isActive ? <RiHome3Fill /> : <RiHome3Line />)}
      </NavLink>

      {/* Search */}
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <IoSearch />
      </NavLink>

      {/* Add Post */}
      <NavLink
        to="/add-post"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <FaPlus />
      </NavLink>

      {/* Liked Posts */}
      <NavLink
        to="/liked-posts"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        {({ isActive }) => (isActive ? <FaHeart /> : <FaRegHeart />)}
      </NavLink>
    </div>
    // <div className="flex flex-col items-center gap-4">
    //   {/* Profile Link */}
    //   <NavLink
    //     to="/profile"
    //     className={({ isActive }) =>
    //       `${linkStyle} ${isActive ? activeStyle : ""}`
    //     }
    //   >
    //     <img
    //       src="/profilepic1.jpg"
    //       alt="Profile"
    //       className="h-auto w-20 rounded-lg"
    //     />
    //   </NavLink>
    //   {/* Home Link */}
    //   <NavLink
    //     to="/home"
    //     className={({ isActive }) =>
    //       `${linkStyle}  ${isActive ? activeStyle : ""}`
    //     }
    //   >
    //     {({ isActive }) => (isActive ? <RiHome3Fill /> : <RiHome3Line />)}
    //   </NavLink>

    //   {/* Search Link */}
    //   <NavLink
    //     to="/search"
    //     className={({ isActive }) =>
    //       `${linkStyle} ${isACtive ? activeStyle : ""}`
    //     }
    //   >
    //     <IoSearch />
    //   </NavLink>

    //   {/* Add Post Link */}

    //   {/* Liked Posts Link */}

    //   {/* <button>
    //     <RiHome3Line className="w-12 h-12 text-black" />
    //   </button> */}

    //   {/* <RiHome3Fill className="w-12 h-12 text-black" />
    //   <IoSearch className="w-12 h-12 text-black" />
    //   <FaPlus className="w-12 h-12 text-black" />
    //   <FaRegHeart className="w-12 h-12 text-black" />
    //   <FaHeart className="w-12 h-12 text-black" /> */}
    // </div>
  );
};

export default Navbar;
