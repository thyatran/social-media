import React from "react";
import Navbar from "../../components/navbar/Navbar";
import PostContainer from "../../components/posts/PostContainer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-10 gap-10">
      <div className="flex-grow mx-auto max-w-3xl">
        <PostContainer />
      </div>
      <div className="shrink-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
