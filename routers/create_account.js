const express = require('express')

const router = express.Router()

router.get('/create_account', (req, res) => {
    res.render('create_account')
})

module.exports = router