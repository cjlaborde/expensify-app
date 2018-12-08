// https://expressjs.com/en/api.html

const path = require('path')

const express = require('express')
// create express app
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
// port for heroku/ use heroku PORT or default to 3000
const port = process.env.PORT || 3000

// use public directory
app.use(express.static(publicPath))

// * to match all unmatches route. 
// sends index when Process Unhandle requests
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})


// start in port 3000
app.listen(port, () => {
    console.log('Server is up!')
})