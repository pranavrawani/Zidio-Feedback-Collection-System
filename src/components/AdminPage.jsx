import React from "react";
import AdminLayout from "./LayoutAdmin"; // Assuming the layout file is named LayoutAdmin.jsx
import AdminSidebar from "./AdminSidebar"; // Import AdminSidebar component
import AdminDashboard from "./AdminDashboard";

export default function AdminPage() {
    return (
        <AdminLayout>
            <AdminSidebar />
            <AdminDashboard />
        </AdminLayout>
    );
}
