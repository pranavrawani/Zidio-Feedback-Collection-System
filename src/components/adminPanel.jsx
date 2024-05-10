import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsArrowLeft } from "react-icons/bs"; // Importing arrow icon from React Icons
import { Link } from "react-router-dom";


export default function AdminPanel() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(10);

  const fetchFeedbackData = async () => {
    try {
      const response = await axios.get('/api/feedback');
      setFeedbackData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = feedbackData.filter((feedback) =>
      feedback.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = filteredData.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="admin-panel flex flex-col justify-center items-center mt-5"> {/* Update here */}
      <div className="w-3/4">
        <h2 className="text-center mb-4">Admin Panel</h2>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="px-2 py-1 border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => console.log('Export to CSV/Excel')}
          >
            Export to CSV/Excel
          </button>
        </div>
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
              </tr>
            </thead>
            <tbody>
              {currentFeedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.college}</td>
                  <td>{feedback.department}</td>
                  <td>{feedback.teacherRating}</td>
                  <td>{feedback.campusPlacementRating}</td>
                  <td>{feedback.overallRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <Pagination
              feedbacksPerPage={feedbacksPerPage}
              totalFeedbacks={filteredData.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link to="/admin" className="text-blue-500 inline-flex items-center">
          <BsArrowLeft className="mr-1" />
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );


}

const Pagination = ({ feedbacksPerPage, totalFeedbacks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFeedbacks / feedbacksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
