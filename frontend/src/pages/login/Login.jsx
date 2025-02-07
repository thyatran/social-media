import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6">
        <h1 className="text-3xl text-gray-900 font-semibold text-center">
          Welcome to Aura!
        </h1>
        <h3 className="text-lg font-semibold text-center text-gray-500">
          Login
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              autoComplete="username"
              className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Already have an account? Login. */}
          <Link to="/signup" className="text-gray-500 hover:underline">
            Don't have an account? Sign Up.
          </Link>

          <button
            className="btn btn-block btn-md mt-2 rounded-none"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
