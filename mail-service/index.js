const express = require('express')

const app = express()
const port = 3003;

app.get('/', (req,res)=>{
    res.send('mail')
})
app.listen(port)