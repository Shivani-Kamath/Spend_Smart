import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // Simulate login validation
    if (email === 'user@example.com' && password === 'password') {
      handleLogin(email, password);
      navigate('/dashboard'); // Navigate to Dashboard on successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-blue-600 py-24 px-14">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <h1 className="text-black flex p-1 text-2xl font-bold mb-6 my-8">LOGIN</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 text-black border-blue-600 font-medium text-lg py-2 px-10 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="mt-7 text-white border-none outline-none hover:bg-blue-700 font-semibold bg-blue-600 text-lg py-2 px-8 w-full rounded-full"
          >
            Log in
          </button>
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
