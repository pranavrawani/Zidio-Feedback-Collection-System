import React from 'react';
import { FcBarChart } from 'react-icons/fc';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames';

export default function Sidebar() {
    return (
        <div className='flex flex-col bg-neutral-900 w-70 p-4 text-white sm-'>
            <div className='flex items-center gap-2 px-1 py-1'>
                <FcBarChart fontSize={32}  /> 
                <span className='text-neutral-100 text-lg font-bold'>Campus Voice</span>
            </div>
            <div className='flex-1 py-8'>
                {DASHBOARD_SIDEBAR_LINKS.map(link => (
                    <div className='p-2 flex items-center hover:bg-gray-600' key={link.key}>
                        <a href={link.path} className='flex items-center gap-2'>
                            {React.cloneElement(link.icon, { size: 18 })}
                            <span>{link.label}</span>
                        </a>
                    </div>
                ))}
            </div>
            <div className='border-t border-neutral-700 pt-2'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(link => (
                    <div className='p-2 flex items-center hover:bg-gray-600'  key={link.key}>
                        <a href={link.path} className='flex items-center gap-2'>
                            {React.cloneElement(link.icon, { size: 18 })}
                            <span>{link.label}</span>
                        </a>
                    </div>
                     
                ))}
                
            </div>
        </div>
    );
}
function SidebarLink({ link }) {
    const { pathname } = useLocation();
    return (
        <link to={link.path} className={classNames({ ' bg-neutral-900 text-white': pathname === link.path })}> 
            <span className='text-xl'>{link.icon}</span>
            {link.label}
        </link>
    );
}

