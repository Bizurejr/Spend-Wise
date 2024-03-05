const express = require('express')
const cors =require('cors');
const {db} = require('./db/db');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 9000;

//middleware

app.use(express.json())
app.use(cors())

app.get('/',(req, res)=>{
    res.send('Hello World')
})

const server = async () => {
    await db(); //database connection
    app.listen(PORT, () =>{
        console.log('listening to port:', PORT)
    })

}

server()