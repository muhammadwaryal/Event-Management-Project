// // const Dashboard = () => {
// //           return <div className="p-6 text-gray-900">Dashboard Page</div>;
// //         };
// //         export default Dashboard;
        

// import React from 'react';
// import {
//   BsFillClipboardCheckFill,
//   BsCalendarEvent,
//   BsBellFill,
//   BsChatDotsFill,
//   BsGrid1X2Fill,
//   BsEnvelopeCheckFill,
//   BsFillCameraVideoFill,
//   BsFillGearFill,
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
//   BsSearch,
//   BsJustify,
// } from 'react-icons/bs';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from 'recharts';

// const AttendeeDashboard = () => {
//   const data = [
//     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
//   ];

//   const [openSidebar, setOpenSidebar] = React.useState(false);

//   const toggleSidebar = () => {
//     setOpenSidebar(!openSidebar);
//   };

//   return (
//     <div className="flex h-screen bg-gray-800 text-gray-300">
//       <aside className={`bg-gray-700 w-64 p-5 transition-transform ${openSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="flex justify-between items-center mb-5">
//           <div className="text-lg font-bold flex items-center">
//             <BsCalendarEvent className="text-xl mr-2" /> EVENTS
//           </div>
//           <span className="cursor-pointer" onClick={toggleSidebar}>X</span>
//         </div>
//         <ul className="space-y-2">
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsGrid1X2Fill className="mr-2" /> Dashboard</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsCalendarEvent className="mr-2" /> Browse and select</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsFillClipboardCheckFill className="mr-2" /> Register for Events</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsEnvelopeCheckFill className="mr-2" /> Confirmation & Links</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsFillCameraVideoFill className="mr-2" /> Join Event</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsBellFill className="mr-2" /> Notifications</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsChatDotsFill className="mr-2" /> Give Feedback</a></li>
//           <li><a href="#" className="flex items-center p-2 hover:bg-gray-600"><BsFillGearFill className="mr-2" /> Settings</a></li>
//         </ul>
//       </aside>

//       <div className="flex-1 flex flex-col">
//         <header className="bg-gray-900 p-4 flex justify-between items-center">
//           <div className="menu-icon cursor-pointer" onClick={toggleSidebar}>
//             <BsJustify className="text-xl" />
//           </div>
//           <div className="relative flex items-center bg-gray-700 rounded-md p-2">
//             <input type="text" placeholder="Search" className="bg-transparent border-none text-gray-300 focus:outline-none" />
//             <BsSearch className="absolute left-2 text-gray-400" />
//           </div>
//           <div className="flex space-x-4">
//             <BsFillBellFill className="text-xl cursor-pointer" />
//             <BsFillEnvelopeFill className="text-xl cursor-pointer" />
//             <BsPersonCircle className="text-xl cursor-pointer" />
//           </div>
//         </header>

//         <main className="flex-1 p-5 overflow-auto">
//           <h3 className="text-2xl font-bold mb-5">DASHBOARD</h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
//             <div className="bg-blue-600 p-4 rounded-md flex flex-col justify-between">
//               <h3>REGISTERED EVENTS</h3>
//               <h1 className="text-4xl">5</h1>
//               <BsFillClipboardCheckFill className="text-3xl" />
//             </div>
//             <div className="bg-orange-600 p-4 rounded-md flex flex-col justify-between">
//               <h3>UPCOMING EVENTS</h3>
//               <h1 className="text-4xl">3</h1>
//               <BsCalendarEvent className="text-3xl" />
//             </div>
//             <div className="bg-green-600 p-4 rounded-md flex flex-col justify-between">
//               <h3>NOTIFICATIONS</h3>
//               <h1 className="text-4xl">12</h1>
//               <BsBellFill className="text-3xl" />
//             </div>
//             <div className="bg-red-600 p-4 rounded-md flex flex-col justify-between">
//               <h3>FEEDBACK GIVEN</h3>
//               <h1 className="text-4xl">7</h1>
//               <BsChatDotsFill className="text-3xl" />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={data}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="pv" fill="#8884d8" />
//                   <Bar dataKey="uv" fill="#82ca9d" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={data}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AttendeeDashboard;

import React from 'react';
import {
  BsFillClipboardCheckFill,
  BsCalendarEvent,
  BsBellFill,
  BsChatDotsFill,
  BsGrid1X2Fill,
  BsEnvelopeCheckFill,
  BsFillCameraVideoFill,
  BsFillGearFill,
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

const AttendeeDashboard = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const [openSidebar, setOpenSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="flex h-screen bg-white text-gray-800">
      <aside className={`bg-gray-200 w-64 p-5 transition-transform ${openSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-5">
          <div className="text-lg font-bold flex items-center">
            <BsCalendarEvent className="text-xl mr-2" /> EVENTS
          </div>
          <span className="cursor-pointer" onClick={toggleSidebar}>X</span>
        </div>
        <ul className="space-y-2">
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsGrid1X2Fill className="mr-2" /> Dashboard</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsCalendarEvent className="mr-2" /> Browse and select</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsFillClipboardCheckFill className="mr-2" /> Register for Events</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsEnvelopeCheckFill className="mr-2" /> Confirmation & Links</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsFillCameraVideoFill className="mr-2" /> Join Event</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsBellFill className="mr-2" /> Notifications</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsChatDotsFill className="mr-2" /> Give Feedback</a></li>
          <li><a href="#" className="flex items-center p-2 hover:bg-gray-300"><BsFillGearFill className="mr-2" /> Settings</a></li>
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-gray-100 p-4 flex justify-between items-center">
          <div className="menu-icon cursor-pointer" onClick={toggleSidebar}>
            <BsJustify className="text-xl" />
          </div>
          <div className="relative flex items-center bg-gray-200 rounded-md p-2">
            <BsSearch className="absolute left-2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none text-gray-800 focus:outline-none pl-8"
            />
          </div>
          <div className="flex space-x-4">
            <BsFillBellFill className="text-xl cursor-pointer" />
            <BsFillEnvelopeFill className="text-xl cursor-pointer" />
            <BsPersonCircle className="text-xl cursor-pointer" />
          </div>
        </header>

        <main className="flex-1 p-5 overflow-auto">
          <h3 className="text-2xl font-bold mb-5"> ATTENDEE DASHBOARD</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
            <div className="bg-blue-500 text-white p-4 rounded-md flex flex-col justify-between">
              <h3>REGISTERED EVENTS</h3>
              <h1 className="text-4xl">5</h1>
              <BsFillClipboardCheckFill className="text-3xl" />
            </div>
            <div className="bg-orange-500 text-white p-4 rounded-md flex flex-col justify-between">
              <h3>UPCOMING EVENTS</h3>
              <h1 className="text-4xl">3</h1>
              <BsCalendarEvent className="text-3xl" />
            </div>
            <div className="bg-green-500 text-white p-4 rounded-md flex flex-col justify-between">
              <h3>NOTIFICATIONS</h3>
              <h1 className="text-4xl">12</h1>
              <BsBellFill className="text-3xl" />
            </div>
            <div className="bg-red-500 text-white p-4 rounded-md flex flex-col justify-between">
              <h3>FEEDBACK GIVEN</h3>
              <h1 className="text-4xl">7</h1>
              <BsChatDotsFill className="text-3xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AttendeeDashboard;
