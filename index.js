// Creating a express function
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
// parse application/json
app.use(bodyParser.json())

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

const users = [
    {name:"Asif", roll:10},
    {name:"Arif", roll:11},
    {name:"ahmad", roll:12},
    {name:"sakib", roll:13}
]
app.get('/users/:id',(req,res)=>{
    const rollNumber = req.params.id;
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        const elementRoll = element.roll;
        if (elementRoll == rollNumber) {
            console.log(element);
            res.send(element);
        }
    }
})
app.get("/users",(req, res)=>{
    res.send(users);
})

// Post method
app.post("/addUser", (req, res)=>{
    res.send("Recieved post request. You can now post your post");
})
  
app.listen(3000, ()=> console.log("Yay! Listening to port 3000"))