var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var path = require('path')

var app = express()
const route = require('./routes/route.js')

  mongoose.connect('mongodb://localhost:27017/contactlist')

  mongoose.connection.on('connected', ()=>{
    console.log('Succesfully Connected to MongoDB on default Port: 27017')
  })
  mongoose.connection.on('error', (err)=>{
if (err){
      console.log('You have an error to connect to the DB: '+ err)
}
  })
app.use(bodyparser.json())
app.use('/api', route)
app.use(cors())

// app.use(bodyparser.urlencoded({
//   extended: true
// }));
app.use(express.static(path.join(__dirname, 'public')))

const port = 3030

app.get('/api', (req, res)=>{
  res.send("AM UP!")
})

app.listen(port,()=>{
  console.log("The Server has been fired up on port: "+port);
})
