const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String, 
        required: false,
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    accountVerificationToken: {
        type: String,
        default: null, 
    },
    accountVerificationExpires: {
        type: Date,
        default: null, 
    },
    passwordChangedAt: {
        type: Date,
        default: null, 
    },
    passwordResetToken: {
        type: String,
        default: null, 
    },
    passwordResetExpires: {
        type: Date,
        default: null, 
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
