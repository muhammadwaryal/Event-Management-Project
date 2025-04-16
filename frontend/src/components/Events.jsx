import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
 import FilterCard from './FilterCard'
//  import Job from './Job';
import Event from "./Event";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

//  const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Events = () => {
     const { allEvents, searchedQuery } = useSelector(store => store.event);
     const [filterEvents, setFilterEvents] = useState(allEvents);
    //  console.log("All Events ",allEvents);


// const {allEvents} = useSelector(store=>store.event);
//  const events= useSelector(store=>store.event.allEvents);
//  console.log("All Events data ",allEvents);

    useEffect(() => {
        if (searchedQuery) {
            const filteredEvents = allEvents.filter((event) => {
                return event.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    event.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    event.eventType.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterEvents(filterEvents)
        } else {
            setFilterEvents(allEvents)
        }
    }, [allEvents, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        { <FilterCard /> }
                    </div>
                    {
                        allEvents.length <= 0 ? <span>Events not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {/* {
                                        allEvents.map((event) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={allEvents?._id}>
                                                <Event event={allEvents} />
                                            </motion.div>
                                        ))
                                    } */}
                                    {allEvents.map((event) => (
                                        <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        key={event._id}
                                        >
                                        <Event event={event} />
                                        </motion.div>
                                    ))}

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}


export default Events;

// import React from 'react'
// import Navbar from './shared/Navbar';
// import FilterCard from './FilterCard';
// import Event from "./Event";
 



// const Events = () => {




// return (
//             <div>
//                 <Navbar />
//                 <div className='max-w-7xl mx-auto mt-5'>
//                     <div className='flex gap-5'>
//                         <div className='w-20%'>
//                             <FilterCard />
//                         </div>
//                         {
//                              filterJobs.length <= 0 ? <span>Job not found</span> : (
//                                 <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                                     <div className='grid grid-cols-3 gap-4'>
//                                         {
//                                             filterJobs.map((job) => (
//                                                 <motion.div
//                                                     initial={{ opacity: 0, x: 100 }}
//                                                     animate={{ opacity: 1, x: 0 }}
//                                                     exit={{ opacity: 0, x: -100 }}
//                                                     transition={{ duration: 0.3 }}
//                                                     key={job?._id}>
//                                                     <Job job={job} />
//                                                 </motion.div>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>
//                             )
//                         }
//                     </div>
//                 </div>
    
    
//             </div>

//                     )}
    
    
    
//     export default Events;
    

// import React, { useEffect, useState } from "react";
// import Navbar from "./shared/Navbar";
// import Event from "./Event";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// // import FilterCard from "./FilterCard";

// const Events = () => {
//   const { allEvents} = useSelector((store) => store.event);
//   console.log("All Events data:", allEvents);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5">
//         <div className="flex gap-5">
//           <div className="w-20%"></div>
//           {allEvents.length === 0 ? (
//             <span>Events not found</span>
//           ) : (
//             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
//               <div className="grid grid-cols-3 gap-4">
//                 {allEvents.map((event) => (
//                   <motion.div
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                     key={allEvents._id} // ✅ Fixed key issue
//                   >
//                     <Event event={allEvents} /> {/* ✅ Passing correct data */}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;
