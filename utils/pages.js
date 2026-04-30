export function createPage(content) {
    let html = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TP1 - Aplicaciones híbridas - López Russo Julián</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    </head>
    <body>
        <div class='container' >
            <nav>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyects">Proyectos</a>
                    </li>
                </ul>
            </nav>
            <h1 class="m-3">TP1 - Aplicaciones híbridas</h1>
            ${content}
            <footer>López Russo Julián</footer>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj06Wgp+Ym6JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>`;
    return html
}

export default { createPage }