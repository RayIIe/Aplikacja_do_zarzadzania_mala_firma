const express = require("express")
const app = express()
const cors =  require("cors")
const mongoose = require("mongoose")
const PORT = 3001

app.use(cors())
app.use(express())


//connect to mongoose
mongoose.connect("mongodb+srv://daw_dzieniszewski:12we34@cluster0.mn9uw.mongodb.net/firma_edukacyjna")

//require route
app.use(express.json())
app.use("/", require("./backend/routes/userRoute"))

app.listen(PORT, function (){
    console.log(`express  server  is running on port ${PORT}`)
})
