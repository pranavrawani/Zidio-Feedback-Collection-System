import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Swal from 'sweetalert2';

export default function AdminLogout() {
    const handleLogout = () => {
        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: 'Are you sure you want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform logout logic here, like clearing session storage or cookies
                // For example, clearing session storage
                sessionStorage.removeItem('userToken');
            }
        });
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl font-bold mb-4">Logout</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">Are you sure you want to logout?</p>
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
                >
                    Logout
                </button>
                <div className="mt-4 text-center">
                    <Link to="/admin" className="text-blue-500 inline-flex items-center">
                        <BsArrowLeft className="mr-1" />
                        Go back to Dashboard Page
                    </Link>
                </div>
            </div>
        </div>
    );
}
