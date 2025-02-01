import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useGetUserPosts = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = username ? `/api/posts/user/${username}` : `/api/posts/user`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(endpoint, { credentials: "include" });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch posts");

        setPosts(data);
      } catch (error) {
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
