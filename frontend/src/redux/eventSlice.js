// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name:"job",
//     initialState:{
//         allJobs:[],
//         allAdminJobs:[],
//         singleJob:null, 
//         searchJobByText:"",
//         allAppliedJobs:[],
//         searchedQuery:"",
//     },
//     reducers:{
//         // actions
//         setAllJobs:(state,action) => {
//             state.allJobs = action.payload;
//         },
//         setSingleJob:(state,action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs:(state,action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText:(state,action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs:(state,action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery:(state,action) => {
//             state.searchedQuery = action.payload;
//         }
//     }
// });
// export const {
//     setAllJobs, 
//     setSingleJob, 
//     setAllAdminJobs,
//     setSearchJobByText, 
//     setAllAppliedJobs,
//     setSearchedQuery
// } = jobSlice.actions;
// export default jobSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
name:"event",
initialState:{
          allEvents:[],
          singleEvent:null, 
          searchedQuery:"",
},

reducers:{
          setAllEvents:(state, action) => {
                    // console.log("Setting events in Redux:", action.payload);

                    state.allEvents = action.payload;
              
},
setSingleEvent:(state,action) => {
                      state.singleEvent = action.payload;
                },
                setSearchedQuery:(state,action) => {
                                 state.searchedQuery = action.payload;
                             }
}          

});
export const { setAllEvents,setSingleEvent,setSearchedQuery } = eventSlice.actions;

export default eventSlice.reducer;