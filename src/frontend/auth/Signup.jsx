import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Signing up with Name: ${name}, Email: ${email}, Password: ${password}, Age: ${age}, Place: ${place}`);
    setName('');
    setEmail('');
    setPassword('');
    setAge('');
    setPlace('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="border-2 rounded-xl border-blue-600 bg-white shadow-lg py-10 px-16">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <h1 className="text-black text-3xl font-extrabold mb-8">SIGN UP</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="password"
            placeholder="Enter your Password"
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="number"
            placeholder="Enter your Age"
          />
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
            className="outline-none bg-gray-50 border-2 border-blue-600 text-black font-medium text-lg py-2 px-10 rounded-full mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="text"
            placeholder="Enter your Location"
          />
          <button
            type="submit"
            className="text-white bg-blue-600 font-semibold text-lg py-2 px-8 w-full rounded-full mt-5 hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
          <div className="mt-6">
            <p className="text-black">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
