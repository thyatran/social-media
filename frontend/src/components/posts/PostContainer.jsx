import React from "react";
import Posts from "./Posts";

const PostContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-full">
      {/* <p className="text-lg font-semibold mb-4">Posts</p> */}
      <div className="flex flex-col border border-gray-900 bg-white w-[400px] h-[600px] shadow-lg ">
        <div className="flex-1 overflow-y-auto p-4">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
