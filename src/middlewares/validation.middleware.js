import { ValidationError } from "../errors/validation.exception.js";

export const validationMiddleware = (schema) =>{
    return (req, _, next) =>{
        const data = req.body;
        const {value, error} = schema.validate(data);
        if (error) {
            throw new ValidationError('Validation bilan bog\'liq xatolik')
        }
        req.body = value;
        next()
    }
}