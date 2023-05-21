const express = require('express')

const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.Port||5000
const cors = require('cors')

require('dotenv').config()
app.use(express.json())
app.use(cors());

const toyData = require('./data.json');
const carData = require('./car.json');
const robotData = require('./robot.json');
const girlsData = require('./girls.json');


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.isaiemh.mongodb.net/?retryWrites=true&w=majority`;


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

//  async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();


//     const toyCollection= client.db('toy').collection(toyShop);

//     // All Toy
//     app.post("/post-toy", async (req, res) => {
//       const body = req.body;
//       body.createdAt = new Date();
//       console.log(body);
//       const result = await jobsCollection.insertOne(body);
//       if (result?.insertedId) {
//         return res.status(404).send(result);
//       } else {
//         return res.status(404).send({
//           message: "Try Again",
//           status: false,
//         });
//       }
//     })

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("Assignment-11");
})

app.get('/data', (req, res) => {
    res.send(toyData);
  })

app.get('/data/:id', (req, res) => {
  const id=(req.params.id) ;
  console.log(id);
  
  const selectedToy = toyData.filter(toy=> toy._id ===id)
  res.send(selectedToy);
  })


app.get('/car', (req, res) => {
    res.send(carData);
  })

app.get('/robot', (req, res) => {
    res.send(robotData);
  })

app.get('/girls', (req, res) => {
    res.send(girlsData);
  })

app.listen(port, () => {
    console.log(`port is: ${port}`)
  })