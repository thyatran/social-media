import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const createPost = async (text, image) => {
    if (!authUser) {
      toast.error("You must be logged in to post");
      return;
    }

    const textToSend = typeof text === "object" ? JSON.stringify(text) : text;

    const formData = new FormData();
    formData.append("text", textToSend);
    if (image) {
      formData.append("image", image);
    }

    setLoading(true);
    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Post created successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, createPost };
};

export default useCreatePost;
