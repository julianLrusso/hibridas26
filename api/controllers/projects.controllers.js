import * as projectsService from "../../services/projects.services.js";

export async function getProjects(req, res) {
    try {
        console.log('llegó');
        const filters = req.query;
        const projects = await projectsService.getProjects(filters);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getProjectById(req, res) {
    try {
        const project = await projectsService.getProjectById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createProject(req, res) {
    try {
        const project = await projectsService.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateProject(req, res) {
    try {
        const project = await projectsService.updateProject(req.body);
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteProjectById(req, res) {
    try {
        const project = await projectsService.deleteProjectById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}