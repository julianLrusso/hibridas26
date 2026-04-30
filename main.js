import express from 'express'
import apiProyectsRoutes from './api/routes/proyects.routes.js';
import proyectsRoutes from './routes/proyects.routes.js';

const app = express();
app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiProyectsRoutes);
app.use(proyectsRoutes)

app.listen(3333, () => {
    console.log("Corriendo en http://localhost:3333")
})