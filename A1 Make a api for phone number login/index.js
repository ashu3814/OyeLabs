const express = require('express')
const app = express()
const port = 3000
const CustomerRoute = require('./src/routes/CustomerRoute')
const mongoose = require('mongoose')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/login', { useNewUrlParser: true })
    .then(_ => console.log(`DB Connected`))
    .catch(err => console.log(err))


app.use('/', CustomerRoute)

app.listen(port, _ => console.log(`server is listening On port ${port}`))