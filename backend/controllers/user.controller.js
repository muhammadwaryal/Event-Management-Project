import  {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";


export const register = async (req, res) => {
          try {
            let {
              fullname,
              email,
              password,
              phoneNumber,  // Added phoneNumber in destructuring
              role,
              rollNo,
              idcardphoto,
              profilephoto,
            } = req.body;
        console.log([req.body,"console.log(req.body);",req.file]);
      
        

            // Check for missing required fields
            if (!fullname) {
              return res.status(400).json({
                message: "fullname is  missing",
                success: false,
              });
            }
            if (!email) {
              return res.status(400).json({
                message: "email is  missing",
                success: false,
              });
            }
            if (!password) {
              return res.status(400).json({
                message: "password is  missing",
                success: false,
              });
            }
            if (!phoneNumber) {
              return res.status(400).json({
                message: "phoneNumber is  missing",
                success: false,
              });
            }
            if ( !role) {
              return res.status(400).json({
                message: "role is  missing",
                success: false,
              });
            }
            const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content,{
        folder: "profile_photos", // Save under 'profile_photos' folder in Cloudinary
  resource_type: "image",
});

 // Get the uploaded image URL
  profilephoto = cloudResponse.secure_url; // Get the uploaded image URL

  

        
            // Check if the user already exists
            let user = await User.findOne({ email });
            if (user) {
              return res.status(400).json({
                message: "User already exists with this email.",
                success: false,
              });
            }
        
            // Hash the password
            const hashedpassword = await bcrypt.hash(password, 10);
        
            // Create a new user
            const userData = await User.create({
              fullName : fullname,
              email,
              password: hashedpassword,
              phoneNumber,
              role,
              rollNo,         // Optional fields
              idcardphoto,   
              profilephoto,
            });
        
            console.log([userData, "userData"]);
            return res.status(201).json({
              message: "Account created successfully",
              success: true,
            });
          } catch (error) {
            console.log(error);
            return res.status(500).json({
              message: `Registration failed. ${error.message}`,
              success: false,
            });
           }
        };

// export const register = async (req, res) => {
//   try {
//     let {
//       fullname,
//       email,
//       password,
//       phoneNumber,
//       role,
//       rollNo,
//     } = req.body;

//     console.log(req.body, "console.log(req.body);", req.files);

//     // Check for missing required fields
//     if (!fullname || !email || !password || !phoneNumber || !role) {
//       return res.status(400).json({
//         message: "Some required fields are missing",
//         success: false,
//       });
//     }

//     // Check if the user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         message: "User already exists with this email.",
//         success: false,
//       });
//     }

//     // Hash the password
//     const hashedpassword = await bcrypt.hash(password, 10);

//     let profilephoto = "";
//     let idcardphoto = "";

//     // Handling Profile Photo Upload
//     if (req.files?.profilephoto) {
//       const profileFileUri = getDataUri(req.files.profilephoto[0]);
//       const profileUploadResponse = await cloudinary.uploader.upload(profileFileUri.content, {
//         folder: "profile_photos",
//         resource_type: "image",
//       });
//       profilephoto = profileUploadResponse.secure_url;
//     }

//     // Handling ID Card Photo Upload
//     if (req.files?.idcardphoto) {
//       const idCardFileUri = getDataUri(req.files.idcardphoto[0]);
//       const idCardUploadResponse = await cloudinary.uploader.upload(idCardFileUri.content, {
//         folder: "idcard_photos",
//         resource_type: "image",
//       });
//       idcardphoto = idCardUploadResponse.secure_url;
//     }

//     // Create a new user
//     const userData = await User.create({
//       fullName: fullname,
//       email,
//       password: hashedpassword,
//       phoneNumber,
//       role,
//       rollNo,
//       idcardphoto,
//       profilephoto,
//     });

//     console.log(userData, "userData");
//     return res.status(201).json({
//       message: "Account created successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: `Registration failed. ${error.message}`,
//       success: false,
//     });
//   }
// };


export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    const ispasswordmatched = await bcrypt.compare(password, user.password);
    if (!ispasswordmatched) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    //check role
    if (role !== user.role) {
      return res.status(400).json({
        message: "user doesnot exist with current role .",
        success: false,
      });
    }
    // now store the token
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      role: user.role,
      rollno: user.rollNo,
      profilephoto: user.profilephoto,
      idcardphoto: user.idcardphoto,
    };
    // storing token in cookie
    return res
      .status(200)
      .cookie("token", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
          httpsOnly: true,
          sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged Out Successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

  export const getProfileById = async (req, res) => {
          try {
            const user = await User.findById(req.params.id);  // Accessing userId from URL
            if (!user) {
              return res.status(404).json({ message: 'User not found',
                success:false
               });
            }
            res.status(200).json({
                    success:true,
                    user,
            });  // Respond with the user profile
          } catch (error) {
            res.status(500).json({ error: 'Cannot fetch profile' });
          }
        };
        
        export const updateProfile = async (req, res) => {
          try {
            const { fullName, email, phoneNumber, rollNo, idcardphoto, profilephoto } = req.body;
            console.log(fullName,email,password,phoneNumber,idcardphoto);


            const userId = req.user.id; // Assuming authentication middleware attaches user info
            const file = req.file;
            const fileUri =getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        
            // Find user by authenticated ID
            const user = await User.findById(userId);
            if (!user) {
              return res.status(404).json({
                message: "User not found",
                success: false,
              });
            }
        
            // Check if email is being changed and already exists for another user
            if (email && email !== user.email) {
              const userWithEmail = await User.findOne({ email });
              if (userWithEmail) {
                return res.status(400).json({
                  message: "Email is already in use by another user.",
                  success: false,
                });
              }
            }
        
            // Update fields if provided
            if (fullName) user.fullName = fullName;
            if (email) user.email = email;
            if (phoneNumber) user.phoneNumber = phoneNumber;
            if (rollNo) user.rollNo = rollNo;
            if (profilephoto) user.profilephoto = profilephoto;
            if (idcardphoto) user.idcardphoto = idcardphoto;
        

            if(cloudResponse){
              user.idcardphoto = cloudResponse?.secure_url;
              

            }
            // Save the updated user information
            await user.save();
        
            return res.status(200).json({
              message: "Profile updated successfully",
              user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
                rollNo: user.rollNo,
                profilephoto: user.profilephoto,
                idcardphoto: user.idcardphoto,
              },
              success: true,
            });
          } catch (error) {
            console.error("Error updating profile:", error);
            return res.status(500).json({
              message: "An error occurred while updating the profile. Please try again later.",
              success: false,
            });
          }
        };
                

        export const updateProfileWithoutId = async (req, res) => {
          try {
            const { fullname, email, phoneNumber, rollNo, idcardphoto, profilephoto } = req.body;
            const userId = req.user.id; // Assuming authentication middleware attaches user info
        
            // Find user by authenticated ID
            const user = await User.findById(userId);
            if (!user) {
              return res.status(404).json({
                message: "User not found",
                success: false,
              });
            }
        
            // Check if email is being changed and already exists for another user
            if (email && email !== user.email) {
              const userWithEmail = await User.findOne({ email });
              if (userWithEmail) {
                return res.status(400).json({
                  message: "Email is already in use by another user.",
                  success: false,
                });
              }
            }
        
            // Update fields if provided
            if (fullname) user.fullName = fullname;
            if (email) user.email = email;
            if (phoneNumber) user.phoneNumber = phoneNumber;
            if (rollNo) user.rollNo = rollNo;
            if (profilephoto) user.profilephoto = profilephoto;
            if (idcardphoto) user.idcardphoto = idcardphoto;
        
            // Save the updated user information
            await user.save();
        
            return res.status(200).json({
              message: "Profile updated successfully",
              user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
                rollNo: user.rollNo,
                profilephoto: user.profilephoto,
                idcardphoto: user.idcardphoto,
              },
              success: true,
            });
          } catch (error) {
            console.error("Error updating profile:", error);
            return res.status(500).json({
              message: "An error occurred while updating the profile. Please try again later.",
              success: false,
            });
          }
        };
        // export const updateProfileWithoutId = async (req, res) => {
        //   try {
        //     const { fullName, email, phoneNumber, rollNo } = req.body;
        
        //     const userId = req.user.id; // Assuming authentication middleware attaches user info
        
        //     const user = await User.findById(userId);
        //     if (!user) {
        //       return res.status(404).json({
        //         message: "User not found",
        //         success: false,
        //       });
        //     }
        
        //     // Check if email is being changed and already exists for another user
        //     if (email && email !== user.email) {
        //       const userWithEmail = await User.findOne({ email });
        //       if (userWithEmail) {
        //         return res.status(400).json({
        //           message: "Email is already in use by another user.",
        //           success: false,
        //         });
        //       }
        //     }
        
        //     let profilephoto = user.profilephoto;
        //     let idcardphoto = user.idcardphoto;
        
        //     // Handling Profile Photo Upload
        //     if (req.files?.profilephoto) {
        //       const profileFileUri = getDataUri(req.files.profilephoto[0]);
        //       const profileUploadResponse = await cloudinary.uploader.upload(profileFileUri.content);
        //       profilephoto = profileUploadResponse.secure_url;
        //     }
        
        //     // Handling ID Card Photo Upload
        //     if (req.files?.idcardphoto) {
        //       const idCardFileUri = getDataUri(req.files.idcardphoto[0]);
        //       const idCardUploadResponse = await cloudinary.uploader.upload(idCardFileUri.content);
        //       idcardphoto = idCardUploadResponse.secure_url;
        //     }
        
        //     // Update fields if provided
        //     if (fullName) user.fullName = fullName;
        //     if (email) user.email = email;
        //     if (phoneNumber) user.phoneNumber = phoneNumber;
        //     if (rollNo) user.rollNo = rollNo;
        //     user.profilephoto = profilephoto;
        //     user.idcardphoto = idcardphoto;
        
        //     // Save the updated user information
        //     await user.save();
        
        //     return res.status(200).json({
        //       message: "Profile updated successfully",
        //       user,
        //       success: true,
        //     });
        //   } catch (error) {
        //     console.error("Error updating profile:", error);
        //     return res.status(500).json({
        //       message: "An error occurred while updating the profile. Please try again later.",
        //       success: false,
        //     });
        //   }
        // };
        