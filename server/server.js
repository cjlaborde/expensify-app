// https://expressjs.com/en/api.html

const path = require('path')

const express = require('express')
// create express app
const app = express()
const publicPath = path.join(__dirname, '..', 'public')

// use public directory
app.use(express.static(publicPath))

// * to match all unmatches route. 
// sends index when Process Unhandle requests
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})


// start in port 3000
app.listen(3000, () => {
    console.log('Server is up!')
})