import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { IoClose } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaPlus } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import { TbFileUpload } from "react-icons/tb";
import ComboBox from './ComboBox';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContentDialog({ onSubmit, initialData }) {
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [isTextSelected, setIsTextSelected] = useState(false);

    useEffect(() => {
        if (initialData) {
            setTopic(initialData.topic);
            setContent(initialData.content);
            setFile(initialData.file);
            setIsFileSelected(!!initialData.file);
            setIsTextSelected(!!initialData.file);
        }
    }, [initialData]);

    const handleChangeTopic = (event) => {
        setTopic(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        // Check if topic name is empty or not
        if (!topic.trim()) {
            alert("Please enter a topic name.");
            return;
        }
    
        // Check if either text or file is selected
        if (!isTextSelected && !isFileSelected) {
            alert("Please select either text or file.");
            return;
        }
    
        // Check if text is selected and content is empty
        if (isTextSelected && !content.trim()) {
            alert("Please enter content.");
            return;
        }
    
        // Check if file is selected and file is null
        if (isFileSelected && !file) {
            alert("Please select a file.");
            return;
        }
    
        // Submit the form if all conditions are met
        onSubmit({ topic, content, file });
        handleClose();
    };
    

    const handleClose = () => {
        setOpen(false);
        setTopic('');
        setContent('');
        setFile(null);
        setIsFileSelected(false);
        setIsTextSelected(false);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSelectText = () => {
        setIsTextSelected(true);
        setIsFileSelected(false);
    };

    const handleSelectFile = () => {
        setIsTextSelected(false);
        setIsFileSelected(true);
    };

    return (
        <React.Fragment>
            <button className='bg-blue-600 rounded-full px-10 py-2 text-white' onClick={handleClickOpen}>
                {initialData ? 'Edit' : 'Add Content'}
            </button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='flex items-center justify-between p-5'>
                    <h2 className='text-2xl font-bold'>{initialData ? 'Edit' : 'Add Content'}</h2>
                    <IoClose className='text-3xl cursor-pointer' onClick={handleClose} />
                </div>
                <div className='px-4'>
                    <p className='text-xl pb-4'>Topic Name</p>
                    {/* <ComboBox/> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Topic Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={topic}
                            label="Topic Name"
                            onChange={handleChangeTopic}
                        >
                            <MenuItem value="Topic Name 1">Topic Name 1</MenuItem>
                            <MenuItem value="Topic Name 2">Topic Name 2</MenuItem>
                            <MenuItem value="Topic Name 3">Topic Name 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='flex p-5 gap-3 text-center'>
                    <div className={`${isTextSelected && "bg-sky-100 border-blue-500"} w-[50%] text-center border rounded-lg px-5 py-8 hover:bg-sky-100 hover:border-blue-300 cursor-pointer`} onClick={handleSelectText}>
                        <BiText className='p-2 text-4xl bg-gray-200 mx-auto rounded' />
                        <p className='py-4'>Type your own personalized content</p>
                    </div>
                    <div className={`${isFileSelected && "bg-sky-100 border-blue-500"} w-[50%] text-center border rounded-lg px-5 py-8 hover:bg-sky-100 hover:border-blue-300 cursor-pointer`} onClick={handleSelectFile}>
                        <TbFileUpload className='p-2 text-4xl bg-gray-200 mx-auto rounded'/>
                        <p className='py-4'>Upload a pdf of your content</p>
                    </div>
                </div>
                <div className='px-5 w-full'>
                    {isFileSelected && (
                        <input type="file" onChange={handleFileChange} className='mt-4 w-full' />
                    ) }
                    {isTextSelected && (
                        <textarea
                            name="content"
                            id="content"
                            rows="4"
                            value={content}
                            onChange={handleContentChange}
                            placeholder="Type your content here..."
                            className='w-full border p-2 mt-4 rounded-lg'
                        ></textarea>
                    )}
                </div>
                <DialogActions>
                    <button onClick={handleClose} className='border px-6 py-2 font-semibold border-black rounded-full mb-3'>Cancel</button>
                    <button onClick={handleSubmit} className='bg-blue-600 rounded-full px-6 py-2 text-white flex items-center gap-2 mb-3'>
                        <FaPlus /> {initialData ? 'Save Changes' : 'Add Content'}
                    </button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
