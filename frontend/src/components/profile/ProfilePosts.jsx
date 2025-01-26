import React from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";

const ProfilePosts = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded-md">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/profilepic1.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm text-gray-800 font-semibold">Onion_ni</p>
            <p className="text-sm ">Yesterday 10:31</p>
          </div>
          <p className="text-sm mb-2">A cat watching the stars!</p>
          <img
            src="/cat-watching-stars.jpg"
            alt="Post Image"
            className="w-auto h-20 rounded-md"
          />
          <div className="flex gap-10 items-center mt-3 text-gray-400">
            <div className="flex items-center gap-1">
              <button>
                <FaRegHeart />
              </button>
              <p className="text-sm">2.4k</p>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <FaRegComment />
              </button>
              <p className="text-sm">2.4k</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
