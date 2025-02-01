import React from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import { extractTime } from "../../utils/extractTime";

const ProfilePosts = () => {
  const { posts, loading, error } = useGetUserPosts();

  if (loading) {
    return <span className="loading loading-spinner"></span>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <div className="flex flex-col gap-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="border border-gray-300 p-4 rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={post.postedBy?.profilePic || "/profilepic1.jpg"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm text-gray-800 font-semibold">
                {post.postedBy.username || "Unknown"}
              </p>
              <p className="text-sm ">{extractTime(post.createdAt)}</p>
            </div>
            <p className="text-sm mb-2">{post.text}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post Image"
                className="w-auto h-26 rounded-md"
              />
            )}

            <div className="flex gap-10 items-center mt-3 text-gray-400">
              <div className="flex items-center gap-1">
                <button>
                  <FaRegHeart />
                </button>
                <p className="text-sm">{post.likes?.length || 0}</p>
              </div>
              <div className="flex items-center gap-1">
                <button>
                  <FaRegComment />
                </button>
                <p className="text-sm">{post.replies.length || 0}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default ProfilePosts;
