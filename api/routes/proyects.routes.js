import express from 'express';
import * as proyectsControllers from '../controllers/proyects.controllers.js';

const router = express.Router();

router.get('/api/proyects', proyectsControllers.getProyects);
router.get('/api/proyects/:id', proyectsControllers.getProyectById);
router.post('/api/proyects', proyectsControllers.createProyect);
router.put('/api/proyects', proyectsControllers.updateProyect);
router.delete('/api/proyects/:id', proyectsControllers.deleteProyectById);

export default router;