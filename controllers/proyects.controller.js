import * as proyectsService from "../services/proyects.services.js"
import * as proyectsView from "../views/proyects.view.js"

export function getProyects(req, res) {
    proyectsService.getProyects()
        .then(proyects => res.send(proyectsView.proyectsSections(proyects)))
        .catch(err => res.status(500).send(err));
}

export function getProyectsBySection(req, res) {
    proyectsService.getProyectsBySection(req.params.section)
        .then(proyects => res.send(proyectsView.proyectsView(proyects)))
        .catch(err => res.status(500).send(err));
}