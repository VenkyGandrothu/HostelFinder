import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigator2 = useNavigate();

  const navigateSignup = () => {
    navigator2("/SignupPage");
  };

  const navigateFirstPage = () => {
    navigator2("/FirstPage");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        </div>
        <form onSubmit={formsubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={changeEmail}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-900 outline-none transition-colors duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={changePassword}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
          </div>
          <div className="mb-6 text-center">
            <p
              onClick={navigateSignup}
              className="text-sm text-gray-600 cursor-pointer hover:underline"
            >
              Don't have an account? Sign up
            </p>
          </div>
          <div>
            <button
              type="submit"
              onClick={navigateFirstPage}
              className="w-full py-3 bg-[#25274D] text-white font-semibold rounded-lg hover:-[#25274D] transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
