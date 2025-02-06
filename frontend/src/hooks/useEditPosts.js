import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

import toast from "react-hot-toast";

const useEditPost = () => {
  const [loading, setLoading] = useState(false);

  const { authUser } = useAuthContext();

  const textMaxLength = 500;

  const edit = async (text, postId) => {
    if (!authUser) {
      toast.error("Unauthorized to edit post");
      return;
    }

    if (!postId) {
      toast.error("Post ID is required");
      return;
    }

    if (!text || text.length === 0) {
      toast.error("Post content cannot be empty.");
      return;
    }

    if (text.length > textMaxLength) {
      toast.error(`Post can't be longer than ${textMaxLength} characters.`);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/edit/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ text }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update post");
      }

      toast.success("Post updated successfully!");
    } catch (error) {
      toast.error(error.message || "An error occurred while edit post");
    } finally {
      setLoading(false);
    }
  };

  return { edit, loading };
};

export default useEditPost;
