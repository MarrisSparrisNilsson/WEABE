const express = require('express')

const app = express()
const port = 5000

app.get('/times', (req, res) => {
    const times = [
        {
            // createdAt: req.createdTime,
            // startTime: req.startTime,
            // endTime: req.endTime,

            createdAt: '2020-03-23T:10:38',
            startTime: '2020-03-23T:10:39',
            endTime: '2020-03-23T:10:40',
        }
    ]
    res.json(times)
})

// app.get('/notes', (req, res) => {
    
// })

app.listen(port, () => {
    console.log(`Server up on port ${port}`);    
})