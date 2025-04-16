

// // import { NavLink } from "react-router-dom";
// // import { LayoutDashboard, Search, CalendarCheck, Settings } from "lucide-react";

// // const Sidebar = () => {
// //   return (
// //     <div className="h-screen w-64 bg-gray-900 text-white p-4">
// //       <h2 className="text-xl font-bold mb-6">Event Manager</h2>
// //       <ul className="space-y-4">
// //         <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <LayoutDashboard size={20} />
// //           <NavLink to="/dashboard" className="text-white">Dashboard</NavLink>
// //         </li>
// //         <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <Search size={20} />
// //           <NavLink to="/search-events" className="text-white">Search Events</NavLink>
// //         </li>
// //         <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <CalendarCheck size={20} />
// //           <NavLink to="/registered-events" className="text-white">Registered Events</NavLink>
// //         </li>
// //         <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <Settings size={20} />
// //           <NavLink to="/settings" className="text-white">Settings</NavLink>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// // import { NavLink } from "react-router-dom";
// // import { LayoutDashboard, Search, CalendarCheck, Settings } from "lucide-react";

// // const Sidebar = () => {
// //   return (
// //     <div className="h-screen w-64 bg-gray-900 text-white p-4">
// //       <h2 className="text-xl font-bold mb-6">Event Manager</h2>
// //       <ul className="space-y-4">
// //         <NavLink to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <LayoutDashboard size={20} />
// //           <span>Dashboard</span>
// //         </NavLink>
// //         <NavLink to="/search-events" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <Search size={20} />
// //           <span>Search Events</span>
// //         </NavLink>
// //         <NavLink to="/registered-events" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <CalendarCheck size={20} />
// //           <span>Registered Events</span>
// //         </NavLink>
// //         <NavLink to="/settings" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
// //           <Settings size={20} />
// //           <span>Settings</span>
// //         </NavLink>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;


// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
// import { useContext, createContext, useState } from "react"

// const SidebarContext = createContext()

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true)
  
//   return (
//     <aside className="h-screen">
//       <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <img
//             src="https://img.logoipsum.com/243.svg"
//             className={`overflow-hidden transition-all ${
//               expanded ? "w-32" : "w-0"
//             }`}
//             alt=""
//           />
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//         </div>

//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>

//         <div className="border-t flex p-3">
//           <img
//             src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
//             alt=""
//             className="w-10 h-10 rounded-md"
//           />
//           <div
//             className={`
//               flex justify-between items-center
//               overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
//           `}
//           >
//             <div className="leading-4">
//               <h4 className="font-semibold">John Doe</h4>
//               <span className="text-xs text-gray-600">johndoe@gmail.com</span>
//             </div>
//             <MoreVertical size={20} />
//           </div>
//         </div>
//       </nav>
//     </aside>
//   )
// }

// export function SidebarItem({ icon, text, active, alert }) {
//   const { expanded } = useContext(SidebarContext)
  
//   return (
//     <li
//       className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${
//           active
//             ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//             : "hover:bg-indigo-50 text-gray-600"
//         }
//     `}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all ${
//           expanded ? "w-52 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>
//       {alert && (
//         <div
//           className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//             expanded ? "" : "top-2"
//           }`}
//         />
//       )}

//       {!expanded && (
//         <div
//           className={`
//           absolute left-full rounded-md px-2 py-1 ml-6
//           bg-indigo-100 text-indigo-800 text-sm
//           invisible opacity-20 -translate-x-3 transition-all
//           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//       `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   )
// }

import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/search-events",
    name: "Search Events",
    icon: <BiSearch />,
  },
  {
    path: "/register-events",
    name: "Register Events",
    icon: <BsCalendarCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <FaCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile",
        icon: <FaUser />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: { width: 0, padding: 0, transition: { duration: 0.2 } },
    show: { width: "140px", padding: "5px 15px", transition: { duration: 0.2 } },
  };

  const showAnimation = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.5 } },
    show: { opacity: 1, width: "auto", transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{ width: isOpen ? "200px" : "45px", transition: { duration: 0.5, type: "spring", damping: 10 } }}
          className="sidebar"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1 variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="logo">
                  EvOrganize
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return <SidebarMenu setIsOpen={setIsOpen} route={route} showAnimation={showAnimation} isOpen={isOpen} />;
              }

              return (
                <NavLink to={route.path} key={index} className="link" activeClassName="active">
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="link_text">
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
