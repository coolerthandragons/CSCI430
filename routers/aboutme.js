const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/aboutme', (req, res) => {
    const dir = path.join(__dirname,"../templates/aboutme.html")
    res.sendFile(dir)
})

module.exports = router