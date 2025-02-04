import React, { useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { useAuthContext } from "../../context/AuthContext";
import useCreatePost from "../../hooks/useCreatePost";
import toast from "react-hot-toast";

const CreatePost = ({ onClose }) => {
  const { loading, createPost } = useCreatePost();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const { authUser } = useAuthContext();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("Post caption cannot be empty");
      return;
    }

    await createPost(text, image);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg">
        {/* heading */}
        <div className="relative w-full flex items-center justify-center mb-5">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="absolute left-0 px-2 py-1 text-gray-900"
          >
            Cancel
          </button>
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-950">Create a Post</h2>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-row gap-8">
            {/* profile pic */}
            <div className="w-24 h-24 items-center justify-center rounded-full">
              <img
                src={authUser.profilePic || "profilepic1.jpg"}
                alt="Profile Picture"
                className="rounded-full border border-gray-300"
              />
            </div>

            {/* username, content, button */}
            <div className="w-full">
              <p className="mb-2 text-xl text-black font-extrabold tracking-wide drop-shadow-md">
                {authUser.username}
              </p>
              <textarea
                name="text"
                id="text"
                placeholder="What's new?"
                rows={4}
                maxLength={500}
                style={{ resize: "none" }}
                className="bg-transparent text-xl outline-none focusring-0 focus:border-transparent"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              {/* image upload */}
              <label className="flex items-center gap-2 text-gray-950 font-medium cursor-pointer">
                <FaFileImage className="w-5 h-5" />
                <span>Add Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-h-50 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Post button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-2 bg-gray-900 text-white rounded-none"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
