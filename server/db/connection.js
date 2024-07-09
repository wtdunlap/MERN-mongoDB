import {MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationsErrors: true,
    },
});

try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Deployment pinged. Connected to MongoDB")
} catch(err) {
    console.error(err);
}

let db = client.db("empoloyees");

export default db;