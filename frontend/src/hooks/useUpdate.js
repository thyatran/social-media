import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const bioMaxLength = 150;
  const fullNameMaxLength = 50;

  const update = async (bio, fullname, profilePic) => {
    setLoading(true);
    try {
      if (bio && bio.length > bioMaxLength) {
        throw new Error(`Bio can't be longer than ${bioMaxLength} characters`);
      }
      if (fullname && fullname.length > fullNameMaxLength) {
        throw new Error(
          `Fullname can't be longer than ${fullNameMaxLength} characters`
        );
      }

      const formData = new FormData();
      if (bio) formData.append("bio", bio);
      if (fullname) formData.append("fullname", fullname);
      if (profilePic) formData.append("profilePic", profilePic);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/update/${authUser.username}`,
        {
          method: "PUT",
          body: formData,
          credentials: "include",
        }
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update profile");
      }

      localStorage.setItem(
        "logged-in-user",
        JSON.stringify({
          ...authUser,
          bio: data.bio,
          fullname: data.fullname,
          profilePic: data.profilePic,
        })
      );

      setAuthUser({
        ...authUser,
        bio: data.bio,
        fullname: data.fullname,
        profilePic: data.profilePic,
      });

      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error(error.message || "An error occurred while updating");
    } finally {
      setLoading(false);
    }
  };

  return { loading, update };
};

export default useUpdate;
