import { BaseException } from "./base.exception.js";

export class UpdateException extends BaseException{
    constructor(message){
        super()
        this.message = message
        this.status = 409
        this.name = "Update error"
    }
}