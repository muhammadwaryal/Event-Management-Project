// import React, { useState } from 'react'
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
// import { Label } from './ui/label'
// import { Input } from './ui/input'
// import { Button } from './ui/button'
// import { Loader2 } from 'lucide-react'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const UpdateProfileDialog = ({ open, setOpen }) => {
//     const [loading, setLoading] = useState(false);
//     // const { user } = useSelector(store => store.auth);
//     const {User} = useSelector(store=>store.auth);

//     const [input, setInput] = useState({
//         fullname: User?.fullname || "",
//         email: User?.email || "",
//         phoneNumber: User?.phoneNumber || "",
//         password: User?.password || "",
//         role:User?.role || "",
//         // skills: user?.profile?.skills?.map(skill => skill) || "",
//          file: User?.idcardphoto || "",

//     });
//     const dispatch = useDispatch();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }

//     const fileChangeHandler = (e) => {
//         const file = e.target.files?.[0];
//         setInput({ ...input, file })
//     }

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role",input.role);
//         // formData.append("skills", input.skills);
//         if (input.file) {
//              formData.append("file", input.file);
//          }
//         try {
//             setLoading(true);
//             const res = await axios.post(`${USER_API_END_POINT}/update/profile`, formData, {

//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {

//                 dispatch(setUser(res.data.user));
//                 console.log("Updated User Data:", res.data.user);

//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         } finally{
//             setLoading(false);
//         }
//         setOpen(false);
//         console.log(input);
//     }

//     return (
//         <div>
//             <Dialog open={open}>
//                 <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
//                     <DialogHeader>
//                         <DialogTitle>Update Profile</DialogTitle>
//                     </DialogHeader>
//                     <form onSubmit={submitHandler}>
//                         <div className='grid gap-4 py-4'>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="name" className="text-right">Name</Label>
//                                 <Input
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     value={input.fullname}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="email" className="text-right">Email</Label>
//                                 <Input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     value={input.email}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="number" className="text-right">Number</Label>
//                                 <Input
//                                     id="number"
//                                     name="number"
//                                     value={input.phoneNumber}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="password" className="text-right">Password</Label>
//                                 <Input
//                                     id="password"
//                                     name="password"
//                                     value={input.password}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="role" className="text-right">role</Label>
//                                 <Input
//                                     id="role"
//                                     name="role"
//                                     value={input.role}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="file" className="text-right">ID Card</Label>
//                                 <Input
//                                     id="ID Card"
//                                     name="ID Card"
//                                     type="file"
//                                     accept="application/pdf"
//                                     onChange={fileChangeHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                         </div>
//                         <DialogFooter>
//                             {
//                                 loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
//                             }
//                         </DialogFooter>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     )
// }

// export default UpdateProfileDialog

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import axios from "axios";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { User } = useSelector((store) => store.auth);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const [input, setInput] = useState({
    fullname: User?.fullname || "",
    email: User?.email || "",
    phoneNumber: User?.phoneNumber || "",
    password: User?.password || "",
    role: User?.role || "",
    file: User?.idcardphoto || "",
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/update/profile`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-purple-600 text-2xl font-semibold">Update Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname" className="text-right">
                Name
              </Label>
              <Input
                id="fullname"
                name="fullname"
                type="text"
                value={input.fullname}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={input.email}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phoneNumber" className="text-right">
                Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 relative">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <div className="col-span-3 relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={input.password}
                  onChange={changeEventHandler}
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Input
                id="role"
                name="role"
                type="text"
                value={input.role}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file" className="text-right">
                ID Card
              </Label>
              <Input
                id="file"
                name="file"
                type="file"
                accept="image/jpeg, image/png"
                onChange={fileChangeHandler}
                className="col-span-3"
              />
            </div> */}
          </div>
          <DialogFooter>
            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full my-4 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Update
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
