import Joi from "joi";

export const createProductSchema = Joi.object({
    name:Joi.string().required(),
    name_ru:Joi.string().required(),
    name_en:Joi.string().required(),
    cost:Joi.string(),
    categoryId:Joi.string().required()
})