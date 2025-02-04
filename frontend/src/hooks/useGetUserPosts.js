import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const useGetUserPosts = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = username
    ? `${import.meta.env.REACT_APP_API_URL}/api/posts/user/${username}`
    : `${import.meta.env.REACT_APP_API_URL}/api/posts/user`;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(endpoint, { credentials: "include" });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch posts");

        setPosts(data);
      } catch (error) {
        toast.error("Failed to get user posts: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [username]);
  return { posts, loading, error };
};

export default useGetUserPosts;
