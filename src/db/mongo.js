import mongoose from "mongoose";
import { dbConfigUrl } from "../config/db.config.js";

export async function mongo() {
    await mongoose.connect(dbConfigUrl);
}