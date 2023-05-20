const express = require('express')
const app = express()
const port = process.env.Port||5000
const cors = require('cors')

require('dotenv').config()
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send("Assignment-11");
})

app.listen(port, () => {
    console.log(`port is: ${port}`)
  })