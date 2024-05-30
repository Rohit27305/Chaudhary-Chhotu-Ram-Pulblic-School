import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { MdOutlinePlayCircle } from "react-icons/md";


export default function Cards({ tittle, subTittle, views, year, image }) {
  return (
    <div className='max-w-[50rem] mx-auto px-5' >
      <div className='relative'>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <MdOutlinePlayCircle className='absolute text-7xl text-center start-[45%] top-[35%] text-white ' />
        <div className=' absolute bottom-8 text-white text-center w-full'>
          <h1 className='text-3xl font-semibold'>
            {tittle}
          </h1>
          {subTittle}
        </div>
      </div>
    </div>
  );
}
