require('dotenv').config()
const express = require('express')
const cors = require('cors')

//impor routes 
const router = require('./routes/router')

require('./db/connection')


const server = express()
const PORT = process.env.PORT || 4000
server.use(cors())
server.use(express.json())
//use router 
server.use(router)
server.get('/',(req,res)=>{
    res.send("EMS server started")
})
server.listen(PORT,()=>{
    console.log(`EMS Server started at the port${PORT}`);
})