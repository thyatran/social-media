import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6">
        <h1 className="text-3xl font-semibold text-center">Welcome to Aura!</h1>

        <div className="">
          <label htmlFor="">
            <span>Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
          />
        </div>

        <div>
          <label htmlFor="">
            <span>Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
          />
        </div>

        <div>
          <label htmlFor="">
            <span>Password</span>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
          />
        </div>

        <div>
          <label htmlFor="">
            <span>Confirm Password</span>
          </label>
          <input
            type="text"
            placeholder="Enter Confirm Password"
            className="w-full h-10 border-4 border-black bg-transparent rounded-none pl-3"
          />
        </div>

        {/* Already have an account? Login. */}
        <Link to="/login" className="text-gray-500 hover:underline">
          Already have an account? Login.
        </Link>

        <div>
          <button className="btn btn-block btn-md mt-2 rounded-none">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
