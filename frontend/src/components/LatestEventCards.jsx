// import React from 'react'
// import { Badge } from "@/components/ui/badge"
// import { Navigate, useNavigate } from 'react-router-dom'

// const LatestEventCards = ({event}) =>{
//     const navigate = useNavigate();
//     console.log("Event Data",event);
//     return (
//         <div  className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
//             <div>
//                 <h1 className='font-medium text-lg'>{event?.title}</h1>
//                 <p className='text-sm text-gray-500'>{event?.description}</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{event?.eventType}</h1>
//                 <p className='text-sm text-gray-600'>{event?.status}</p>
//                 <p className='text-sm text-gray-600'>{event?.time}</p>
//                 {/* <p className='text-sm text-gray-600'>{event?.venue}</p>
//                 <p className='text-sm text-gray-600'>{event?.zoomMeetingId}</p> */}
//             </div>
//             {/* <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Position</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">50,000PKR</Badge>
//             </div> */}
//         </div>
//     )
// }

// export default LatestEventCards;


import React from "react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const LatestEventCards = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/events/${event?.id}`); 
    navigate(`/events/${event._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer transition hover:shadow-2xl hover:border-gray-300"
    >
      {/* Event Title & Description */}
      <div>
        <h1 className="font-semibold text-xl text-gray-800">{event?.title}</h1>
        <p className="text-sm text-gray-600 mt-1">{event?.description}</p>
      </div>

      {/* Event Type & Status */}
      { <div className="mt-3">
        <h2 className="font-bold text-lg text-purple-600">{event?.eventType}</h2>
        {event?.status && <p className="text-sm text-gray-500">{event?.status}</p>}
        {event?.time && <p className="text-sm text-gray-500">{event?.time}</p>}
      </div> }

      {/* Venue & Zoom Details */}
      {(event?.venue || event?.zoomMeetingId) && (
        <div className="mt-2">
          {event?.venue && (
            <p className="text-sm text-gray-700 flex items-center gap-1">
              📍 {event?.venue}
            </p>
          )}
          {event?.zoomMeetingId && (
            <p className="text-sm text-gray-700 flex items-center gap-1">
              🎥 Zoom ID: {event?.zoomMeetingId}
            </p>
            
          )}
        </div>
      )}

      {/* Badges (if needed) */}
       {/* <div className="flex items-center gap-2 mt-4">
         <Badge className="text-blue-700 font-bold" variant="ghost">{event?.paymentType}</Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">{event?.price}</Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">50,000 PKR</Badge> 
      </div>  */}
    </div>
  );
};

export default LatestEventCards;
