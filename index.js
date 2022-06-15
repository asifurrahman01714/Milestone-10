// Creating a express function
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    const fruit = {
        product:'Banana',
        price:10
    }
    res.send(fruit)
})

app.get('/fruits/banana', (req, res)=>{
    res.send({product:'banana', quantity:100, price:1000})
})
  
app.listen(3000, ()=> console.log("Yay! Listening to port 3000"))