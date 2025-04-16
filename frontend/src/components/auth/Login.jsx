// import React, { useState,useEffect } from 'react'
// import axios from 'axios';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label'
// import { Input } from '../ui/input';
// import { RadioGroup } from "@/components/ui/radio-group"
// import { Button } from '../ui/button';
// import { Link, useNavigate } from 'react-router-dom';
// import { Loader2, Phone } from 'lucide-react';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoading, setUser } from '@/redux/authSlice';




// function Login() {
//   const [input, setInput] = useState({
//     email:"",
//     password:"",
//     role:"",
//   });

//   const {loading,user} = useSelector(store=>store.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const changeEventHandler = (e) =>{
//     setInput({...input, [e.target.name]:e.target.value});
//   }

//   const submitHandler = async(e) =>{
//     e.preventDefault();
//     try{
//       dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/login`,input, {
//         headers:{
//           "Content-Type":"application/json"
//         },
//         withCredentials:true,
//       });
//       if(res.data.success){
//         dispatch(setUser(res.data.user))
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     }catch(error){
//       console.log(error);
//       toast.error(error.response.data.message);
//     }finally{
//       dispatch(setLoading(false));
//     }
//   }
//   useEffect(()=>{
//     if(user){
//         navigate("/");
//     }
// },[])

//   return (
//     <div>
//       <Navbar/>
//       <div className='flex items-center justify-center max-w-7xl mx-auto'>
//         <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
//           <h1 className='font-bold text-xl mb-5'>Login</h1>
//           <div className='my-2'>
//             <Label>Email</Label>
//             <Input
//             type="email"
//             value={input.email}
//             name="email"
//             onChange={changeEventHandler}
//             placeholder="Enter Your Email"
//             />
//           </div>
//           <div className='my-2'>
//             <Label>Password</Label>
//             <Input
//             type="password"
//             value={input.password}
//             name="password"
//             onChange={changeEventHandler}
//             placeholder="Enter Your Password"
//             />
//           </div>
//           <div className='flex items-center justify-between'>
//             <RadioGroup className='flex items-center gap-4 my-5'>
//               <div className="flex items-center space-x-2">
//                 <Input 
//                 type="radio"
//                 name="role"
//                 value="student"
//                 checked={input.role === 'student'}
//                 onChange={changeEventHandler}
//                 className="cursor-pointer"
//                 />
//                 <Label htmlFor="option-one">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//               <Input 
//                 type="radio"
//                 name="role"
//                 value="organizer"
//                 checked={input.role === 'organizer'}
//                 onChange={changeEventHandler}
//                 className="cursor-pointer"
//                 />
//                 <Label htmlFor="option-two">organizer</Label>
//               </div>
//             </RadioGroup>
//           </div>
//           {
//             loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please Wait! </Button>:<Button type="submit" className="w-full my-4">Login</Button>
//           }
          
//           <span className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
//         </form>
//       </div>
//     </div>

//   )
// }

// export default Login

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "@/components/ui/radio-group";
// import { Button } from "../ui/button";
// import { Link, useNavigate } from "react-router-dom";
// import { Loader2 } from "lucide-react";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from "@/redux/authSlice";

// function Login() {
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });

//   const { loading, user } = useSelector((store) => store.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(res.data.user));
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form
//           onSubmit={submitHandler}
//           className="w-full sm:w-[400px] bg-white shadow-lg border border-gray-200 rounded-xl p-6 my-12 transition-all hover:shadow-2xl"
//         >
//           <h1 className="font-bold text-2xl text-center text-purple-700 mb-6">
//             Login
//           </h1>

//           {/* Email Field */}
//           <div className="my-3">
//             <Label className="text-gray-700">Email</Label>
//             <Input
//               type="email"
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//               placeholder="Enter Your Email"
//               className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="my-3">
//             <Label className="text-gray-700">Password</Label>
//             <Input
//               type="password"
//               value={input.password}
//               name="password"
//               onChange={changeEventHandler}
//               placeholder="Enter Your Password"
//               className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
//             />
//           </div>

//           {/* Role Selection */}
//           <div className="flex items-center justify-between mt-4">
//             <RadioGroup className="flex items-center gap-6">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === "student"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer accent-purple-600"
//                 />
//                 <Label className="text-gray-700">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="organizer"
//                   checked={input.role === "organizer"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer accent-purple-600"
//                 />
//                 <Label className="text-gray-700">Organizer</Label>
//               </div>
//             </RadioGroup>
//           </div>

//           {/* Submit Button */}
//           {loading ? (
//             <Button className="w-full my-5 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition-all">
//               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//               Please Wait!
//             </Button>
//           ) : (
//             <Button
//               type="submit"
//               className="w-full my-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all shadow-lg hover:shadow-xl"
//             >
//               Login
//             </Button>
//           )}

//           {/* Signup Link */}
//           <p className="text-sm text-center text-gray-600">
//             Don't have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-purple-600 hover:underline font-medium"
//             >
//               Signup
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-[400px] bg-white shadow-lg border border-gray-200 rounded-xl p-6 my-12 transition-all hover:shadow-2xl"
        >
          <h1 className="font-bold text-2xl text-center text-purple-700 mb-6">
            Login
          </h1>

          {/* Email Field */}
          <div className="my-3">
            <Label className="text-gray-700">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter Your Email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="my-3 relative">
            <Label className="text-gray-700">Password</Label>
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter Your Password"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Role Selection */}
          <div className="flex items-center justify-between mt-4">
            <RadioGroup className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer accent-purple-600"
                />
                <Label className="text-gray-700">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="organizer"
                  checked={input.role === "organizer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer accent-purple-600"
                />
                <Label className="text-gray-700">Organizer</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          {loading ? (
            <Button className="w-full my-5 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition-all">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Please Wait!
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              Login
            </Button>
          )}

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 hover:underline font-medium"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;