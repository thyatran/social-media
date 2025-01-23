import React from "react";
import Navbar from "../../components/navbar/Navbar";

const LikedPage = () => {
  return (
    <div className="flex flex-row justify-between w-full px-10 gap-10">
      <div className="flex-grow mx-auto max-w-3xl">LikedPosts</div>
      <div className="shrink-0">
        <Navbar />
      </div>
    </div>
  );
};

export default LikedPage;
