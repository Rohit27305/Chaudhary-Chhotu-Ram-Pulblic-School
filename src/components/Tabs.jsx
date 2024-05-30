import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { IoIosArrowBack, IoMdShare } from "react-icons/io";
import Box from '@mui/material/Box';
import Section from './Section';
import { FiDownload } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import Content from './Content';
import logo from "../assets/logo.png";
import Carousel from './Carousel';
import { MdArrowBack } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IoClose } from "react-icons/io5";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [showCarousel, setShowCarousel] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchClick = () => {
        if (isSearchOpen && searchValue === '') {
            setIsSearchOpen(false);
        } else {
            setIsSearchOpen(true);
        }
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value === '') {
            setIsSearchOpen(false);
        }
    };

    return (
        <Box className="w-full lg:ps-[16rem]">
            <div className='w-full'>
                <div className='flex gap-2 lg:hidden items-center bg-gray-200 shadow-md p-2'>
                    <img src={logo} alt="Logo" className='rounded-full w-12 ' />
                    <h4 className='font-bold'>Chaudhary Chhotu Ram <br /> Public School</h4>
                </div>
                <div className='flex justify-between py-2 sm:hidden items-center px-2'>
                    <div className='font-bold text-2xl flex items-center'><IoIosArrowBack /> <span>Chapter</span></div>

                    <div className='flex gap-2 font-bold text-2xl '>
                        <Search className={isSearchOpen ? 'block' : 'hidden'}>
                            <SearchIconWrapper>
                                <IoSearchSharp />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                value={searchValue}
                                onChange={handleSearchChange}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {isSearchOpen ? (<Tooltip title="Close">
                            <IconButton onClick={handleSearchClick}>
                                <IoClose />
                            </IconButton>
                        </Tooltip>) :
                            (<Tooltip title="Search">
                                <IconButton onClick={handleSearchClick}>
                                    <IoSearchSharp />
                                </IconButton>
                            </Tooltip>)}
                        <Tooltip title="Download">
                            <IconButton>
                                <FiDownload />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Share">
                            <IconButton>
                                <IoMdShare />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                {showCarousel ?
                    (
                        <>
                            <div onClick={() => setShowCarousel(false)} className='p-4 font-bold text-lg flex items-center cursor-pointer gap-2'><MdArrowBack /> <span> Back</span></div>
                            <hr />
                        </>) :
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex items-center justify-between pt-2">

                        <div className='font-bold text-2xl sm:flex items-center hidden '><IoIosArrowBack /> <span>Chapter</span></div>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Teach" {...a11yProps(0)} />
                            <Tab label="Worksheet" {...a11yProps(1)} />
                            <Tab label="Mind-Map" {...a11yProps(2)} />
                        </Tabs>
                        <div className='hidden sm:flex gap-3 font-bold text-2xl '>
                            <Search className={isSearchOpen ? 'block' : 'hidden'}>
                                <SearchIconWrapper>
                                    <IoSearchSharp />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            {isSearchOpen ? (<Tooltip title="Close">
                                <IconButton onClick={handleSearchClick}>
                                    <IoClose />
                                </IconButton>
                            </Tooltip>) :
                                (<Tooltip title="Search">
                                    <IconButton onClick={handleSearchClick}>
                                        <IoSearchSharp />
                                    </IconButton>
                                </Tooltip>)}
                            <Tooltip title="Download">
                                <IconButton>
                                    <FiDownload />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Share">
                                <IconButton>
                                    <IoMdShare />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Box>
                }
            </div>
            <CustomTabPanel value={value} index={0} className="w-full">
                {showCarousel ? (<Carousel />) : (
                    <>
                        <Section setShowCarousel={setShowCarousel} />
                        <Content />
                    </>)}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <h1 className='text-3xl pt-5 text-center font-bold'>This page is under maintainance</h1>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <h1 className='text-3xl pt-5 text-center font-bold'>This page is under maintainance</h1>
            </CustomTabPanel>
        </Box>
    );
}


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import { IoIosArrowBack, IoMdShare } from "react-icons/io";
// import Box from '@mui/material/Box';
// import Section from './Section';
// import { FiDownload } from "react-icons/fi";
// import { IoSearchSharp } from "react-icons/io5";
// import Content from './Content';
// import logo from "../assets/logo.png";
// import Carousel from './Carousel';
// import { MdArrowBack } from "react-icons/md";
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));



// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const [showCarousel, setShowCarousel] = React.useState(false);


//     return (
//         <Box className="w-full lg:ps-[16rem]">
//             <div className='w-full'>
//                 <div className='flex gap-2 lg:hidden items-center bg-gray-200 shadow-md p-2'>
//                     <img src={logo} alt="Logo" className='rounded-full w-12 ' />
//                     <h4 className='font-bold'>Chaudhary Chhotu Ram <br /> Public School</h4>
//                 </div>
//                 <div className='flex justify-between py-2 sm:hidden items-center px-2'>
//                     <div className='font-bold text-2xl flex items-center'><IoIosArrowBack /> <span>Chapter</span></div>

//                     <div className='flex gap-2 font-bold text-2xl '>
//                         <Tooltip title="Search">
//                             <IconButton>
//                                 <Search>
//                                     <SearchIconWrapper>
//                                         <IoSearchSharp />
//                                         {/* <SearchIcon /> */}
//                                     </SearchIconWrapper>
//                                     <StyledInputBase
//                                         placeholder="Search…"
//                                         inputProps={{ 'aria-label': 'search' }}
//                                     />
//                                 </Search>
//                             </IconButton>
//                         </Tooltip>
//                         <Tooltip title="Download">
//                             <IconButton>
//                                 <FiDownload />
//                             </IconButton>
//                         </Tooltip>
//                         <Tooltip title="Share">
//                             <IconButton>
//                                 <IoMdShare />
//                             </IconButton>
//                         </Tooltip>
//                     </div>
//                 </div>
//                 {showCarousel ?
//                     (
//                         <>
//                             <div onClick={() => setShowCarousel(false)} className='p-4 font-bold text-lg flex items-center cursor-pointer gap-2'><MdArrowBack /> <span> Back</span></div>
//                             <hr />
//                         </>) :
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex items-center justify-between pt-2">

//                         <div className='font-bold text-2xl sm:flex items-center hidden '><IoIosArrowBack /> <span>Chapter</span></div>
//                         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                             <Tab label="Teach" {...a11yProps(0)} />
//                             <Tab label="Worksheet" {...a11yProps(1)} />
//                             <Tab label="Mind-Map" {...a11yProps(2)} />
//                         </Tabs>
//                         <div className='hidden sm:flex gap-3 font-bold text-2xl '>
//                             <Tooltip title="Search">
//                                 <IconButton>
//                                     <IoSearchSharp />
//                                 </IconButton>
//                             </Tooltip>
//                             <Search>
//                                 <SearchIconWrapper>
//                                     <IoSearchSharp />
//                                 </SearchIconWrapper>
//                                 <StyledInputBase
//                                     placeholder="Search…"
//                                     inputProps={{ 'aria-label': 'search' }}
//                                 />
//                             </Search>
//                             <Tooltip title="Download">
//                                 <IconButton>
//                                     <FiDownload />
//                                 </IconButton>
//                             </Tooltip>
//                             <Tooltip title="Share">
//                                 <IconButton>
//                                     <IoMdShare />
//                                 </IconButton>
//                             </Tooltip>
//                         </div>
//                     </Box>
//                 }
//             </div>
//             <CustomTabPanel value={value} index={0} className="w-full">
//                 {showCarousel ? (<Carousel />) : (
//                     <>
//                         <Section setShowCarousel={setShowCarousel} />
//                         <Content />
//                     </>)}
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={1}>
//                 <h1 className='text-3xl pt-5 text-center font-bold'>This page is under maintainance</h1>
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={2}>
//                 <h1 className='text-3xl pt-5 text-center font-bold'>This page is under maintainance</h1>
//             </CustomTabPanel>
//         </Box>
//     );
// }


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import { IoIosArrowBack } from "react-icons/io";
// import Box from '@mui/material/Box';
// import Section from './Section';
// import { IoMdShare } from "react-icons/io";
// import { FiDownload } from "react-icons/fi";
// import { IoSearchSharp } from "react-icons/io5";
// import Content from './Content';
// import logo from "../assets/logo.png";
// import Carousel from './Carousel';
// import { MdArrowBack } from "react-icons/md";


// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);
//     const [isSearchOpen, setIsSearchOpen] = React.useState(false);
//     const [showCarousel, setShowCarousel] = React.useState(false);


//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const handleSearchClick = () => {
//         setIsSearchOpen(!isSearchOpen);
//     };

//     return (
//         <Box className="w-full lg:ps-[16rem]">
//             <div className='w-full'>
//                 <div className='flex gap-2 lg:hidden items-center bg-gray-200 shadow-md p-2'>
//                     <img src={logo} alt="Logo" className='rounded-full w-12 ' />
//                     <h4 className='font-bold'>Chaudhary Chhotu Ram <br /> Public School</h4>
//                 </div>
//                 <div className='flex justify-between py-2 sm:hidden items-center px-2'>
//                     {showCarousel ? (<div onClick={() => setShowCarousel(false)} className='font-bold text-lg flex items-center cursor-pointer gap-2'><MdArrowBack /> <span> Back</span></div>) : (<div className='font-bold text-2xl flex items-center'><IoIosArrowBack /> <span>Chapter</span></div>)
//                     }

//                     <div className='flex gap-5 font-bold text-2xl '>
//                         <div className="relative">
//                             {isSearchOpen ? (
//                                 <div>
//                                     <input
//                                         type="text"
//                                         className="transition-all duration-500 ease-in-out w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none relative"
//                                         placeholder="Search..."
//                                     />
//                                     <IoSearchSharp onClick={handleSearchClick} className=' absolute ' />
//                                 </div>
//                             ) : (
//                                 <IoSearchSharp onClick={handleSearchClick} />
//                             )}
//                         </div>
//                         <FiDownload />
//                         <IoMdShare />
//                     </div>
//                 </div>
//                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex items-center justify-between pt-2">
//                     {/* <div className='font-bold text-2xl sm:flex items-center hidden '>
//                         <IoIosArrowBack /> <span>Chapter</span>
//                     </div> */}
//                     {showCarousel ?
//                         (<div onClick={() => setShowCarousel(false)} className='font-bold text-2xl hidden sm:flex items-center  cursor-pointer gap-1'>
//                             <MdArrowBack /> <span> Back</span>
//                         </div>) :
//                         (<div className='font-bold text-2xl sm:flex items-center hidden'>
//                             <IoIosArrowBack /> <span>Chapter</span>
//                         </div>)
//                     }
//                     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                         <Tab label="Teach" {...a11yProps(0)} />
//                         <Tab label="Worksheet" {...a11yProps(1)} />
//                         <Tab label="Mind-Map" {...a11yProps(2)} />
//                     </Tabs>
//                     <div className='hidden sm:flex gap-5 font-bold text-2xl '>
//                         <div className="relative">
//                             {isSearchOpen ? (
//                                 <input
//                                     type="text"
//                                     className="transition-all duration-500 ease-in-out w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none"
//                                     placeholder="Search..."
//                                 />
//                             ) : (
//                                 <IoSearchSharp onClick={handleSearchClick} />
//                             )}
//                         </div>
//                         <FiDownload />
//                         <IoMdShare />
//                     </div>
//                 </Box>
//             </div>
//             <CustomTabPanel value={value} index={0} className="w-full">
//                 {showCarousel ? (<Carousel />) : (
//                     <>
//                         <Section setShowCarousel={setShowCarousel} />
//                         <Content />
//                     </>)}
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={1}>
//                 <h1 className='text-3xl pt-5 text-center font-bold'>This page is under maintenance</h1>
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={2}>
//                 <h1 className='text-3xl pt-5 text-center font-bold'>This page is under maintenance</h1>
//             </CustomTabPanel>
//         </Box>
//     );
// }
