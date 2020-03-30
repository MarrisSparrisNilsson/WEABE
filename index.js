const express = require('express')
const cors = require('cors')
require('./src/db/mongoose')
const noteRouter = require('./src/router/note')

const app = express()
const port = process.env.PORT || 5000

app.use(cors)
app.use(noteRouter)

// app.get('/times', (req, res) => {
//     const times = [
//         {
//             // createdAt: req.createdTime,
//             // startTime: req.startTime,
//             // endTime: req.endTime,

//             createdAt: '2020-03-23T:10:38',
//             startTime: '2020-03-23T:10:39',
//             endTime: '2020-03-23T:10:40',
//         }
//     ]
//     res.json(times)
// })

// app.get('/notes', (req, res) => {
    
// })

app.listen(port, () => {
    console.log(`Server up on port ${port}`);    
})