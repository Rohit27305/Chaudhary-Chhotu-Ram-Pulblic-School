import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Card from './Cards'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import Carousel from './Carousel';
import { MdOutlinePlayCircle } from "react-icons/md";


const Section = ({setShowCarousel}) => {
    return (
        <div className='md:flex w-full gap-5'>
            <div className='flex bg-[#cfecfe] p-5 rounded-2xl w-full items-center mb-5 hover:shadow-xl' onClick={()=> setShowCarousel(true)}>
                <div>
                    <h2 className='text-2xl font-semibold'>Simulation</h2>
                    <p className='py-3 px-2'>Simulations are a powerful educational.</p>
                    <button className='border-2 px-10 py-2 border-black rounded-lg'>View All</button>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea className='relative' >
                            <CardMedia
                                component="img"
                                height="120"
                                image={image1}
                                alt="green iguana"
                            />
                            <MdOutlinePlayCircle className='absolute text-5xl text-center start-[40%] top-[20%] text-white ' />

                            <CardContent>
                                <Typography className='font-bold' component="div">
                                    Phases of Moon
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Channel name
                                    <div className='text-xs'>Solar system • Moon</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
            <div className='flex bg-[#5ab2a6] p-5 rounded-2xl w-full items-center text-white mb-5 hover:shadow-xl' onClick={()=> setShowCarousel(true)}>
                <div>
                    <h2 className='text-2xl font-semibold'>Your Videos</h2>
                    <p className='py-3 px-2'>Lorem ipsum dolor amet, consectetur.</p>
                    <button className='border-2 px-10 py-2 text-white rounded-lg'>View All</button>
                </div>
                <div>
                    {/* <Card image={image2} tittle="Eukaryotic cell | Biology | NEET exam" subTittle="Channel name" views={1.1} year={1} /> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea className='relative' >
                            <CardMedia
                                component="img"
                                height="120"
                                image={image2}
                                alt="green iguana"
                            />
                            <MdOutlinePlayCircle className='absolute text-5xl text-center start-[40%] top-[20%] text-white ' />
                            <CardContent>
                                <div className=' text-md'>
                                    Eukaryotic cell | Biology | NEET exam
                                </div>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Channel name */}
                                    <div className='text-xs'>• 1.1k views  • 1 year ago</div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Section

// import * as React from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import Slide from '@mui/material/Slide';
// import { IoClose } from "react-icons/io5";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { BsWindowPlus } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa";
// import Carousel from './Carousel';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function Section() {

//     const [topic, setTopic] = React.useState('');

//     const handleChange = (event) => {
//         setTopic(event.target.value);
//     };

//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <button className='bg-blue-600 rounded-full px-10 py-2 text-white' onClick={handleClickOpen}>Add Content</button>
//             <Dialog
//                 open={open}
//                 TransitionComponent={Transition}
//                 keepMounted
//                 onClose={handleClose}
//                 aria-describedby="alert-dialog-slide-description"
//             >
//                 <div className='p-40'>
//                 <Carousel/>
//                 </div>
//                 {/* <div className='flex items-center justify-between p-5'>

//                     <h2 className='text-2xl font-bold'>Add Content</h2> <IoClose className='text-3xl' onClick={handleClose} />
//                 </div>
//                 <div className='px-4'>
//                     <p className='text-xl pb-4'>Topic Name</p>
//                     <FormControl fullWidth>
//                         <InputLabel id="demo-simple-select-label">Topic Name</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={topic}
//                             label="Topic Name"
//                             onChange={handleChange}
//                         >
//                             <MenuItem value={10}>Topic Name 1</MenuItem>
//                             <MenuItem value={20}>Topic Name 2</MenuItem>
//                             <MenuItem value={30}>Topic Name 3</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </div>
//                 <div>
//                     <div className='flex p-5 gap-3 text-center'>
//                         <div className='text-center border rounded-lg px-5 py-8 hover:bg-sky-100 hover:border-blue-300'>
//                             <div><BsWindowPlus className='text-5xl p-2 bg-gray-200 rounded-2xl mx-auto' /></div>
//                             <p className='py-4'>Type your own <br/>personalized content</p>
//                         </div>
//                         <div className='text-center border rounded-lg px-10 py-8 hover:bg-sky-100 hover:border-blue-300'>
//                             <div><BsWindowPlus className='text-5xl p-2 bg-gray-200 rounded-2xl mx-auto' /></div>
//                             <p className='py-4'>Upload a pdf of <br/> your content</p>
//                         </div>
//                     </div>
//                 </div>
//                 <DialogActions>
//                     <button onClick={handleClose} className='border px-6 py-2 font-semibold border-black rounded-full'>Cancel</button>
//                     <button onClick={handleClose} className='bg-blue-600 rounded-full px-6 py-2 text-white flex items-center gap-2'> <FaPlus /> Add Content</button>
//                 </DialogActions> */}
//             </Dialog>
//         </React.Fragment>
//     );
// }
