require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const Pusher = require("pusher");

// const pusher = new Pusher({
//   appId: "1182565",
//   key: "b65fc9365fa2457c27bc",
//   secret: "67e92271361cb73a57b8",
//   cluster: "mt1",
//   useTLS: true
// });

// pusher.trigger("my-channel", "my-event", {
//   message: "hello world"
// });

// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);



// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// http.listen(8000, () => {
//   console.log('listening on *:8000');
// });


mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/IronIverson', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to ${x.connections[0].name}`))
    .catch(() => console.error("Error connecting to Mongo"))



app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://panda-chat.netlify.app', 'https://localhost:3000', 'http://panda-chat.netlify.app'] //Add client urls to allow CORS
}))

//This is for req.body
app.use(express.json())


//Static files for our backend 
app.use(express.static(path.join(__dirname, '../frontend/build')))


//Our connection to the frontend >>> All our routes for now
app.use(`/api`, require('./routes/routes'))


//Sends our one single page on all requests 
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))