
// import React from "react";
// import Slider from "react-slick";
// import pdf from "../assets/pdf.png"

// function Pdf({ fileName }) {
//     return (
//         <div className="w-40">
//             <img src={pdf} alt="pdf" className='bg-gray-100 p-2 rounded-xl' />
//             <p> <span className='p-1 m-2 text-xs text-white bg-red-500 rounded'>PDF</span>{fileName}</p>
//         </div>
//     )
// }

// function PDFViewer({fileNames}) {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     };
//     console.log(fileNames);
//     return (
//         <div className="w-full my-2 flex overflow-y-scroll">
//             {/* <Slider {...settings}>
//             </Slider> */}
//                 {fileNames.map((file)=>{
//                     return <Pdf fileName={file} />
//                 })}
//         </div>
//     );
// }

// export default PDFViewer;

import React from "react";
import Slider from "react-slick";
import pdf from "../assets/pdf.png";

function Pdf({ fileName }) {
  // Extract file extension from the file name
  const fileExtension = fileName.split('.').pop();

  // Truncate file name if it exceeds 10 characters
  const truncatedFileName = fileName.length > 10 ? fileName.slice(0, 15) + "..." : fileName;

  return (
    <div className="min-w-40 px-2 pt-2">
      <img src={pdf} alt="pdf" className="bg-gray-100 p-2 rounded-xl" />
      <p className="text-xs py-2">
        {" "}
        <span className="p-1 m-1 text-xs text-white bg-red-500 rounded">{fileExtension}</span>
        {truncatedFileName}
      </p>
    </div>
  );
}

function PDFViewer({ fileNames }) {
  // Sort the file names alphabetically
  const sortedFileNames = fileNames.sort((a, b) => a.localeCompare(b));

  return (
    <div className="w-full my-2 flex overflow-x-scroll">
      {sortedFileNames.map((file, index) => (
        <Pdf key={index} fileName={file} />
      ))}
    </div>
  );
}

export default PDFViewer;
