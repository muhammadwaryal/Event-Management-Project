// import React, { useState } from 'react'
// import Navbar from './shared/Navbar'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Button } from './ui/button'
// import { Contact, Mail, Pen } from 'lucide-react'
// import { Badge } from './ui/badge'
// import { Label } from './ui/label'
// // import AppliedJobTable from './AppliedJobTable'
// import UpdateProfileDialog from './UpdateProfileDialog'
// import { useSelector } from 'react-redux'
// // import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// // const skills = ["Html", "Css", "Javascript", "Reactjs"]
// const isResume = true;

// const Profile = () => {
//     // useGetAppliedJobs();
//     const [open, setOpen] = useState(false);
//     const {User} = useSelector(store=>store.auth);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
//                 <div className='flex justify-between'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24">
//                             <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-medium text-xl'>{User?.name}</h1>
//                             {/* <p>{user?.profile?.bio}</p> */}
//                         </div>
//                     </div>
//                     <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
//                 </div>
//                 <div className='my-5'>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Mail />
//                         <span>{User?.email}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Contact />
//                         <span>{User?.phoneNumber}</span>
//                     </div>
//                 </div>
//                 {/* <div className='my-5'>
//                     <h1>Skills</h1>
//                     <div className='flex items-center gap-1'>
//                         {
//                             user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
//                         }
//                     </div>
//                 </div> */}
//                 <div className='grid w-full max-w-sm items-center gap-1.5'>
//                     <Label className="text-md font-bold">Id Card</Label>
//                     {
//                         // isResume ? <a target='blank' href={User?.idcardphoto} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
//                 {/* <h1 className='font-bold text-lg my-5'>Applied Jobs</h1> */}
//                 {/* Applied Job Table   */}
//                 {/* <AppliedJobTable /> */}
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen}/>
//         </div>
//     )
// }

// export default Profile

import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen, User, ShieldCheck } from 'lucide-react';
import { Label } from './ui/label';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const { User: user } = useSelector(store => store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                {/* Profile Section */}
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage 
                                src={user?.profilephoto || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"} 
                                alt="Profile" 
                            />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl flex items-center gap-2 text-purple-600'>
                                <User className="h-5 w-5 text-gray-600" /> 
                                {user?.fullName || "No Name"}
                            </h1>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} variant="outline">
                        <Pen className="h-5 w-5" />
                    </Button>
                </div>

                {/* Contact Information */}
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail className="text-gray-500" />
                        <span>{user?.email || "No Email Provided"}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact className="text-gray-500" />
                        <span>{user?.phoneNumber || "No Phone Number"}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <ShieldCheck className="text-gray-500" />
                        <span className="capitalize">{user?.role || "No Role Assigned"}</span>
                    </div>
                </div>

                {/* ID Card Section */}
                {/* <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">ID Card</Label>
                    {user?.idcardphoto ? (
                        <a 
                            href={user?.idcardphoto} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-blue-500 hover:underline cursor-pointer'
                        >
                            View ID Card
                        </a>
                    ) : (
                        <span>No ID Card Uploaded</span>
                    )}
                </div> */}
            </div>

            {/* Update Profile Dialog */}
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
