import React from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { extractTime } from "../../utils/extractTime";

const Post = ({ post }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-box">
      <div className="flex items-center gap-2 mb-2">
        <img
          src={post.postedBy.profilePic || "/profilepic1.jpg"}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm text-gray-800 font-semibold">
          {post.postedBy.username}
        </p>
        <p className="text-sm text-gray-400">{extractTime(post.createdAt)}</p>
      </div>
      <p className="text-sm mb-2">{post.text}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post Image"
          className="w-auto h-26 rounded-md object-cover"
        />
      )}

      <div className="flex gap-10 items-center mt-3 text-gray-400">
        <div className="flex items-center gap-1">
          <FaRegHeart />
          <p className="text-sm">{post.likes.length}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaRegComment />
          <p className="text-sm">{post.replies.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
