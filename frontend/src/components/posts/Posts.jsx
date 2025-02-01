import React from "react";
import Post from "./Post";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const Posts = () => {
  const { loading, posts } = useGetFeedPosts();

  if (loading) {
    return <span className="loading loading-spinner"></span>;
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p className="text-gray-500 text-center">No posts yet.</p>
      )}
    </div>
  );
};

export default Posts;
