const jwt = require("jsonwebtoken")

const secretKey = process.env.JWT_SECRET_KEY || "supertoken433242"
console.log(secretKey)
const getAuthToken= (user) =>{
    const token = jwt.sign ({
        _id: user._id,
        name: user.name,
        email:user.email
    },secretKey)
    return  token
}

module.exports = getAuthToken