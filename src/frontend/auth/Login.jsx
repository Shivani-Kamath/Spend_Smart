import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="border-2 rounded-xl border-blue-600 bg-white shadow-lg py-10 px-16">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <h1 className="text-black text-3xl font-extrabold mb-8">LOGIN</h1>

          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="email"
            placeholder="Enter your email"
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="password"
            placeholder="Enter your password"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="text-white bg-blue-600 font-semibold text-lg py-2 px-8 w-full rounded-full mt-5 hover:bg-blue-700 transition duration-300"
          >
            Log in
          </button>

          {/* Signup Link */}
          <div className="mt-6">
            <p className="text-black">
              Don’t have an account?{' '}
              <Link to="/signup" className="font-bold text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
