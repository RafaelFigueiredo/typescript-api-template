import express from 'express'
import APIController from './controllers/APIController'


const router = express.Router()

const apiController = new APIController()

router.use('/api/call', apiController.call)


export default router