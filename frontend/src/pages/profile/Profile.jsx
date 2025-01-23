import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileContainer from "../../components/profile/ProfileContainer";
import PostContainer from "../../components/posts/PostContainer";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-10 gap-10">
      <div className="flex-grow mx-auto max-w-3xl">
        <ProfileContainer />
      </div>
      <div className="shrink-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
