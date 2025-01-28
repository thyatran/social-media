import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const update = async (bio, profilePic) => {
    setLoading(true);
    try {
    } catch (error) {
        
    } finally {
      setLoading(false);
    }
  };

  return { loading, update };
};

export default useUpdate;
