import * as projectsService from "../services/projects.services.js"
import * as projectsView from "../views/projects.view.js"

export function getProjects(req, res) {
    projectsService.getProjects()
        .then(projects => res.send(projectsView.projectsSections(projects)))
        .catch(err => res.status(500).send(err));
}

export function getProjectsBySection(req, res) {
    projectsService.getProjectsBySection(req.params.section)
        .then(projects => res.send(projectsView.projectsView(projects)))
        .catch(err => res.status(500).send(err));
}