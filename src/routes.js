import { Router } from 'express'

//Controllers
import userController from './app/controllers/UserController'
const routes = Router()

routes.get('/users', userController.get)
routes.post('/users', userController.create)

export default routes
