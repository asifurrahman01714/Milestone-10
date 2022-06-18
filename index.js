// Creating a express function
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId;



app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/addProduct",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

// MongoDb connection
const mongoDbUserPassword = 'wLLj-UL-LrC7LES';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nodeMongoBasic:"+mongoDbUserPassword+"@atlascluster.eb7mhhm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const databaseName = 'nodeMongoBasicDatabase';
const collectionName = "nodeMongoBasicDatabasProducts";
client.connect(err => {
  const collection = client.db(databaseName).collection(collectionName);

  // Add Product to MongoDB
  app.post("/addProduct", (req, res)=>{
    const product = req.body;
    collection.insertOne(product);
    console.log(product);
    res.send(product);
  })

  // Retrieved Product from MongoDB
  app.get("/products", (req, res) =>{
    collection.find({})
    .toArray((err, documents) =>{
        res.send(documents)
    })
  })
    
  // Deleting Item
  app.delete("/deleteProduct/:id", (req, res)=>{
    console.log(req.params.id);
    collection.deleteOne({_id : ObjectId(req.params.id)})
    .then(result =>{
        console.log(result);
    })
  })


  
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