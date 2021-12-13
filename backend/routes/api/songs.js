const express = require('express')
const asyncHandler = require('express-async-handler')
const { check, validationResult } = require('express-validator')
const { User, Song, Comment } = require('../../db/models')
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router()


const songValidator = [
    check('title')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Song must have a title'),
    check('songUrl')
        .exists()
        .isURL()
        .withMessage('Song must have a url.mp3'),
    check('imgUrl')
        .exists()
        .isURL()
        .withMessage('Song must have an image.jpg'),
    check('description')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Song must have a description'),
    handleValidationErrors
  ]


router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll({
        include: User
    })
    res.json(songs)
}))


router.post('/', songValidator, asyncHandler(async(req, res) => {
    const {title, songUrl, imgUrl, userId, description} = req.body;

    const songError = validationResult(req)

    if(songError.isEmpty()) {
    const song = await Song.create({
        title, songUrl, imgUrl, userId, description
    })
    const newSong = await Song.findByPk(song.id, {
        include: User
    })
    return res.json({newSong})
    } else {
        let errors = songError.array().map(error => error.msg)
        return res.json({errors})
    }
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
        include: [User, Comment]
    })
    return res.json(song)
}))


module.exports = router;