require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

// .connect to 'mongodb://localhost/IronIverson' ???

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/IronIverson', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to ${x.connections[0].name}`))
    .catch(() => console.error("Error connecting to Mongo"))

// cors to http and https for localhost:3000 and frontend domain

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