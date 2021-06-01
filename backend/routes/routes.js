/**Our connection to the front-end */
const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')

const Memory = require('../models/Memory')
const User = require('../models/User')


router.get(`/`, (req, res) => {
    res.json({
        backend: '🔥'
    })
})

// MEMORY LIST
router.get('/getMemories', (req, res) => {
    Memory.find({}).then(allMemoriesFromDb => {
        res.json(allMemoriesFromDb)
    })
})



// USER LIST
router.get('/getUsers', (req, res) => {
    User.find({}).then(allUsersFromDb => {
        res.json(allUsersFromDb)
    })
})


// USER/AUTH
router.get('/user', authorize, (req, res) => {

    User.findById(res.locals.user._id)
        .then(user => {
            res.json(user)
        }).catch(console.error)

})

router.post('/logMeIn', async (req, res) => {

    //Check if user already exists 
    let user = await User.findOne({ email: req.body.email })

    //If s/he doesn't exist than create new user 
    if (!user) {
        user = await User.create(req.body)
    }

    //Signing the token with the user object
    jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
        //Send token back to the frontend 
        res.json({ user, token })
    })
})

function authorize(req, res, next) {
    let token = req.headers['authorization'].split(' ')[1]

    if (token != 'null') {
        jwt.verify(token, 'secret key', async (err, data) => {
            if (!err) {
                console.log(data)
                res.locals.user = data.user
                next()
            } else {
                console.error(err)
            }
        })
    } else {
        res.status(403).json({ message: 'Must be logged in' })
    }
}


module.exports = router