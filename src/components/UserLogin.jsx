import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserLogin() {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const handleUserLogin = () => {
    // Handle user login logic (e.g., authentication)
    console.log('User Login:', userCredentials);
    // Reset user credentials after login (optional)
    setUserCredentials({ username: '', password: '' });
  };

  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="bg-white shadow-md rounded px-8 py-8">
        <h2 className="text-2xl mb-6 text-center">User Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={userCredentials.username}
          onChange={(e) => setUserCredentials({ ...userCredentials, username: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={userCredentials.password}
          onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <div className='flex flex-row justify-between gap-4 mt-5'>
          <button onClick={handleUserLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login as User</button>
          <Link to="/admin-login" className="text-blue-500">
            <button onClick={handleUserLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login as Admin</button>
          </Link>
        </div>

        <p className="mt-4 text-center">Don't have an account? <Link to="/user-register" className="text-blue-500">Register here</Link></p>

      </div>
    </div>
  );
}
