const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const existedUser = await User.findOne({ email })

        if(existedUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "User registered successfully"
        })

    }

    catch(error){

        return res.status(500).json({
            message: error.message
        })

    }

}

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body

        if(!email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )

        if(!isPasswordCorrect){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        return res.status(200).json({
            message: "Login successful",
            token
        })

    }

    catch(error){

        return res.status(500).json({
            message: error.message
        })

    }

}

module.exports = {
    registerUser,
    loginUser
}