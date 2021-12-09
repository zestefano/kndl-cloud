const express = require('express')
const {check, validationResult} = require('express-validator')
const asyncHandler = require('express-async-handler')

const {User, Song} = require('../../db/models')

const router = express.Router()


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    console.log('hiiitttttt')
    const id = req.params.id
    const songs = await Song.findAll({
        include: User,
        where: {
            userId: id
        }
    })
    res.json(songs)
}))


module.exports = router;