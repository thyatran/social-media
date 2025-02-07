import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault(); // avoid refresh when submitting page
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Welcome to Aura!
        </h1>
        <h3 className="text-lg font-semibold text-center text-gray-500">
          Sign Up
        </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              autoComplete="username"
              className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter Full Name"
              autoComplete="name"
              className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="new-password"
              className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              autoComplete="new-password"
              className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Already have an account? Login. */}
          <Link to="/login" className="text-gray-500 hover:underline">
            Already have an account? Login.
          </Link>

          {/* sign up button */}
          <div>
            <button
              className="btn btn-block btn-md mt-2 rounded-none"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
