const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('',(req, res) => {
    res.send('How are you?')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})