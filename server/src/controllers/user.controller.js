import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, username, password } = req.body;
    try {
        
    } catch (error) {
        
    }
});

export { registerUser };
