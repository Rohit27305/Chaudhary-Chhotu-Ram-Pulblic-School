// import React from 'react'
// import logo from "../assets/logo.png"

// export default function SideBar() {
//   return (
//     <div>
//       <div className='sm:flex gap-2 hidden items-center bg-gray-200 shadow-md p-2'>
//         <img src={logo} alt="Logo" className='rounded-full w-12 ' />
//         <h4 className='font-bold'>Chaudhary Chhotu Ram <br /> Public School</h4>
//       </div>
//     </div>

//   )
// }


import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import logo from "../assets/logo.png";
import Tabs from "./Tabs"
import { IoClose,IoHomeOutline, IoVideocamOutline, IoNewspaperOutline  } from "react-icons/io5";

const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-2 p-2 ${active ? 'text-blue-500' : 'text-gray-600'} hover:bg-gray-200 cursor-pointer`}>
    {icon}
    <span>{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className='flex max-w-[100vw]'>
      {/* <img src={logo} alt="Logo" className='w-12 h-12 rounded-full ms-2 mt-3 border hover:scale-105 hidden lg:block' /> */}
      <div className="bg-white shadow-md h-screen p-4 min-w-64 max-w-64 fixed hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Logo" className="rounded-full w-12" />
          <h4 className="font-bold">Chaudhary Chhotu Ram Public School</h4>
        </div>
        <SidebarItem icon={<IoClose />} label="Collapse" />
        <SidebarItem icon={<IoHomeOutline />} label="Dashboard" />
        <SidebarItem icon={<FaChalkboardTeacher />} label="Teach" active />
        <SidebarItem icon={<IoNewspaperOutline />} label="Test" />
        <SidebarItem icon={<MdOutlineClass />} label="Take Class" />
        <SidebarItem icon={<IoVideocamOutline />} label="Video Library" />
        <SidebarItem icon={<BsQuestionCircle />} label="Doubts" />
        <div className='absolute bottom-5'>
          <p><span className=' bg-violet-800 text-white p-2 rounded-full'>PM</span> Priyansh Mandloi</p>
        </div>
      </div>
      <div className='w-full'>
        <Tabs />
      </div>
    </div>
  );
}

export default Sidebar;
