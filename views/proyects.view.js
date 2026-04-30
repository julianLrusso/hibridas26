import { createPage } from "../utils/pages.js";

export function proyectsSections(proyects) {
    let html = ``
    html += "<h2 class=\"mb-4 text-center text-primary fw-bold\">Secciones de proyectos:</h2>";
    html += "<ul class=\"list-group list-group-flush mb-5 mx-auto shadow-sm rounded-3\" style=\"max-width: 600px;\">";
    proyects.forEach(p => {
        html += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-3">
            <a class="text-decoration-none text-dark stretched-link fw-semibold fs-5" href="/proyects/${p.section}">${p.section_name}</a>
            <span class="badge bg-primary rounded-pill px-3 py-2">&rarr;</span>
        </li>`
    });
    html += "</ul>";
    return createPage(html)
}


export function proyectsView(proyects) {
    let html = `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">`
    proyects.forEach(p => {
        html += `
        <div class="col">
            <div class="card h-100 shadow border-0 rounded-4 overflow-hidden">
                <div class="card-header bg-primary text-white border-0 py-3">
                    <h5 class="card-title mb-0 fw-bold fs-4">${p.name}</h5>
                </div>
                <div class="card-body d-flex flex-column p-4">
                    <p class="card-text text-secondary mb-4 fs-6">${p.description}</p>
                    <img src="${p.img}" alt="${p.name}" class="img-fluid rounded-3 mb-4 shadow-sm" style="object-fit: cover; height: 220px; width: 100%;">
                    <p class="fw-bold mb-2 text-dark">Tecnologías:</p>
                    <div class="d-flex flex-wrap gap-2 mb-3 mt-auto">
                        ${p.technologies.map(t => `<span class="badge rounded-pill bg-light text-primary border border-primary px-3 py-2 shadow-sm">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="card-footer bg-white border-0 p-4 pt-0 text-center">
                    <a target="_blank" class="btn btn-primary w-100 py-2 fw-bold rounded-3 shadow-sm" href="${p.link}">Visitar página</a>
                </div>
            </div>
        </div>
        `
    });
    html += `</div>`
    return createPage(html)
}