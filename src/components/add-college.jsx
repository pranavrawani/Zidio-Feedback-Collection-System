import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export default function AddCollege() {
    const [collegeName, setCollegeName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle form submission
        console.log('College name:', collegeName);
        // You can use this data to make an API call to add the college
        // Redirect to another page after successful submission
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl font-bold mb-4">Add College</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="collegeName" className="block text-gray-700">College Name</label>
                        <input
                            type="text"
                            id="collegeName"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter college name"
                            value={collegeName}
                            onChange={(e) => setCollegeName(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Add College
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
