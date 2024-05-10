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
        key: 'profile',
        label: 'Profile',
        path: '/profile',
        icon: <HiOutlineShieldCheck />,
    },
    {
        key: 'notifications',
        label: 'Notifications',
        path: '/notifications',
        icon: <HiOutlineCog />,
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />,
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
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
