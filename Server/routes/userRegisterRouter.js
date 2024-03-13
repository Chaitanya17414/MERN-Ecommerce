const express = require("express")
const bcrypt = require("bcrypt")
const Joi = require("joi")
const router = express.Router()
const User = require("../Models/userModel")
const getAuthToken = require("../utils/getAuthToken")

router.post("/register",async(req,res) => {

    const schema = Joi.object ({
        name:Joi.string().min(4).max(30).required(),
        email:Joi.string().min(6).max(200).required().email(),
        password:Joi.string().min(6).max(20).required(),
    })

    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send("User already exists,please login...")

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.genSalt(10)
    user.password =  await bcrypt.hash(user.password,salt)

    user = await user.save()
    const token = getAuthToken(user)

    res.send(token)
})

module.exports = router