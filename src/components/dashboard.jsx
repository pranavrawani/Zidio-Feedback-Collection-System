import React from "react";
import { Link } from "react-router-dom";
import { BsFillChatFill, BsStarFill, BsBarChartFill } from "react-icons/bs"; // Import icons from React Icons

export default function Dashboard() {
    return (
        <div className="container mx-auto mt-8 p-3">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Feedback Section */}
                <Link to="/feedback" className="dashboard-card bg-blue-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-blue-600">
                    <div>
                        <BsFillChatFill className="text-5xl" />
                        <h2 className="text-xl font-semibold mt-2">Feedback</h2>
                    </div>
                    <span className="text-2xl">&rarr;</span>
                </Link>

                {/* Ratings Section */}
                <div className="dashboard-card bg-yellow-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-yellow-600">
                    <div>
                        <BsStarFill className="text-5xl" />
                        <h2 className="text-xl font-semibold mt-2">Ratings</h2>
                    </div>
                    <span className="text-2xl">&rarr;</span>
                </div>

                {/* Analytics Section */}
                <div className="dashboard-card bg-green-500 text-white p-6 flex items-center justify-between rounded-lg shadow-lg hover:bg-green-600">
                    <div>
                        <BsBarChartFill className="text-5xl" />
                        <h2 className="text-xl font-semibold mt-2">Analytics</h2>
                    </div>
                    <span className="text-2xl">&rarr;</span>
                </div>
            </div>
        </div>
    );
}
