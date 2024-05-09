import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

export default function AdminRegister() {
  const [adminInfo, setAdminInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setAdminInfo({ ...adminInfo, showPassword: !adminInfo.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Admin Registration:', adminInfo);
  };

  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="bg-white shadow-md rounded px-8 py-8 w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Admin Registration</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={adminInfo.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={adminInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={adminInfo.showPassword ? 'text' : 'password'}
                name="password"
                value={adminInfo.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button type="button" className="absolute top-0 right-0 mr-3 mt-2" onClick={togglePasswordVisibility}>
                {adminInfo.showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={adminInfo.showPassword ? 'text' : 'password'}
                name="password"
                value={adminInfo.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button type="button" className="absolute top-0 right-0 mr-3 mt-2" onClick={togglePasswordVisibility}>
                {adminInfo.showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </button>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none w-full">Register as Admin</button>
        </form>
        <p className="mt-4 text-center">Already have an Admin account? <Link to="/admin-login" className="text-blue-500">Login here</Link></p>
        <p className="mt-2 text-center">Want to register as an User ? <Link to="/user-register" className="text-blue-500">Register ahere</Link></p>
      </div>
    </div>
  );
}
