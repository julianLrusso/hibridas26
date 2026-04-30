import express from 'express'
import * as proyectsController from '../controllers/proyects.controller.js'

const router = express.Router()

router.get('/proyects', proyectsController.getProyects)
router.get('/proyects/:section', proyectsController.getProyectsBySection)

export default router