import React from "react";

const EditProfile = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
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
          <h2 className="text-lg font-bold text-gray-950">Edit Profile</h2>
        </div>

        <form>
          <textarea
            id="bio"
            name="bio"
            className="w-full p-2 border rounded-md mb-4 bg-transparent"
            placeholder="Update bio"
            rows={4}
            maxLength={150}
          ></textarea>
          <input
            id="profilePic"
            name="profilePic"
            type="file"
            accept="image/*"
            className="mb-4"
          />

          {/* Post button */}
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-10 py-2 bg-gray-900 text-white rounded-none"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
