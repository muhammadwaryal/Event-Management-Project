// // // // // import React from 'react'
// // // // // import { Button } from './ui/button'
// // // // // import { Bookmark } from 'lucide-react'
// // // // // import { Avatar, AvatarImage } from './ui/avatar'
// // // // // import { Badge } from './ui/badge'
// // // // //  import { useNavigate } from 'react-router-dom';
// // // // //  import Events from './Events'

// // // // //   const Event = ({event}) => {
// // // // //     const navigate = useNavigate();
// // // // // //     // const jobId = "lsekdhjgdsnfvsdkjf";

// // // // // //     // const daysAgoFunction = (mongodbTime) => {
// // // // // //     //     const createdAt = new Date(mongodbTime);
// // // // // //     //     const currentTime = new Date();
// // // // // //     //     const timeDifference = currentTime - createdAt;
// // // // // //     //     return Math.floor(timeDifference/(1000*24*60*60));
// // // // // //     }
    
// // // // //      return (
// // // // // //         // <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
// // // // // //         //     <div className='flex items-center justify-between'>
// // // // // //         //         <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
// // // // // //         //         <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
// // // // // //         //     </div>

// // // // //             //<div className='flex items-center gap-2 my-2'>
// // // // //                 {/* <Button className="p-6" variant="outline" size="icon">
// // // // //                     <Avatar>
// // // // //                         <AvatarImage src={job?.company?.logo} />
// // // // //                     </Avatar>
// // // // //                 </Button> */}
// // // // //                 <div>
// // // // //                     <h1 className='font-medium text-lg'>{event?.name}</h1>
// // // // //                     <p className='text-sm text-gray-500'>India</p>
// // // // //                 </div>
// // // // //              </div>

// // // // //             <div>
// // // // //                 <h1 className='font-bold text-lg my-2'>{event?.title}</h1>
// // // // //                 <p className='text-sm text-gray-600'>{event?.description}</p>
// // // // //             </div>
// // // // //             <div className='flex items-center gap-2 mt-4'>
// // // // //                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
// // // // //                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
// // // // //                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
// // // // //             </div>
// // // // //             <div className='flex items-center gap-4 mt-4'>
// // // // //                 <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
// // // // //                 <Button className="bg-[#7209b7]">Save For Later</Button>
// // // // //             </div>
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // // export default Event;

 

// // // // // const Event = () => {
// // // // //   return (
// // // // //     <div>Event</div>
// // // // //   )
// // // // // }

// // // // // export default Event

// import React from "react";
// import { Button } from "./ui/button";
// import { Bookmark } from "lucide-react";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { useNavigate } from "react-router-dom";
// import Events from "./Events";

// const Event = ({ event }) => {
  
//   //  console.log(["gagg111", event])
//   //  console.log(event[0].title)
//   const navigate = useNavigate();
      
//   return (

//     <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
//       <div className="flex items-center justify-between">
//         <p className="text-sm text-gray-500">Today</p>
//         <Button variant="outline" className="rounded-full" size="icon">
//           <Bookmark />
//         </Button>
//       </div>

//       <div className="flex items-center gap-2 my-2">
//         <Button className="p-6" variant="outline" size="icon">
//           {/* <Avatar>
//             <AvatarImage src={event?.logo} />
//           </Avatar> */}
//         </Button>
//         <div>
//           <h1 className="font-medium text-lg">{event?.description}</h1>
//           <p className="text-sm text-gray-500">{event?.title || "MUET"}</p>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold text-lg my-2">{event?.eventType}</h1>
//         <p className="text-sm text-gray-600">{event?.date}</p>
//       </div>

//       <div className="flex items-center gap-2 mt-4">
//         <Badge className="text-blue-700 font-bold" variant="ghost">
//           {event?.time || "N/A"} Positions
//         </Badge>
//         <Badge className="text-[#F83002] font-bold" variant="ghost">
//           {event?.jobType || "N/A"}
//         </Badge>
//         <Badge className="text-[#7209b7] font-bold" variant="ghost">
//           {event?.salary ? `${event.salary} LPA` : "N/A"}
//         </Badge>
//       </div>

//       <div className="flex items-center gap-4 mt-4">
//         <Button onClick={() => navigate(`/description/${event?._id}`)} variant="outline">
//           Details
//         </Button>
//         <Button className="bg-[#7209b7]">Save For Later</Button>
//       </div>
//     </div>
//   );
// };

// export default Event;

import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {
  const navigate = useNavigate();

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    console.log("Bookmarked:", event?.title);
  };

  const handleCardClick = () => {
    navigate(`/events/${event?.id}`);
  };

  // return (
  //   <div
  //     onClick={handleCardClick}
  //     className="p-5 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
  //   >
  //     {/* Top: Date + Bookmark */}
  //     <div className="flex items-center justify-between">
  //       <p className="text-sm text-gray-500">{event?.date || "Coming Soon"}</p>
  //       <Button
  //         onClick={handleBookmark}
  //         variant="outline"
  //         className="rounded-full"
  //         size="icon"
  //       >
  //         <Bookmark className="w-4 h-4" />
  //       </Button>
  //     </div>

  //     {/* Middle: Avatar + Description */}
  //     <div className="flex items-center gap-3 my-4">
  //       <Avatar>
  //         <AvatarImage
  //           src={event?.logo || "https://via.placeholder.com/40"}
  //           alt="Event Logo"
  //         />
  //       </Avatar>
  //       <div>
  //         <h1 className="font-semibold text-lg">{event?.description}</h1>
  //         <p className="text-sm text-gray-500">{event?.title}</p>
  //       </div>
  //     </div>

  //     {/* Event Type & Time */}
  //     <div className="my-2">
  //       <h2 className="font-bold text-md mb-1">{event?.eventType}</h2>
  //       <Badge variant="outline" className="text-blue-600 border-blue-300">
  //         {event?.time || "To be announced"}
  //       </Badge>
  //     </div>
  //   </div>
  // );
  return (
    <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition w-full max-w-md mx-auto">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{event.title}</h2>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{event.description}</p>

      <div className="flex items-center gap-3 mb-2">
        <Badge variant="secondary">{event.eventType}</Badge>
        <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
      </div>

      <div className="flex justify-end">
            { <Button onClick={() => navigate(`/description/${event._id}`)}>View Details</Button> }
        {/* <Button onClick={() => navigate(`/description/${event?._id}>View Details</Button>`)} */}
       </div>
    </div>
  );
};

export default Event;
