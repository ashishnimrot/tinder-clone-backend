import express from 'express'
import mongoose from 'mongoose'
// import connectDB from './database'
import Card from './dbCards.js'
import Cors from 'cors'

//App confing
const app = express()
const port = process.env.port || 8001
const connection_url = 'mongodb+srv://ashish:ashish@cluster0.kfs35.mongodb.net/TINDER-CLONE?retryWrites=true&w=majority'

//Moddlewares
app.use(express.json())
app.use(Cors())

//db connection
// connectDB()
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

//routes
app.get('/', (req, res) => 
     res.status(200).send("Hi we are in tinder backend")
);

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
    Card.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    console.log("hi")
    Card.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})


//listener
app.listen(port, () => {
    console.log(`Server started on port`);
});
