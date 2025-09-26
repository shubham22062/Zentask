import { Link } from "react-router-dom";
import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">TodoMaster</h1>
        <p className="text-gray-500">Your personal task management solution</p>
      </div>

      <div className="w-full max-w-md  bg-white shadow-lg rounded-2xl p-8">
        {/*Brand*/}

        <div className="mb-6 text-center">
          <h2 className="text-2xl font- smobold text-gray-700">
            Welcome Back{" "}
          </h2>
          <p className="text-gray-500">Sign in to your account to continue</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className=" w-full border-gray-300 bg-gray-50 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="password"
              className=" w-full border-gray-300 bg-gray-50 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="w-full bg-black text-white py-3 rounded-lg fount-medium hover:bg-gray-800 transition">
              Login
            </button>
          </form>
          <p>Don't have an account?{"Signup"}</p>
          <link
            to="/Login"
            className="text-black font-medium hover:underline"
          ></link>
        </div>
      </div>
    </div>
  );
}
