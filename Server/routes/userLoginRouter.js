const express = require("express")
const bcrypt = require("bcrypt")
const Joi = require("joi")
const router = express.Router()
const User = require("../Models/userModel")
const getAuthToken = require("../utils/getAuthToken")

router.post("/login",async(req,res) => {

    const schema = Joi.object ({
        email:Joi.string().min(6).max(200).required().email(),
        password:Joi.string().min(6).max(20).required(),
    })

    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send("Invalid Email...")

    const isValid = await bcrypt.compare(req.body.password,user.password)
    if(!isValid) return res.status(400).send("Invalid Password...")

    const token = getAuthToken(user)

    res.send(token)
})

module.exports = router