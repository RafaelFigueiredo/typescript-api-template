require('dotenv').config()
import express from 'express'
import router from './router'

import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5252
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})