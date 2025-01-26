import React from "react";
import Navbar from "../../components/navbar/Navbar";
import PostContainer from "../../components/posts/PostContainer";

const Home = () => {
  return (
    <div className="flex flex-col items-center md:flex-row min-h-screen w-full">
      <div className="flex flex-grow justify-center items-center mx-auto w-full max-w-3xl p-4">
        <PostContainer />
      </div>
      <div className="shrink-0 w-full md:w-64 md:h-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
