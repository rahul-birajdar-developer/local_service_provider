import asyncHandler from "../utils/asycnHandler.js";

const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "local service provider server run successfully"
    })
})

export { userRegister }