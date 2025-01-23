import React from "react";

const ProfileContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-900 rounded-none p-6 h-full gap-12">
      <div className="flex flex-row items-center gap-20 w-full max-w-lg">
        <div className="avatar w-32 h-32">
          <img
            src="/profilepic1.jpg"
            alt="Profile"
            className="rounded-full border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold text-black">Username</p>
          <div className="flex flex-row gap-6 text-black text-sm">
            <p>10 Followers</p>
            <p>10 Following</p>
          </div>
          <p className="text-black text-sm font-medium">Name</p>
          <p className="text-black text-sm italic">Reach for the stars!</p>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-950 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="w-full max-w-lg border-t border-gray-300 pt-6">
        <p className="flex text-black text-lg font-semibold items-center justify-center">
          Posts
        </p>
        <div className="flex items-center justify-center h-40 border border-gray-300 rounded-md mt-4">
          <p className="text-gray-500">No posts yet!</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
