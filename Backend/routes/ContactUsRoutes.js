const express = require('express')
const asyncHandler = require('express-async-handler')
const contactUsModel = require('../models/ContactUsModel')
const EmailModel = require('../models/EmailsModel')

const contactUsRouter = express.Router()

//Send Message through Contact Us Form
contactUsRouter.post('/contact-us', asyncHandler(async(req, res) => {
    const {fullname, email, phone, message} = req.body

    try {
        const sendMessage = await contactUsModel.create({
            fullname, email, phone, message
        })
        if(sendMessage) {
            res.status(201).json(sendMessage)
        }else{
            res.status(401).json({message: 'Error occurred sending message.'})
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}))

//Subscribe to newsLetter
contactUsRouter.post('/subscribe-news-letter', asyncHandler(async(req, res) => {
    const {email} = req.body;

    try {
        const findEmail = await EmailModel.findOne({email})
        if(findEmail) {
            res.json({message: `Sorry you have already subscribed to this news letter with this email - ${email}`})
        }else{
            const sub = await EmailModel.create({email})
            if(sub){
                res.status(201).json(sub)
            }else{
                res.status(401).json({message: 'Sorry error occurred while subscribing'})
            }
            
        }
        
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}))

module.exports = contactUsRouter;