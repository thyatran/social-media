import React from "react";

const DeletePost = ({ deletePost, postId, onClose }) => {
  const handleDelete = async () => {
    await deletePost(postId);
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 w-11/12 max-w-md">
        <div className="relative w-full flex items-center justify-center mb-5">
          <button
            onClick={onClose}
            className="absolute left-0 px-2 py-1 text-gray-900"
          >
            Cancel
          </button>
          <h2 className="text-lg font-bold text-gray-950">Delete Post</h2>
        </div>
        <form className="flex flex-col gap-4">
          <p align="center">Are you sure you want to delete this post?</p>
          <div className="flex justify-center">
            <button
              onClick={handleDelete}
              className="px-10 py-2 bg-red-400 text-white rounded-none"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletePost;
