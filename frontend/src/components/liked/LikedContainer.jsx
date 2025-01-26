import React from "react";

const LikedContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-full">
      <div className="flex flex-col border border-gray-900 bg-white w-[400px] h-[600px] rounded-lg shadow-lg">
        <div className="flex-1 overflow-y-auto p-4">Liked</div>
      </div>
    </div>
  );
};

export default LikedContainer;
