import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://admin:admin@hibridas26.rnohgyd.mongodb.net/");
const db = client.db("AH20232CP1");
const proyects = db.collection("projects");

await client.connect();

export async function getProyects(filters = {}) {
    try {
        const filterMongo = { deleted: { $ne: true } };
        if (filters?.name) filterMongo.name = { $regex: filters.name, $options: "i" };
        if (filters?.section) filterMongo.section = { $regex: filters.section, $options: "i" };
        if (filters?.technologies) filterMongo.technologies = { $regex: filters.technologies, $options: "i" };
        const result = await proyects.find(filterMongo).toArray();
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export async function getProyectById(id) {
    try {
        const result = await proyects.findOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function createProyect(proyect) {
    try {
        const result = await proyects.insertOne(proyect);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function updateProyect(proyect) {
    try {
        const { id, ...proyectData } = proyect;
        const result = await proyects.updateOne({ _id: new ObjectId(id) }, { $set: proyectData });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function deleteProyectById(id) {
    try {
        const result = await proyects.updateOne({ _id: new ObjectId(id) }, {
            $set: {
                deleted: true
            }
        })
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function getProyectsBySection(section) {
    try {
        const result = await proyects.find({ section: section, deleted: { $ne: true } }).toArray();
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}