import mongoose from "mongoose";
let alreadyConnected = false;
import { DB_CONNECTION_STRING } from "../../../env";

export async function ensureConnected() {
    if (alreadyConnected) {
        return
    }
    console.log(process.env.DB_CONNECTION_STRING)
    await mongoose.connect(`${DB_CONNECTION_STRING}`, { dbName: "courses" });
    alreadyConnected = true;
}