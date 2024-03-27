const express = require("express")
const app = express()

const saveRoutes = require("./routes/saveRoutes")
const listRoutes = require("./routes/listRoutes")
const authRoutes = require("./routes/authRoutes")
const { default: mongoose } = require("mongoose")

app.use(express.json())

app.use(authRoutes)
app.use(saveRoutes)
app.use(listRoutes)

mongoose
    .connect("mongodb://localhost:27017/bookstore")
    .then(result => {
        app.listen(3001, () => {
            console.log("Server on...")
        })
    })
    .catch((error) => console.log(error));




