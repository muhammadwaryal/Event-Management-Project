// import { setAllJobs } from '@/redux/eventSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllJobs();
//     },[])
// }

// export default useGetAllJobs
// import react from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { Event_API_END_POINT } from "@/utils/constant";
// import { setallEvents } from "@/redux/eventSlice";
// import { useDispatch } from "react-redux";



// const useGetAllEvents=()=>{
//     const dispatch =useDispatch();
//     useEffect(()=>{
//         try {
//             const fetchAllEvents=async()=>{

            
//         const res=await axios.get(`${Event_API_END_POINT}/get`,{withCredentials:true});
//         if(res.data.success){
//             dispatch(setallEvents(res.data.events));
//         }

//          }catch (error) {
//             console.log(error);
//                       }}
//         fetchAllEvents();
//     },[])
// }
// export default useGetAllEvents;

// import { useEffect } from "react";
// import axios from "axios";
// import { EVENT_API_END_POINT } from "@/utils/constant";

// import { setAllEvents } from "@/redux/eventSlice"; 

// import { useDispatch } from "react-redux";



// const useGetAllEvents = () => {
//     const dispatch = useDispatch(); // Move useDispatch inside the hook

//     useEffect(() => {
//         const fetchAllEvents = async () => {
//             try {
//                 const res = await axios.get(`${EVENT_API_END_POINT}/get`, { withCredentials: true });
//                 console.log("API Response:", res.data); // Debugging Step 1


//                 if (res.data.success) {
//                     console.log("Events received:", res.data.events); // Debugging Step 2

//                     dispatch(setAllEvents(res.data.events));

//                 }
//                 else {
//                     console.warn("API call successful, but 'success' flag is false.");

//                 }
                

//             } catch (error) {
//                 console.error("Error fetching events:", error);
//             }
//         };

//         fetchAllEvents();
//     }, [dispatch]); 
// };

// export default useGetAllEvents;


// import { useEffect } from "react";
// import axios from "axios";
// import { EVENT_API_END_POINT } from "@/utils/constant";  // Ensure correct variable name
// import { setAllEvents } from "@/redux/eventSlice"; // Fix action name
// import { useDispatch } from "react-redux";

// const useGetAllEvents = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchAllEvents = async () => { // ✅ Define function properly inside useEffect
//             try {
//                 const res = await axios.get(`${EVENT_API_END_POINT}/get`, { withCredentials: true });
//                 console.log("API Response:", res.data);

//                 if (res.data.success) {
//                     console.log("Dispatching events to Redux:", res.data.events);
//                     dispatch(setAllEvents(res.data.events)); // ✅ Correct action name
//                 } else {
//                     console.warn("API request successful but 'success' flag is false.");
//                 }
//             } catch (error) {
//                 console.error("Error fetching events:", error);
//             }
//         };

//         fetchAllEvents(); // ✅ Correct function call

//     }, [dispatch]); // ✅ Add dispatch as dependency
// };

// export default useGetAllEvents;


import { useEffect } from "react";
import axios from "axios";
import { EVENT_API_END_POINT } from "@/utils/constant";
import { setAllEvents } from "@/redux/eventSlice";
import { useDispatch } from "react-redux";

const useGetAllEvents = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllEvents = async () => {
            try {
                const res = await axios.get(`${EVENT_API_END_POINT}/get`, { withCredentials: true });
                // console.log("API Response:", res.data);

                if (res.data.success) {
                    const events = res.data.data; // ✅ Ensure correct data key
                    // console.log("Dispatching events to Redux:", events);

                    if (events) {
                        dispatch(setAllEvents(events));
                    } else {
                        console.warn("Warning: Events data is undefined");
                    }
                } else {
                    console.warn("API request successful but 'success' flag is false.");
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchAllEvents();
    }, [dispatch]);
};

export default useGetAllEvents;
