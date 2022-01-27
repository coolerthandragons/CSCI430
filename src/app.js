const express = require('express')
const path = require('path')

const app = express()

const indexRouter = require('../routers/index') 
const aboutMeRouter = require('../routers/aboutme')
const createaccountRouter = require('../routers/create-account')
const loginRouter = require('../routers/login')
const mainRouter = require('../routers/main') 
const _404Router = require('../routers/404')


const dir = path.join(__dirname, "../public") 
app.use(express.static(dir)) 

app.use(indexRouter) 
app.use(aboutMeRouter)
app.use(createaccountRouter)
app.use(loginRouter)
app.use(mainRouter)
app.use(_404Router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})