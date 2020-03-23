const express = require('express')

const app = express()

const port = env.port || 5000

app.get('/times', (req, res) => {
    const times = [
        {
            createdAt: req.createdTime,
            startTime: req.startTime,
            endTime: req.endTime,
        }
    ]
    res.json(times)
})

// app.get('/notes', (req, res) => {
    
// })

app.listen(port, () => {
    console.log(`Server up on port ${port}`);    
})