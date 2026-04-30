import * as proyectsService from "../../services/proyects.services.js";

export async function getProyects(req, res) {
    try {
        console.log('llegó');
        const filters = req.query;
        const proyects = await proyectsService.getProyects(filters);
        res.status(200).json(proyects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getProyectById(req, res) {
    try {
        const proyect = await proyectsService.getProyectById(req.params.id);
        if (!proyect) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.status(200).json(proyect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createProyect(req, res) {
    try {
        const proyect = await proyectsService.createProyect(req.body);
        res.status(201).json(proyect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateProyect(req, res) {
    try {
        const proyect = await proyectsService.updateProyect(req.body);
        if (!proyect) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.status(200).json(proyect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteProyectById(req, res) {
    try {
        const proyect = await proyectsService.deleteProyectById(req.params.id);
        if (!proyect) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.status(200).json(proyect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}