const express = require('express')

const app = express()
const port = 3002;

app.get('/', (req,res)=>{
    res.send('reg')
})
app.listen(port)