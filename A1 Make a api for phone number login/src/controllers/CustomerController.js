const customerModel = require("../models/Customermodel");
const bcrypt = require ('bcrypt')


// validation for request body
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const CustomerRegister = async function (req,res){
    try {
        let requestBody = req.body

        let { firstName, lastName,  email, password } = requestBody

        if (Object.keys(requestBody).length == 0) {
            res.status(400).send({ status: false, msg: "BAD REQUEST,please provide valid information" })
            return
        }

        if (!isValid(firstName)) {
            res.status(400).send({ status: false, msg: "firstName is required" })
            return
        }

        if (!isValid(lastName)) {
            res.status(400).send({ status: false, msg: "lastName is required" })
            return
        }
    
        if (!isValid(email)) {
            res.status(400).send({ status: false, msg: "email is required" })
            return
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            res.status(400).send({ status: false, msg: "email should be valid email address" })
            return
        }

        if (!isValid(password)) {
            res.status(400).send({ status: false, msg: "password is required" })
            return
        }

        if (password.length < 8 || password.length > 15) {
            return res.status(400).send({ status: false, message: "The length of password should be in between 8-15 characters" })
        }

        const encryptedPassword = await bcrypt.hash(password, 10)

        let customerData = { firstName, lastName, email,  password: encryptedPassword } 


        let isEmailAlreadyUsed = await customerModel.findOne({ email })


        if (isEmailAlreadyUsed) {
            res.status(400).send({ status: false, msg: "email already used" })
        }
        

        else {
            let createCustomer = await customerModel.create(customerData)
            res.status(201).send({ data: createCustomer })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
        
    }
}

module.exports.CustomerRegister = CustomerRegister