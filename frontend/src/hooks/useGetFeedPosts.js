import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetFeedPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/posts`, { credentials: "include" });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch posts");

        setPosts(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return { loading, posts };
};

export default useGetFeedPosts;
