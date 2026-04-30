import express from 'express'
import * as projectsController from '../controllers/projects.controller.js'

const router = express.Router()

router.get('/projects', projectsController.getProjects)
router.get('/projects/:section', projectsController.getProjectsBySection)

export default router