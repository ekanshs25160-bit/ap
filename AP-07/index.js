const express = require('express')
const {users,post} = require('./data')
const app = express()

app.get('/users',(req,res)=>{
    res.status(200).send('Heyy')
})

app.get('/users/:id',(req,res)=>{

})

app.get('/posts',(req,res)=>{
    
})

app.listen(3000)