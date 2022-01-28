const express = require('express')

const router = express.Router()

router.get('/aboutme', (req, res) => {
    res.render('aboutme')
})

module.exports = router