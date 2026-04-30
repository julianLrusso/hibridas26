import { createPage } from "../utils/pages.js";

export function proyectsSections(proyects) {
    let html = ``
    html += "<h2>Secciones de proyectos:</h2>";
    html += "<ul>";
    proyects.forEach(p => {
        html += `<li>
            <a href="/proyects/${p.section}">${p.section_name}</a>
        </li>`
    });
    html += "</ul>";
    return createPage(html)
}


export function proyectsView(proyects) {
    let html = ``
    proyects.forEach(p => {
        html += `
        <div class="card m-3">
            <div class="card-header">
                <h5 class="card-title">${p.name}</h5>
            </div>
            <div class="card-body">
            <p class="card-text">${p.description}</p>
            <img src="${p.img}" alt="${p.name}">
            <p>Tecnologías:</p>
            <div>
                ${p.technologies.map(t => `<span class="badge bg-secondary p-2 m-1">${t}</span>`).join('')}
            </div>
            </div>
            <div class="card-footer">
                <a target="_blank" class="btn btn-primary" href="${p.link}">Visitar página</a>
            </div>
        </div>
        `
    });
    return createPage(html)
}