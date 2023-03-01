const express = require('express')
const mongo=require("mongoose")
const userRoutes=require('./src/routes/user')

const app=express()

const port= process.env.PORT || 4000

app.use(express.json())
app.use('/api',userRoutes)

app.get("/",(req,res)=>{
    res.send("listo")
})

mongo.connect("mongodb+srv://LMendoza:luismendoza@catando.yafsmbr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log('Conectado a la BD'))
.catch((error)=>console.error(error))
app.listen(port)
console.log('escuchando puesto  '+port)