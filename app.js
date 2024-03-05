const express = require("express")
const app = express()

const saveRoutes =  require("./routes/saveRoutes")
const listRoutes = require("./routes/listRoutes")

app.use( saveRoutes )
app.use( listRoutes )


app.listen(3001, () => {
    console.log("Server on...")
})
