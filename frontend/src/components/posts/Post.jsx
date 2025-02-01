import React from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { extractTime } from "../../utils/extractTime";

const Post = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/profilepic1.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm text-gray-800 font-semibold">Onion_ni</p>
        <p className="text-sm text-gray-400">Yesterday 10:31</p>
      </div>
      <p className="text-sm mb-2">A cat watching the stars!</p>
      <img
        src="/cat-watching-stars.jpg"
        alt="Post Image"
        className="w-auto h-40 rounded-md object-cover"
      />
      <div className="flex gap-10 items-center mt-3 text-gray-400">
        <div className="flex items-center gap-1">
          <FaRegHeart />
          <p className="text-sm">2.4k</p>
        </div>
        <div className="flex items-center gap-1">
          <FaRegComment />
          <p className="text-sm">1.2k</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
