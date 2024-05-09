import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

export default function UserRegister() {
    const [userCredentials, setUserCredentials] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleUserRegister = () => {
        // Handle user registration logic
        console.log('User Register:', userCredentials);
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
                <h2 className="text-2xl mb-6 text-center">User Register</h2>
                {/* User Register Form */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={userCredentials.name}
                        onChange={(e) => setUserCredentials({ ...userCredentials, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={userCredentials.email}
                        onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={userCredentials.password}
                            onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                        <button type="button" className="absolute top-0 right-0 mr-3 mt-2" onClick={togglePasswordVisibility}>
                            {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={userCredentials.confirmPassword}
                            onChange={(e) => setUserCredentials({ ...userCredentials, confirmPassword: e.target.value })}
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                        <button type="button" className="absolute top-0 right-0 mr-3 mt-2" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                        </button>
                    </div>
                    <button onClick={handleUserRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline w-full">Register as User</button>
                    <p className="mt-4 text-center">Already have an account? <Link to="/user-login" className="text-blue-500">Login here</Link></p>
                    <p className="mt-2 text-center">Want to register as an admin? <Link to="/admin-register" className="text-blue-500">Register here</Link></p>
                </div>
            </div>
        </div>
    );
}
