const express = require('express')
const app = express()
const port = 5000

const data = require('./data.json')

const cors = require('cors')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/allData',(req,res)=>{
    res.send(data)
})

app.get('/allData/:id',(req,res)=>{
    const id = req.params.id;
    const item = data.find((pd) => pd.id == id)
    console.log(item)
    res.send( item )
})

app.listen(port,()=>{
    console.log('Hello')
})