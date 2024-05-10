import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Header from "../Header";
import Sidebar from "./Sidebar"

export default function LayoutAdmin() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <div className="flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
