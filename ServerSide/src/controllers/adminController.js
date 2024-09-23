const { hashPassword, comparePassword } = require('../helpers/authHelper');
const { generateToken } = require('../utils/genrateToken');
const Admin = require('../models/adminModel');

// Register admin
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, contact } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required"
            });
        }

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(409).json({
                success: false,
                message: "Admin already registered. Please login."
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create new admin
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
            contact
        });

        const savedAdmin = await newAdmin.save();
        res.status(201).json({
            success: true,
            message: "Admin registered successfully",
            admin: {
                name: savedAdmin.name,
                email: savedAdmin.email,
                contact: savedAdmin.contact
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Admin registration failed",
            error: error.message
        });
    }
};

// Login admin
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Check if admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        // Compare password
        const isPasswordMatch = await comparePassword(password, admin.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        // Generate token
        const token = generateToken(admin._id);

        res.status(200).json({
            success: true,
            message: "Login successful",
            admin: {
                name: admin.name,
                adminId: admin._id,
                contact: admin.contact
            },
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Admin login failed",
            error: error.message
        });
    }
};

module.exports = { registerAdmin, loginAdmin };
