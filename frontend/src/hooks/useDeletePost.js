import { useState } from "react";
import toast from "react-hot-toast";

const useDeletePost = () => {
  const [loading, setLoading] = useState(false);

  const deletePost = async (postId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/${postId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete post");
      }
      toast.success("Post deleted successfully");
    } catch (error) {
      toast.error(error.message || "An error occurred while deleting post");
    } finally {
      setLoading(false);
    }
  };
  return { loading, deletePost };
};

export default useDeletePost;
