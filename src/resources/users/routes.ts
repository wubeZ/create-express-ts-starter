import { Router } from 'express'
import userController from './controller'

const router = Router()

// define routes
router.route('/').get(userController.getAll)

export default router
