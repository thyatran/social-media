import React, { useState } from "react";
import EditProfile from "../profile/EditProfile";

import ProfilePosts from "./ProfilePosts";

const ProfileContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-full">
      {/* Floating Box */}
      <div className="border-4 border-gray-900 w-[400px] h-[600px] bg-white shadow-lg flex flex-col">
        {/* Profile Info */}
        <div className="p-4 border-b border-gray-300">
          <div className="flex items-center gap-10">
            <div className="avatar w-24 h-24">
              <img
                src="/profilepic1.jpg"
                alt="Profile"
                className="rounded-full border border-gray-300"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-black">User_name</p>
              <div className="flex gap-2 text-sm text-gray-700">
                <p>10 Followers</p>
                <p>10 Following</p>
              </div>
              <p className="text-sm font-extrabold text-gray-700">Name</p>
              <p className="text-sm text-gray-500 italic">
                Reach for the stars! ✨
              </p>
              <button
                onClick={openModal}
                className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-950 transition"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Posts Section (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-lg font-semibold mb-4">Posts</p>
          {/* Example Posts */}
          <ProfilePosts />
        </div>
      </div>
      {isModalOpen && <EditProfile onClose={closeModal} />}
    </div>
  );
};

export default ProfileContainer;
