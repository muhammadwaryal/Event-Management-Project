import React from 'react'
import LatestEventCards from './LatestEventCards';
import { useSelector } from 'react-redux';
import useGetAllEvents from "../hooks/useGetAllEvents";
const LatestEvents = () =>{
    
    
    useGetAllEvents();
    const events= useSelector(store=>store.event.allEvents);
    // console.log("All Events Data",events);
    return (
        
        <div className='max-w-7xl px-10 mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span> Events</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                  events?.length ===0 ? <span>No Event Available</span>: events?.slice(0,15).map((event) => <LatestEventCards key={event._id} event={event}/>)
                }
            </div>
        </div>
    )
}

export default LatestEvents;