const express = require('express')
const router = new express.Router()
const Note = require('../models/note')
const auth = require('../middleware/auth')

router.post('/notes', auth, async (req, res) =>{
    const note = new Note({
        ...req.body,
        owner: req.user.id
    })

    try {
        await note.save()

        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/notes', auth, async (req, res) => {
    const note = new Note(req.body)

    try {
        await note.save()

        res.status(201).send(note)

    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/notes/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const note = await Note.findOne({_id, owner: req.user.id})

        if (!note) {
            return res.send(404).send()
        }

        res.status(302).send(note)

    } catch (error) {
        
    }
})

router.patch('/notes/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description', 'completeStatus']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const note = await Note.findOne({ _id: req.params.id, owner: req.user.id })

        updates.forEach(update => note[update] = req.body[update])
        
        await note.save()

        if (!note) {
            return res.status(404).send()
        }
        res.send(note)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/notes/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, owner: req.user.id })

        if (!note) {
            return res.status(404).send()
        }

        res.send(`The following note has been deleted: \n ${note}`)

    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router