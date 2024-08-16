import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String
    },
    name_ru:{
        type:String
    },
    name_en:{
        type: String
    },
    description:{
        type: String
    },
    description_ru:{
        type: String
    },
    description_en:{
        type: String
    },
    products:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"products"
    }]
},
{
    _id:true,
    timestamps:true,
    collection:"categories"
})

export const category = mongoose.model("categories", categorySchema);