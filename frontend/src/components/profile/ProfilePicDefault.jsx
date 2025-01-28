import React from "react";

const ProfilePicDefault = ({ username }) => {
  const firstLetter = username?.charAt(0).toUpperCase() || "?";

  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-full text-white text-2xl font-bold"
      style={{ backgroundColor: "black" }}
    >
      {firstLetter}
    </div>
  );
};

export default ProfilePicDefault;
