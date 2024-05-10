import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { FaUsers, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa'; // Importing icons from React Icons
import axios from 'axios';

export default function AverageFeedback() {
    const [averageRating, setAverageRating] = useState(0); // State to store average rating
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        // Function to fetch average feedback rating
        const fetchAverageRating = async () => {
            try {
                const response = await axios.get('/api/average-feedback');
                setAverageRating(response.data.averageRating);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchAverageRating(); // Fetch average rating when component mounts
    }, []);

    if (loading) {
        return <div className="container mx-auto text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="container mx-auto text-center mt-8">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl font-bold mb-4">Average Feedback</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Overall Average Rating</h2>
                    <span className="text-3xl font-bold text-blue-500">{averageRating.toFixed(1)}</span>
                </div>
                <div className="mb-4">
                    <p className="text-lg mb-2">Based on feedback from:</p>
                    <ul className="list-disc pl-4">
                        <li><FaUsers className="inline-block mr-2" /> Students</li>
                        <li><FaChalkboardTeacher className="inline-block mr-2" /> Teachers</li>
                        <li><FaUserTie className="inline-block mr-2" /> Administrative Staff</li>
                        {/* Add more categories as needed */}
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Out of 5</span>
                    <Link to="/admin" className="text-blue-500 inline-flex items-center">
                        <BsArrowLeft className="mr-1" />
                        Go back to Admin Panel
                    </Link>
                </div>
            </div>
        </div>
    );
}
