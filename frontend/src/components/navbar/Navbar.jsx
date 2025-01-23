import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line, RiHome3Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const linkStyle =
    "flex items-center justify-center w-12 h-auto text-gray-900 text-2xl";

  return (
    <div className="flex md:flex-col justify-around md:items-center gap-6">
      {/* Profile */}
      <NavLink to="/profile" className={`${linkStyle} w-20 h-auto`}>
        <img
          src="/profilepic1.jpg"
          alt="Profile"
          className="h-full w-full rounded-full object-cover"
        />
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

      <div className={`${linkStyle}`}>
        <FiLogOut />
      </div>

      {/* Modal for Adding a Post */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Create a Post</h2>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              placeholder="What's on your mind?"
              rows={4}
            ></textarea>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
