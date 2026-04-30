import express from 'express'
import apiProjectsRoutes from './api/routes/projects.routes.js';
import projectsRoutes from './routes/projects.routes.js';

const app = express();
app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiProjectsRoutes);
app.use(projectsRoutes)

app.listen(3333, () => {
    console.log("Corriendo en http://localhost:3333")
})