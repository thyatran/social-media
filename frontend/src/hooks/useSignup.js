import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ username, fullname, password, confirmPassword }) => {
    const success = handleInputsErrors({
      username,
      fullname,
      password,
      confirmPassword,
    });

    if (!success) return;

    try {
      const res = await fetch(
        `https://social-media-backend-jyq3.onrender.com/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            fullname,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("logged-in-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputsErrors({ username, fullname, password, confirmPassword }) {
  if (!username || !fullname || !password || !confirmPassword) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password != confirmPassword) {
    toast.error("Password does not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
