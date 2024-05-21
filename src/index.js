const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const UserController = require('../controllers/UserController')

const app = express()

// use EJS as the view engine
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }))

// static file
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post('/signup', UserController.register)
app.post('/login', UserController.login)




const port = 5000
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})