const express = require("express")

const app=express()

const cors=require("cors")

const todoRoutes=require("./routes/todoRoutes")

app.use("/api/todos",todoRoutes)

module.exports=app;