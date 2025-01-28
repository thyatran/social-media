import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line, RiHome3Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import CreatePost from "../posts/CreatePost";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../../context/AuthContext";
import ProfilePicDefault from "../profile/ProfilePicDefault";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { authUser } = useAuthContext();
  const profilePic = authUser?.profilePic;

  const linkStyle =
    "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-gray-900 text-2xl hover:bg-gray-200 rounded-full transition";

  return (
    <div className="flex md:flex-col justify-between md:justify-start items-center bg-transparent p-4 gap-4 w-full md:h-full mx-auto">
      {/* Profile */}
      <NavLink to="/profile" className={`${linkStyle} w-20 h-auto`}>
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile Picture"
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <ProfilePicDefault username={authUser?.username || "User"} />
        )}
      </NavLink>

      {/* Home */}
      <NavLink to="/home" className={`${linkStyle}`}>
        {({ isActive }) => (isActive ? <RiHome3Fill /> : <RiHome3Line />)}
      </NavLink>

      {/* Search */}
      <NavLink to="/search" className={`${linkStyle}`}>
        <IoSearch />
      </NavLink>

      {/* Add Post */}
      <NavLink onClick={openModal} className={`${linkStyle} `}>
        <FiPlus />
      </NavLink>

      {/* Liked Posts */}
      <NavLink to="/liked-posts" className={`${linkStyle}`}>
        {({ isActive }) => (isActive ? <FaHeart /> : <FaRegHeart />)}
      </NavLink>

      <LogoutButton />

      {/* Modal for Adding a Post */}
      {isModalOpen && <CreatePost onClose={closeModal} />}
    </div>
  );
};

export default Navbar;
