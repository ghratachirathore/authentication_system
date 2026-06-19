const jwt = require("jsonwebtoken")

const protect = async (req, res, next) => {

    try {
        const token =
        req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user = decodedToken
        next()
    }

    catch(error){
        return res.status(401).json({
            message: "Invalid token"
        })
    }

}

module.exports = protect