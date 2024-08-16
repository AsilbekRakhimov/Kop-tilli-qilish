import Joi from "joi";

export const createCategorySchema = Joi.object({
    name:Joi.string().required(),
    name_ru:Joi.string().required(),
    name_en:Joi.string().required(),
    description: Joi.string(),
    description_ru: Joi.string(),
    description_en: Joi.string(),
})