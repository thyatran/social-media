import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(10)].map((_, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default Posts;
