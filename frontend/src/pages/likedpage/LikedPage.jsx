import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LikedContainer from "../../components/liked/LikedContainer";

const LikedPage = () => {
  return (
    <div className="flex flex-col items-center md:flex-row min-h-screen w-full">
      <div className="flex flex-grow justify-center items-center mx-auto w-full max-w-3xl p-4">
        <LikedContainer />
      </div>
      <div className="shrink-0 w-full md:w-64 md:h-full">
        <Navbar />
      </div>
    </div>
  );
};

export default LikedPage;
