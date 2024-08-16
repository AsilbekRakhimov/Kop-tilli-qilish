import { BaseException } from "./base.exception.js";

export class ValidationError extends BaseException{
    constructor(message){
        super()
        this.message = message
        this.status = 400
        this.name = "Validation error"
    }
}