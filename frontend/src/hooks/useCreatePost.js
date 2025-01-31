import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();
  const textMaxLength = 500;

  const createPost = async (text, image) => {
    if (!authUser) {
      toast.error("You must be logged in to post");
      return;
    }

    if (!text || text.trim() === "") {
      toast.error("Post caption cannot be empty");
      return;
    }

    if (text.length > textMaxLength) {
      toast.error(`Caption can't be longer than ${textMaxLength} characters`);
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text.trim());

      if (image) {
        formData.append("image", image);
      }

      const res = await fetch("/api/posts/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create new post");
      }

      toast.success("Post created successfully!");
    } catch (error) {
      console.error("Create post error:", error);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, createPost };
};

export default useCreatePost;
