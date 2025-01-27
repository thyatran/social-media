import React from "react";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-gray-900 text-2xl hover:bg-gray-200 rounded-full transition">
      {!loading ? (
        <FiLogOut className="cursor-pointer" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
