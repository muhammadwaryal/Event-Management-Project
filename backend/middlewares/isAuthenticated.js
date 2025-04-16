
// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(404).json({
//         message: "User not authenticated.",
//         success: false,
//       });
//     }

//     try {
//       const decode = jwt.verify(token, process.env.SECRET_KEY);
//       req.id = decode.userId; 
//       next();
//     } catch (error) {
//       return res.status(400).json({
//         message: "Invalid or expired token",
//         success: false,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Server error",
//       success: false,
//     });
//   }
// };

// export default isAuthenticated;
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = { id: decoded.userId }; // Attach user object with ID
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or expired token",
        success: false,
      });
    }
  } catch (error) {
    console.error("Authentication Middleware Error:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export default isAuthenticated;
