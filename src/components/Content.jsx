
// import React, { useState } from 'react';
// import { BsWindowPlus } from "react-icons/bs";
// import tool1 from "../assets/tool1.png"
// import tool2 from "../assets/tool2.png"
// import tool3 from "../assets/tool3.png"
// import { MdEdit, MdDelete } from "react-icons/md";
// import ContentDialog from './ContentDiaglog';
// import { HiOutlineArrowsExpand } from "react-icons/hi";
// import { BiEdit } from "react-icons/bi";



// const Content = () => {
//     const [contentList, setContentList] = useState([]);

//     const handleDialogSubmit = (data, index = null) => {
//         if (index !== null) {
//             // Update existing content
//             const updatedContentList = [...contentList];
//             updatedContentList[index] = data;
//             setContentList(updatedContentList);
//         } else {
//             // Add new content
//             setContentList([...contentList, data]);
//         }
//     };

//     const handleDelete = (index) => {
//         const updatedContentList = contentList.filter((_, i) => i !== index);
//         setContentList(updatedContentList);
//     };

//     return (
//         <div className='md:flex min-h-[80vh] pt-5 w-full max-w-[100vw]'>
//             <div className={`${contentList.length != 0 && "hidden"} text-center md:border-r-2 md:w-[40%] md:max-w-[40%] py-10 md:pt-[14%]`}>
//                 <div><BsWindowPlus className='text-5xl p-2 bg-gray-200 rounded-2xl mx-auto' /></div>
//                 <p className='py-4'>Content not added yet!</p>
//                 <ContentDialog onSubmit={(data) => handleDialogSubmit(data)} />
//             </div>
//             <div className={`${contentList.length == 0 && "hidden"} border-r-2 pe-2`}>
//                 {contentList.map((item, index) => (
//                     <div key={index} className="mb-5 border-b pb-5">
//                         <div className='flex items-center justify-between gap-2'>
//                             <h3 className='text-xl font-semibold '>{item.topic}</h3>
//                             <div className='flex items-center gap-3'>
//                                 <button onClick={() => handleDialogSubmit(data, index)} className=" hover:text-green-800">
//                                     <BiEdit className='text-2xl'><ContentDialog
//                                     initialData={item}
//                                     onSubmit={(data) => handleDialogSubmit(data, index)}
//                                 /></BiEdit>
//                                 </button>
//                                 <button onClick={() => handleDelete(index)} className=" hover:text-red-600">
//                                     <MdDelete className='text-2xl' />
//                                 </button>
//                                 <ContentDialog
//                                     initialData={item}
//                                     onSubmit={(data) => handleDialogSubmit(data, index)}
//                                 />
//                             </div>
//                         </div>
//                         <p className='mt-2'>{item.content}</p>
//                         {item.file && (
//                             <div className='mt-2'>
//                                 {item.file.type.startsWith('image/') ? (
//                                     <img src={URL.createObjectURL(item.file)} alt="Uploaded file" className="max-w-full h-auto mt-4" />
//                                 ) : (
//                                     <a href={URL.createObjectURL(item.file)} download={item.file.name} className="text-blue-600 underline mt-4 inline-block">
//                                         {item.file.name}
//                                     </a>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <hr />
//             <div className='w-full h-[80vh] sm:w-[60%] relative mx-auto p-5'>

//                 {/* Example static content images */}
//                 <img className='w-[28rem]' src={tool1} alt="Tool Img" />
//                 <img className='h-[8rem] pt-5 absolute right-4' src={tool2} alt="Tool Img" />
//                 <div className='flex items-center absolute bottom-0 h-20 mx-auto px-5'>
//                     <img className='w-[550px] h-14' src={tool3} alt="Tool Img" />
//                     <div className=' bottom-0'>
//                         <HiOutlineArrowsExpand className='text-4xl p-2 bg-gray-100 rounded-md' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Content;


// import React, { useState } from 'react';
// import { BsWindowPlus } from "react-icons/bs";
// import { MdDelete } from "react-icons/md";
// import ContentDialog from './ContentDiaglog.jsx';
// import { HiOutlineArrowsExpand } from "react-icons/hi";
// import tool1 from "../assets/tool1.png"
// import tool2 from "../assets/tool2.png"
// import tool3 from "../assets/tool3.png"
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import PDFViewer from './PDFViewer.jsx';

// const Content = () => {
//     const fileNames = [];
//     const [contentList, setContentList] = useState([]);

//     const handleDialogSubmit = (data, index = null) => {
//         if (index !== null) {
//             const updatedContentList = [...contentList];
//             updatedContentList[index] = data;
//             setContentList(updatedContentList);
//         } else {
//             setContentList([...contentList, data]);
//         }
//         console.log(data.file)
//     };

//     const handleDelete = (index) => {
//         const updatedContentList = contentList.filter((_, i) => i !== index);
//         setContentList(updatedContentList);
//     };

//     fileNames.push(contentList.file.name)

//     console.log(fileNames);
//     return (
//         <div className='md:flex h-[80vh]  pt-5 w-full max-w-[100vw]'>
//             <div className={`${contentList.length !== 0 && "hidden"} text-center md:border-r-2 md:w-[40%] md:max-w-[40%] py-10 md:pt-[14%]`}>
//                 <div><BsWindowPlus className='text-5xl p-2 bg-gray-200 rounded-2xl mx-auto' /></div>
//                 <p className='py-4'>Content not added yet!</p>
//                 <ContentDialog onSubmit={(data) => handleDialogSubmit(data)} />
//             </div>
//             <div className={`${contentList.length === 0 && "hidden"} md:border-r-2 md:w-[40%] md:max-w-[40%] pe-2 overflow-y-auto h-full `}>
//                 <div className=' text-center flex justify-between items-center py-3'>
//                     <p>Add new Content</p>
//                     <ContentDialog onSubmit={(data) => handleDialogSubmit(data)} />
//                 </div>
//                 <hr />
//                 <PDFViewer fileNames={fileNames} />
//                 {contentList.map((item, index) => (
//                     <div key={index} className="mb-5 border-b py-2">
//                         <div className='flex items-center justify-between gap-2'>
//                             <h3 className='text-xl font-semibold '>{item.topic}</h3>
//                             <div className='flex items-center'>
//                                 <button onClick={() => handleDelete(index)} className=" hover:text-red-600">
//                                     <Tooltip title="Delete">
//                                         <IconButton>
//                                             <MdDelete className='text-2xl hover:text-red-600' />
//                                         </IconButton>
//                                     </Tooltip>
//                                 </button>
//                                 <ContentDialog
//                                     initialData={item}
//                                     onSubmit={(data) => handleDialogSubmit(data, index)}
//                                 />
//                             </div>
//                         </div>

//                         {item.file && (
//                             <>
//                                 {/* {fileNames.push(item.file.name)} */}
//                                 <a href={URL.createObjectURL(item.file)} download={item.file.name} className="text-sm text-blue-600 underline inline-block mt-2">
//                                     {item.file.name}
//                                 </a>
//                             </>
//                         )}
//                         <p className='mt-2'>{item.content}</p>
//                     </div>
//                 ))}
//             </div>
//             {/* <hr /> */}
//             <div className='w-full h-[80vh] sm:w-[60%] relative mx-auto p-5'>
//                 <img className='w-[28rem]' src={tool1} alt="Tool Img" />
//                 <img className='h-[8rem] pt-5 absolute right-4' src={tool2} alt="Tool Img" />
//                 <div className='flex items-center absolute bottom-0 h-20 mx-auto px-5'>
//                     <img className='w-[550px] h-14' src={tool3} alt="Tool Img" />
//                     <div className=' bottom-0'>
//                         <HiOutlineArrowsExpand className='text-4xl p-2 bg-gray-100 rounded-md' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Content;

import React, { useState, useEffect } from 'react';
import { BsWindowPlus } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import ContentDialog from './ContentDiaglog.jsx';
import { HiOutlineArrowsExpand } from "react-icons/hi";
import tool1 from "../assets/tool1.png";
import tool2 from "../assets/tool2.png";
import tool3 from "../assets/tool3.png";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PDFViewer from './PDFViewer.jsx';

const Content = () => {
    const [contentList, setContentList] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    const handleDialogSubmit = (data, index = null) => {
        if (index !== null) {
            const updatedContentList = [...contentList];
            updatedContentList[index] = data;
            setContentList(updatedContentList);
            updateFileNames(updatedContentList);
        } else {
            const updatedContentList = [...contentList, data];
            setContentList(updatedContentList);
            updateFileNames(updatedContentList);
        }
    };

    const handleDelete = (index) => {
        const updatedContentList = contentList.filter((_, i) => i !== index);
        setContentList(updatedContentList);
        updateFileNames(updatedContentList);
    };

    const updateFileNames = (updatedContentList) => {
        const updatedFileNames = updatedContentList
            .filter(item => item.file)
            .map(item => item.file.name);
        setFileNames(updatedFileNames);
    };

    useEffect(() => {
        updateFileNames(contentList);
    }, [contentList]);

    return (
        <div className='md:flex h-[80vh] pt-5 w-full max-w-[100vw]'>
            <div className={`${contentList.length !== 0 && "hidden"} text-center md:border-r-2 md:w-[40%] md:max-w-[40%] py-10 md:pt-[14%]`}>
                <div><BsWindowPlus className='text-5xl p-2 bg-gray-200 rounded-2xl mx-auto' /></div>
                <p className='py-4'>Content not added yet!</p>
                <ContentDialog onSubmit={(data) => handleDialogSubmit(data)} />
            </div>
            <div className={`${contentList.length === 0 && "hidden"} md:border-r-2 md:w-[40%] md:max-w-[40%] pe-2 overflow-y-auto h-full`}>
                <div className='text-center flex justify-between items-center py-3'>
                    <p>Add new Content</p>
                    <ContentDialog onSubmit={(data) => handleDialogSubmit(data)} />
                </div>
                <hr />
                <PDFViewer fileNames={fileNames} />
                {contentList.map((item, index) => (
                    <div key={index} className="mb-5 border-b py-2">
                        <div className='flex items-center justify-between gap-2'>
                            <h3 className='text-xl font-semibold'>{item.topic}</h3>
                            <div className='flex items-center'>
                                <button onClick={() => handleDelete(index)} className="hover:text-red-600">
                                    <Tooltip title="Delete">
                                        <IconButton>
                                            <MdDelete className='text-2xl hover:text-red-600' />
                                        </IconButton>
                                    </Tooltip>
                                </button>
                                <ContentDialog
                                    initialData={item}
                                    onSubmit={(data) => handleDialogSubmit(data, index)}
                                />
                            </div>
                        </div>
                        {item.file && (
                            <a href={URL.createObjectURL(item.file)} download={item.file.name} className="text-sm text-blue-600 underline inline-block mt-2">
                                {item.file.name}
                            </a>
                        )}
                        <p className='mt-2'>{item.content}</p>
                    </div>
                ))}
            </div>
            <div className='w-full h-[80vh] sm:w-[60%] relative mx-auto p-5'>
                <img className='w-[28rem]' src={tool1} alt="Tool Img" />
                <img className='h-[8rem] pt-5 absolute right-4' src={tool2} alt="Tool Img" />
                <div className='flex items-center absolute bottom-0 h-20 mx-auto px-5'>
                    <img className='w-[550px] h-14' src={tool3} alt="Tool Img" />
                    <div className='bottom-0'>
                        <HiOutlineArrowsExpand className='text-4xl p-2 bg-gray-100 rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;

