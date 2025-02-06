import { useState } from "react";
import useEditPosts from "../../hooks/useEditPosts";

const EditPost = ({ postId, currentText, onClose }) => {
  const { edit, loading } = useEditPosts();
  const [text, setText] = useState(currentText || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await edit(text, postId);
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
          <h2 className="text-lg font-bold text-gray-950">Edit Post</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="text">Update caption:</label>
          <textarea
            name="text"
            id="text"
            className="textarea text-base w-full p-2 border border-gray-300 rounded-md mb-4 bg-transparent"
            rows={4}
            maxLength={500}
            style={{ resize: "none" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          {/* Update Post Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-2 bg-gray-900 text-white rounded-none"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Update Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
