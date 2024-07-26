const jwt = require("jsonwebtoken");
require("dotenv").config();

// Generate Access Token
const generateAccessToken = (user) => {
    return jwt.sign(
        {
            email: user.email,
            id: user._id, 
            accountType: user.accountType
        },
        process.env.JWT_SECRET,
        { expiresIn: "10h" }
    )
}

// Generate Refresh Token
const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            email: user.email,
            id: user._id, 
            accountType: user.accountType
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    )
}

module.exports = { generateAccessToken, generateRefreshToken };