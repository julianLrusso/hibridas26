import express from 'express';
import * as projectsControllers from '../controllers/projects.controllers.js';

const router = express.Router();

router.get('/api/projects', projectsControllers.getProjects);
router.get('/api/projects/:id', projectsControllers.getProjectById);
router.post('/api/projects', projectsControllers.createProject);
router.put('/api/projects', projectsControllers.updateProject);
router.delete('/api/projects/:id', projectsControllers.deleteProjectById);

export default router;