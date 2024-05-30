import React from 'react';
import { AiOutlineDashboard, AiOutlineVideoCamera, AiOutlineBook } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';

const FooterNavbar = () => {
    return (
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 lg:hidden flex justify-around items-center p-4 shadow-md">
            <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-blue-500">
                <AiOutlineDashboard size={24} />
                <p className="text-xs mt-1">Dashboard</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 cursor-pointer text-blue-400 hover:text-blue-500">
                <FaChalkboardTeacher size={24} />
                <p className="text-xs mt-1 ">Teach</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-blue-500">
                <BiTestTube size={24} />
                <p className="text-xs mt-1">Test</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-blue-500">
                <AiOutlineVideoCamera size={24} />
                <p className="text-xs mt-1">Video Meet</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-blue-500">
                <AiOutlineBook size={24} />
                <p className="text-xs mt-1">Library</p>
            </div>
        </div>
    );
};

export default FooterNavbar;
