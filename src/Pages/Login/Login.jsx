import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <div className="flex items-center justify-center mb-6">
          <FaShoppingCart className="text-4xl text-orange-500" />
          <h2 className="text-3xl font-semibold ml-2 text-gray-700">Bistro Boss</h2>
        </div>
        <h3 className="text-xl text-gray-800 text-center mb-4">Login to Your Account</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login; 