import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'; // Importing Lock and Mail icons from React Icons
import { FaUserAlt, FaUserCog, FaBell } from 'react-icons/fa'; // Importing User, User Settings, and Bell icons from React Icons
import { RiSettings3Line } from 'react-icons/ri'; // Importing Settings icon from React Icons

export default function AdminSettings() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle form submission
        console.log('New password:', password);
        console.log('New email:', email);
        console.log('New username:', username);
        console.log('New bio:', bio);
        console.log('New notification settings:', notification);
        // You can use this data to update the admin settings
        // Redirect to another page after successful submission
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl font-bold mb-4">Admin Settings</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 flex items-center">
                            <AiOutlineLock className="mr-2" /> New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 flex items-center">
                            <AiOutlineMail className="mr-2" /> New Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter new email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 flex items-center">
                            <FaUserAlt className="mr-2" /> New Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter new username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bio" className="block text-gray-700 flex items-center">
                            <FaUserAlt className="mr-2" /> Bio
                        </label>
                        <textarea
                            id="bio"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter your bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="notification" className="block text-gray-700 flex items-center">
                            <FaBell className="mr-2" /> Notification Settings
                        </label>
                        <select
                            id="notification"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
                            value={notification}
                            onChange={(e) => setNotification(e.target.value)}
                            required
                        >
                            <option value="">Select notification preference</option>
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                            <option value="push">Push Notification</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Update Settings
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/admin" className="text-blue-500 inline-flex items-center">
                        <BsArrowLeft className="mr-1" />
                        Go back to Admin Panel
                    </Link>
                </div>
            </div>
        </div>
    );
}
