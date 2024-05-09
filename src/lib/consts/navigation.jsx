import {
    HiOutlineViewGrid,
  
    HiOutlineDocumentText,
    HiOutlineCog,
    HiOutlineQuestionMarkCircle,
    HiOutlineLogout,
    HiOutlineShieldCheck,
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
        key: 'adminpanel', // Corrected key to match the label
        label: 'Admin Panel',
        path: '/adminpanel',
        icon: <HiOutlineShieldCheck />, // Use the ShieldCheck icon for Admin Panel
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
