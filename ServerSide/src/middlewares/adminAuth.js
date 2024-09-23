const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

const adminAuth = async (req, res, next) => {
    try {
        // Get token from headers
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication token is missing"
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // Find the admin by decoded id
        const admin = await Admin.findById(decoded._id);


        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        // Check if the admin is verified
        // if (!admin.isAccountVerified) {
        //     return res.status(403).json({
        //         success: false,
        //         message: "Admin account is not verified"
        //     });
        // }

        // Attach admin to the request object
        req.admin = admin;

        // Continue to the next middleware/controller
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Authentication failed",
            error: error.message
        });
    }
};

module.exports = adminAuth;
