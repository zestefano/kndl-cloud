const express = require('express')
const asyncHandler = require('express-async-handler')
const { check, validationResult } = require('express-validator')
const { User, Song } = require('../../db/models')
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router()


router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll({
        include: User
    })
    res.json(songs)
}))


router.post('/', asyncHandler(async(req, res) => {
    const {title, songUrl, imgUrl, userId, description} = req.body;

    const song = await Song.create({
        title, songUrl, imgUrl, userId, description
    })
    const newSong = await Song.findByPk(song.id, {
        include: User
    })
    return res.json({newSong})
}))

router.delete('/:id(\\d+)', async(req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: User
    })
    await song.destroy()
    return res.json(song)
})

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: User
    })
    song.title = req.body.title || song.title;
    song.songUrl = req.body.songUrl || song.songUrl;
    song.imgUrl = req.body.imgUrl || song.imgUrl;
    song.description = req.body.description || song.description;
    await song.save()
    return res.json({song})
}))


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: User
    })
    console.log(req.params, 'REWRWERWERWER')
    return res.json(song)
}))

// console.log('test')

module.exports = router;