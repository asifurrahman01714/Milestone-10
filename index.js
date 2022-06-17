// Creating a express function
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
// parse application/json
app.use(bodyParser.json())





// MongoDb connection
const mongoDbUserPassword = 'wLLj-UL-LrC7LES';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nodeMongoBasic:"+mongoDbUserPassword+"@atlascluster.eb7mhhm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const databaseName = 'nodeMongoBasicDatabase';
const collectionName = "nodeMongoBasicDatabasProducts";
client.connect(err => {
  const collection = client.db(databaseName).collection(collectionName);
  // perform actions on the collection object
  const products = [
    {name: "Halley's Comet", officialName: "1P/Halley", orbitalPeriod: 75, radius: 3.4175, mass: 2.2e14},
    {name: "Wild2", officialName: "81P/Wild", orbitalPeriod: 6.41, radius: 1.5534, mass: 2.3e13},
    {name: "Comet Hyakutake", officialName: "C/1996 B2", orbitalPeriod: 17000, radius: 0.77671, mass: 8.8e12}
  ];

  collection.insertMany(products)
  .then(result=>{
    console.log("All Products Added")
  });
  console.log("database connected")
});



app.listen(3000, ()=> console.log("Yay! Listening to port 3000"))




/*
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
    const user = req.body;
    console.log(user);
    user.id = 55
    console.log(user)
    res.send(user);
})


//Show page with a form 
app.use(express.urlencoded());
app.get('/sendFormToServer', (req, res, next) => {
    res.send(`
    <form method="POST" action="/sendFormToServer">
        <input type="text" name="username" placeholder="username"></br></br>
        <input type="submit">
    </form>`
  );
});

app.post('/sendFormToServer', function (req, res, next) {
    console.log(req.body)
    res.send(JSON.stringify(req.body));
});

*/