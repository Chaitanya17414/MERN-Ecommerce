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

//     const schema = Joi.object ({
//         name:Joi.string().min(4).max(30).required(),
//         email:Joi.string().min(6).max(200).required().email(),
//         password:Joi.string().min(6).max(20).required(),
//     })
//     const {updatedUser,userId} = req.body

//     const {error} = schema.validate(updatedUser)
//     if(error) return res.status(400).send(error.details[0].message)
//     let user = await User.findOne({email: updatedUser.email})
//     if(user) return res.status(400).send("Email already in use. Please choose a different email...")

//     user =  User.findByIdAndUpdate(userId,{
//         name: updatedUser.name,
//         email: updatedUser.email,
//         password: updatedUser.password
//     })

//     const salt = await bcrypt.genSalt(10)
//     user.password =  await bcrypt.hash(user.password,salt)

//     user = await user.save()
//     console.log(user)
//     const token = getAuthToken(user)

//     res.send(token)
// })  
router.post("/update", async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(30).required(),
        email: Joi.string().min(6).max(200).required().email(),
        password: Joi.string().min(6).max(20).required(),
    });

    const { updatedUser, userId } = req.body;
    console.log(req.body)
    const { error } = schema.validate(updatedUser);

    if (error) return res.status(400).send(error.details[0].message);

    try {
        console.log(userId)
        let user = await User.findById(userId);
        if (!user) return res.status(404).send("User not found");

        const existingUser = await User.findOne({ email: updatedUser.email });
        if (existingUser) {
            return res.status(400).send("Email already in use. Please choose a different email.");
        }

        user.name = updatedUser.name;
        user.email = updatedUser.email;
        user.password = updatedUser.password;

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = getAuthToken(user);
        res.send(token);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router