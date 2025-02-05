import React, { useState } from "react";
import useUpdate from "../../hooks/useUpdate";

const EditProfile = ({ onClose }) => {
  const { loading, update } = useUpdate();
  const [bio, setBio] = useState("");
  const [fullname, setFullname] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    update(bio, fullname, profilePic);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 w-11/12 max-w-md">
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label
            htmlFor="bio"
            className="text-base font-extrabold text-gray-950"
          >
            Update bio:
          </label>
          <textarea
            id="bio"
            name="bio"
            className="textarea text-base w-full p-2 border border-gray-300 rounded-md mb-4 bg-transparent"
            placeholder="Bio"
            rows={4}
            maxLength={150}
            style={{ resize: "none" }}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <label
            htmlFor="fullname"
            className="text-base font-extrabold text-gray-950"
          >
            Update Full Name:
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input bg-transparent border border-gray-300 mb-4"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <label
            htmlFor="profilePic"
            className="text-base font-extrabold text-gray-950"
          >
            Update Profile Picture:
          </label>

          <input
            id="profilePic"
            name="profilePic"
            type="file"
            accept="image/*"
            className="file-input hidden"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
          <label
            htmlFor="profilePic"
            className="cursor-pointer px-4 py-2 bg-gray-900 text-white text-sm rounded-md transition"
          >
            Choose File
          </label>
          <span className="text-base text-gray-500">
            {profilePic ? profilePic.name : "No file chosen"}
          </span>

          {/* Post button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-2 bg-gray-900 text-white rounded-none"
            >
              {loading ? (
                <span className="loading loading-span"></span>
              ) : (
                "Update Profile"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
