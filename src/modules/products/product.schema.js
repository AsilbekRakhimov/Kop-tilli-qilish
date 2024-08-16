import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    name_ru:{
        type: String
    },
    name_en:{
        type:String
    },
    cost:{
        type:String
    },
    categoryId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "categories"
    }
})

export const product = mongoose.model("products",productSchema);