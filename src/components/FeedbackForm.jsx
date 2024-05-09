import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs"; // Importing arrow icon from React Icons
import Slider from "rc-slider"; // Importing Slider component
import "rc-slider/assets/index.css"; // Importing Slider CSS
import Swal from 'sweetalert2';

export default function FeedbackForm() {
    // State to store form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "", // New field for college selection
        department: "", // New field for department selection
        rating: 0, // Initial star rating value
        radio: "",
        slider: 5, // Initial slider value
        suggestion: ""
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to handle star rating change
    const handleRatingChange = (ratingValue) => {
        setFormData((prevData) => ({
            ...prevData,
            rating: ratingValue
        }));
    };

    // Function to handle slider change
    const handleSliderChange = (sliderValue) => {
        setFormData((prevData) => ({
            ...prevData,
            slider: sliderValue
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission logic here

        // Show success message using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Feedback Submitted!',
            text: 'Thank you for your feedback.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect the user to the dashboard or any other page
            // You can use history.push('/') to redirect if you are using react-router
        });
    };

    return (
        <div className="container mx-auto p-3">
            <h1 className="text-3xl font-bold mb-4">Feedback Form</h1>
            <div className="max-w-lg mx-auto bg-slate-300 rounded-md shadow-md p-6">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto ">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">College</label>
                        <select name="college" value={formData.college} onChange={handleChange} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none">
                            <option value="">Select College</option>
                            <option value="college1">College 1</option>
                            <option value="college2">College 2</option>
                            <option value="college3">College 3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Department</label>
                        <select name="department" value={formData.department} onChange={handleChange} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none">
                            <option value="">Select Department</option>
                            <option value="department1">Department 1</option>
                            <option value="department2">Department 2</option>
                            <option value="department3">Department 3</option>
                            {/* Add more departments as needed */}
                        </select>
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="mb-4">
                            <label className="block text-gray-700">Teacher Rating</label>
                            {/* Star rating component */}
                            <div className="mt-2">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <span
                                        key={rating}
                                        className={rating <= formData.rating ? "mr-2 cursor-pointer text-yellow-500" : "mr-2 cursor-pointer"}
                                        onClick={() => handleRatingChange(rating)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4 ">
                            <label className="block text-gray-700">Campus placement</label>
                            <div className="mt-1">
                                <input type="radio" id="radio1" name="radio" value="option1" onChange={handleChange} className="mr-2" />
                                <label htmlFor="Bad" className="mr-4">Bad</label>
                                <input type="radio" id="radio2" name="radio" value="option2" onChange={handleChange} className="mr-2" />
                                <label htmlFor="Average" className="mr-4">Average</label>
                                <input type="radio" id="radio3" name="radio" value="option3" onChange={handleChange} className="mr-2" />
                                <label htmlFor="Excellent">Excellent</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Overall Rating </label>
                        {/* Slider component */}
                        <Slider min={0} max={10} value={formData.slider} onChange={handleSliderChange} />
                        <div className="text-center mt-2">{formData.slider}</div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Suggestion</label>
                        <textarea type="text" name="suggestion" value={formData.suggestion} onChange={handleChange} className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">Submit</button>
                </form>
            </div>
            <div className="mt-4 text-center">
                <Link to="/" className="text-blue-500 inline-flex items-center"><BsArrowLeft className="mr-1" />Go back to Dashboard</Link>
            </div>
        </div>
    );
}
