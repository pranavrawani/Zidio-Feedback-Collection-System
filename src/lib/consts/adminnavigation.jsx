import React from 'react';
import { Link } from 'react-router-dom';
import {
    HiOutlineViewGrid,
    HiOutlineDocumentText,
    HiOutlineCog,
    HiOutlineQuestionMarkCircle,
    HiOutlineLogout,
    HiOutlineShieldCheck,
    HiOutlineUsers,
    HiOutlineOfficeBuilding,
    HiOutlineTrash,
    HiOutlinePencilAlt,
    HiOutlineClipboardList,
    HiOutlineRefresh,
    HiOutlinePhone,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />,
    },
    {
        key: 'feedback',
        label: 'Feedback',
        path: '/feedback',
        icon: <HiOutlineDocumentText />,
    },
    {
        key: 'adminpanel',
        label: 'Admin Panel',
        path: '/adminpanel',
        icon: <HiOutlineShieldCheck />,
    },
    {
        key: 'add-faculty',
        label: 'Add Faculty',
        path: '/add-faculty',
        icon: <HiOutlineUsers />,
    },
    {
        key: 'add-college',
        label: 'Add College',
        path: '/add-college',
        icon: <HiOutlineOfficeBuilding />,
    },
    {
        key: 'add-department',
        label: 'Add Department',
        path: '/add-department',
        icon: <HiOutlinePencilAlt />,
    },
    {
        key: 'view-departments',
        label: 'View Departments',
        path: '/view-departments',
        icon: <HiOutlineClipboardList />,
    },
    {
        key: 'update-data',
        label: 'Update Data',
        path: '/update-data',
        icon: <HiOutlineRefresh />,
    },
    {
        key: 'delete-data',
        label: 'Delete Data',
        path: '/delete-data',
        icon: <HiOutlineTrash />,
    },
    {
        key: 'check-feedback',
        label: 'Check Feedback',
        path: '/check-feedback',
        icon: <HiOutlineDocumentText />,
    },
    {
        key: 'average-feedback',
        label: 'Average Feedback',
        path: '/average-feedback',
        icon: <HiOutlineDocumentText />,
    },
    {
        key: 'update-contact',
        label: 'Update Contact',
        path: '/update-contact',
        icon: <HiOutlinePhone />,
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />,
    },
    {
        key: 'support',
        label: 'Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />,
    },
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <HiOutlineLogout />,
    },
];

export default function AdminNavigation() {
    return (
        <nav className="sidebar">
            <ul className="sidebar-menu">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link to={link.path}>
                            <span className="icon">{link.icon}</span>
                            <span className="label">{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="sidebar-menu bottom">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link to={link.path}>
                            <span className="icon">{link.icon}</span>
                            <span className="label">{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
