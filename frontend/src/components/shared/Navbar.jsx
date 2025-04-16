
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// // import { Avatar, AvatarImage } from "../ui/avatar";
// // import { Button } from "../ui/button";
// // import { User2, LogOut } from "lucide-react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { setUser } from "@/redux/authSlice";

// // const Navbar = () => {
// //   const user = useSelector((state) => state.auth.User);
// //   // console.log(user);
// //   const dispatch = useDispatch();

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     dispatch(setUser(null));
// //   };

// //   return (
// //       <div className="bg-white mt-4 mx-10 ">

// //       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
// //         <div>
// //           <h1 className="text-2xl font-bold">
// //             Ev<span className="text-[#6A0DAD]">Organise</span>
// //           </h1>
// //         </div>
// //         <div className="flex items-center gap-12">
// //           <ul className="flex font-medium items-center gap-6">
// //             <li>
// //               <Link
// //                 to="/"
// //                 className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
// //               >
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/events"
// //                 className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
// //               >
// //                 Events
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/about"
// //                 className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
// //               >
// //                 Browse
// //               </Link>
// //             </li>
// //           </ul>
// //           {user ? (
// //             <Popover>
// //               <PopoverTrigger asChild>
// //                 <Avatar className="cursor-pointer w-10 h-10 border-2 border-purple-600 shadow-md">
// //                   <AvatarImage
// //                     src={user.avatar || "https://github.com/shadcn.png"}
// //                     alt="User Avatar"
// //                   />
// //                 </Avatar>
// //               </PopoverTrigger>
// //               <PopoverContent className="w-80 bg-white shadow-lg rounded-lg p-4 border">
// //                 <div>
// //                   <div className="flex gap-4 space-y-2">
// //                     <Avatar className="cursor-pointer">
// //                       <AvatarImage
// //                         src={user.avatar || "https://github.com/shadcn.png"}
// //                         alt="User Avatar"
// //                       />
// //                     </Avatar>
// //                     <div>
// //                       <h4 className="font-medium">
// //                         {user?.fullName || "Guest User"}
// //                       </h4>
// //                       <p className="text-sm text-muted-foreground">
// //                         Welcome back!
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="flex flex-col my-2 text-gray-600">
// //                     <div className="flex w-fit items-center gap-2 cursor-pointer">
// //                       <User2 />
// //                       <Button variant="Link">
// //                         <Link
// //                           to="/profile"
// //                           className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
// //                         >
// //                           View Profile
// //                         </Link>
// //                       </Button>
// //                     </div>
// //                     <div
// //                       className="flex w-fit items-center gap-2 cursor-pointer"
// //                       onClick={handleLogout}
// //                     >
// //                       <LogOut />
// //                       <Button
// //                         variant="Link">
// //                           <span className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">
// //       Logout
// //     </span>

// //                                              </Button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </PopoverContent>
// //             </Popover>
// //           ) : (
// //             <div className="flex items-center gap-2">
// //               <Link to="/login">
// //                 <Button variant="outline">Login</Button>
// //               </Link>
// //               <Link to="/signup">
// //                 <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
// //                   SignUp
// //                 </Button>
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Button } from "../ui/button";
// import { User2, LogOut } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { setUser } from "@/redux/authSlice";
// import { toast } from 'sonner'
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";


// const Navbar = () => {
//   const user = useSelector((state) => state.auth.User);
//   const dispatch = useDispatch();
//   const Navigate = useNavigate();

//   // const handleLogout = () => {
//   //   localStorage.removeItem("user");
//   //   dispatch(setUser(null));
//   // };
//   const handleLogout = async () => {
//     try {
//         const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//         if (res.data.success) {
//             dispatch(setUser(null));
//             Navigate("/");
//             console.log(res.data.message);
//             toast.success(res.data.message);
//         }
//     } catch (error) {
//         // console.log(error);
//         // toast.error(error.response.data.message);
//   console.error("Logout error:", error);
//   toast.error(error?.response?.data?.message || "Logout failed!");

//     }
// }

//   return (
//     <div className="bg-white w-full shadow-md border border-gray-200 rounded-lg py-4 px-8">
//       <div className="flex items-center justify-between mx-auto max-w-[1200px] h-16">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Ev<span className="text-[#6A0DAD]">Organise</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-12">
//           {/* Navigation Links */}
//           <ul className="flex font-medium items-center gap-6">
//             <li className="group">
//               <Link to="/" className="relative pb-1 text-black">
//                 Home
//                 <span className="block h-[3px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             </li>
//             <li className="group">
//               <Link to="/events" className="relative pb-1 text-black">
//                 Events
//                 <span className="block h-[3px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             </li>
//             <li className="group">
//               <Link to="/about" className="relative pb-1 text-black">
//                 Browse
//                 <span className="block h-[3px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             </li>
//           </ul>

//           {/* User Profile / Login Options */}
//           {user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer w-12 h-12 border-2 border-purple-600 shadow-md">
//                   <AvatarImage
//                     src={user.profilephoto || "https://github.com/shadcn.png"}
//                     alt="User Avatar"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
//                 <div>
//                   <div className="flex gap-4 space-y-2">
//                     <Avatar className="cursor-pointer w-14 h-14 border border-gray-400">
//                       <AvatarImage
//                         src={user.profilephoto || "https://github.com/shadcn.png"}
//                         alt="User Avatar"
//                       />
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium text-lg">{user?.fullName || "Guest User"}</h4>
//                       <p className="text-sm text-muted-foreground">Welcome back!</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col my-2 text-gray-600">
//                     <Link to="/Profile" className="flex w-fit items-center gap-2 cursor-pointer hover:text-purple-600">
//                       <User2 />
//                       <span className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
//                         View Profile
//                       </span>
//                     </Link>
//                     <div
//                       className="flex w-fit items-center gap-2 cursor-pointer hover:text-red-600"
//                       onClick={handleLogout}
//                     >
//                       <LogOut />
//                       <span className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
//                         Logout
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Link to="/login">
//                 <Button variant="outline" className="border border-gray-400 hover:border-purple-600">Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
//                   SignUp
//                 </Button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { User2, LogOut, LayoutDashboard } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { toast } from 'sonner';
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";


const Navbar = () => {
  const user = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed!");
    }
  };

  return (
    <div className="bg-white w-full shadow-md border border-gray-200 rounded-lg py-4 px-8">
      <div className="flex items-center justify-between mx-auto max-w-[1200px] h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Ev<span className="text-[#6A0DAD]">Organise</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6">
            <li className="group">
              <Link to="/" className="relative pb-1 text-black">
                Home
                <span className="block h-[3px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/events" className="relative pb-1 text-black">
                Events
                <span className="block h-[3px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/about" className="relative pb-1 text-black">
                Browse
                <span className="block h-[3px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-12 h-12 border-2 border-purple-600 shadow-md">
                  <AvatarImage
                    src={user.profilephoto || "https://github.com/shadcn.png"}
                    alt="User Avatar"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer w-14 h-14 border border-purple-800">
                      <AvatarImage
                        src={user.profilephoto || "https://github.com/shadcn.png"}
                        alt="User Avatar"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-lg">{user?.fullName || "Guest User"}</h4>
                      <p className="text-sm text-muted-foreground">Welcome back!</p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <Link to="/Profile" className="flex w-fit items-center gap-2 cursor-pointer hover:text-blue-600">
                      <User2 />
                      <span className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
                        View Profile
                      </span>
                    </Link>
                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-blue-600" onClick={handleLogout}>
                      <LogOut />
                      <span className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
                        Logout
                      </span>
                    </div>
                    <Link to="/AttendeeDashboard" className="flex w-fit items-center gap-2 cursor-pointer hover:text-blue-600 mt-2">
                      <LayoutDashboard />
                      <span className="relative pb-1 text-black after:block after:h-[3px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
                        View Dashboard
                      </span>
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="border border-gray-400 hover:border-purple-600">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  SignUp
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
