import React from "react";

const ProfileContainer = () => {
  return (
    <div className="border-2 border-gray-900 rounded-none p-4 flex items-center justify-center h-full">
      <img
        src="/profilepic1.jpg"
        alt="Profile"
        className="h-20 w-20 rounded-full object-cover"
      />
    </div>
  );
};

export default ProfileContainer;
