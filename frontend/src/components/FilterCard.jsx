import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/eventSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    fitlerData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard
// import React, { useEffect, useState } from 'react';
// import { RadioGroup, RadioGroupItem } from './ui/radio-group';
// import { Label } from './ui/label';
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/eventSlice';

// const filterData = [
//   {
//     filterType: 'Event Type',
//     options: ['Physical', 'Remote'],
//   },
//   {
//     filterType: 'Industry',
//     options: ['Technology', 'Healthcare', 'Education', 'Finance'],
//   },
//   {
//     filterType: 'Date',
//     options: ['Upcoming', 'Past'],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const dispatch = useDispatch();

//   const changeHandler = (value) => {
//     setSelectedValue(value);
//   };

//   useEffect(() => {
//     // Dispatch action to update the searched query in the redux store
//     dispatch(setSearchedQuery(selectedValue));
//   }, [selectedValue, dispatch]);

//   return (
//     <div className="w-full bg-white p-3 rounded-md shadow-md">
//       <h1 className="font-bold text-lg mb-3">Filter Events</h1>
//       <hr className="mt-3" />
      
//       <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//         {filterData.map((data, index) => (
//           <div key={index} className="mt-4">
//             <h2 className="font-semibold text-md">{data.filterType}</h2>
//             {data.options.map((item, idx) => {
//               const itemId = `id${index}-${idx}`;
//               return (
//                 <div key={itemId} className="flex items-center space-x-2 my-2">
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId}>{item}</Label>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// };

// export default FilterCard;
