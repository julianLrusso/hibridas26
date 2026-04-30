import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://admin:admin@hibridas26.rnohgyd.mongodb.net/");
const db = client.db("AH20232CP1");
const projects = db.collection("projects");

await client.connect();

export async function getProjects(filters = {}) {
    try {
        const filterMongo = { deleted: { $ne: true } };
        if (filters?.name) filterMongo.name = { $regex: filters.name, $options: "i" };
        if (filters?.section) filterMongo.section = { $regex: filters.section, $options: "i" };
        if (filters?.technologies) filterMongo.technologies = { $regex: filters.technologies, $options: "i" };
        const result = await projects.find(filterMongo).toArray();
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export async function getProjectById(id) {
    try {
        const result = await projects.findOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function createProject(project) {
    try {
        const result = await projects.insertOne(project);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function updateProject(project) {
    try {
        const { id, ...projectData } = project;
        const result = await projects.updateOne({ _id: new ObjectId(id) }, { $set: projectData });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function deleteProjectById(id) {
    try {
        const result = await projects.updateOne({ _id: new ObjectId(id) }, {
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

export async function getProjectsBySection(section) {
    try {
        const result = await projects.find({ section: section, deleted: { $ne: true } }).toArray();
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}