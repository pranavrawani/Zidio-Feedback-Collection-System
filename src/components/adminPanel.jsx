import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  // State to hold the feedback data
  const [feedbackData, setFeedbackData] = useState([]);

  // Function to fetch feedback data from the backend
  const fetchFeedbackData = async () => {
    try {
      const response = await axios.get('/api/feedback'); // Adjust the API endpoint accordingly
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  // Fetch feedback data when the component mounts
  useEffect(() => {
    fetchFeedbackData();
  }, []);

  return (
    <div className="admin-panel flex justify-center mt-5">
      <div className="w-3/4"> {/* Adjust the width as needed */}
        <h2 className="text-center mb-4">Admin Panel</h2>
        <div className="feedback-table">
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Department</th>
                <th>Teacher Rating</th>
                <th>Campus Placement Rating</th>
                <th>Overall Rating</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.college}</td>
                  <td>{feedback.department}</td>
                  <td>{feedback.teacherRating}</td> {/* Assuming teacher rating is available in the feedback object */}
                  <td>{feedback.campusPlacementRating}</td> {/* Assuming campus placement rating is available in the feedback object */}
                  <td>{feedback.overallRating}</td> {/* Assuming overall rating is available in the feedback object */}
                  {/* Add more table cells for additional feedback data */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
