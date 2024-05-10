import React from "react";
import { Link } from "react-router-dom";
import { BsFillChatFill, BsStarFill, BsBarChartFill, BsPeopleFill } from "react-icons/bs";
import { AiOutlineUserAdd, AiOutlineDelete, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

export default function AdminDashboard() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="bg-gray-900 text-white w-64 py-4 flex flex-col justify-between h-screen">
                <nav>
                    <ul>
                        <h1 className="text-xl font-bold pl-4">Admin Dashboard</h1>
                    </ul>
                    <ul className="mt-4">
                        <li className="">
                            <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <BsFillChatFill />
                                <span className="ml-2">Dashboard</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link to="/adminfeedback" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <BsStarFill />
                                <span className="ml-2">Feedback</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link to="/add-college" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <BsBarChartFill />
                                <span className="ml-2">Add College</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link to="/add-department" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <AiOutlineUserAdd />
                                <span className="ml-2">Add Department</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link to="/adminanalysis" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <BsPeopleFill />
                                <span className="ml-2">Check Feedback</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link to="/average-feedback" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <BsPeopleFill />
                                <span className="ml-2">Average Feedback</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
                <nav className="mt-8">
                    <ul>
                        <li className="mt-60">
                            <Link to="/admin-logout" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <AiOutlineLogout />
                                <span className="ml-2">Logout</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link to="/admin-setting" className="flex items-center px-4 py-2 hover:bg-gray-800">
                                <AiOutlineSetting />
                                <span className="ml-2">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Container */}
            <div className="flex-1">
                {/* Header */}
                <header className="bg-gray-900 text-white py-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-3xl font-bold"></h1>
                        <div>
                            {/* User Login/Logout Section */}
                            <span className="mr-4">Logged in as Admin</span>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto mt-8 p-3">
                    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Feedback Section */}
                        <Link to="/adminfeedback" className="dashboard-card bg-blue-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-blue-600">
                            <BsFillChatFill className="text-5xl" />
                            <h2 className="text-xl font-semibold mt-2">Feedback</h2>
                        </Link>

                        {/* Ratings Section */}
                        <div className="dashboard-card bg-yellow-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-yellow-600">
                            <BsStarFill className="text-5xl" />
                            <h2 className="text-xl font-semibold mt-2">Ratings</h2>
                        </div>

                        {/* Analytics Section */}
                        <Link to="/adminanalysis" className="dashboard-card bg-green-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-green-600">
                            <BsBarChartFill className="text-5xl" />
                            <h2 className="text-xl font-semibold mt-2">Analytics</h2>
                        </Link>

                        {/* Add other sections here */}
                        <div className="dashboard-card bg-purple-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-purple-600">
                            <BsPeopleFill className="text-5xl" />
                            <h2 className="text-xl font-semibold mt-2">Section 4</h2>
                        </div>
                        <div className="dashboard-card bg-red-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-red-600">
                            <BsPeopleFill className="text-5xl" />
                            <h2 className="text-xl font-semibold mt-2">Section 5</h2>
                        </div>
                        <div className="dashboard-card bg-indigo-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-indigo-600">
                            <BsPeopleFill className="text-5xl" />
                            <h2 className="text-xl font-semibold mt-2">Section 6</h2>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
