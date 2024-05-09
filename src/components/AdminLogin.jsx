import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

export default function AdminLogin() {
    const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleAdminLogin = () => {
        // Handle admin login logic (e.g., authentication)
        console.log('AdminLogin:', adminCredentials);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="container mx-auto mt-8 flex justify-center">
            <div className="bg-white shadow-md rounded px-8 py-8 w-full max-w-md">
                <h2 className="text-2xl mb-6 text-center">Admin Login</h2>
                {/* Admin Login Form */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={adminCredentials.username}
                        onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={adminCredentials.password}
                            onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                        <button type="button" className="absolute top-0 right-0 mr-3 mt-2" onClick={togglePasswordVisibility}>
                            {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                        </button>
                    </div>
                  
                    <div className="flex justify-between mt-4">
                        <button onClick={handleAdminLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login as Admin</button>
                        <Link to="/user-login" className="text-blue-500">
                            <button onClick={handleAdminLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login as User</button>
                        </Link>
                    </div>
                    <p className="mt-4 text-center">Don't have an account? <Link to="/admin-register" className="text-blue-500">Register here</Link></p>
                </div>
            </div>
        </div>
    );
}
