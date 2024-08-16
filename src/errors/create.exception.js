import { BaseException } from "./base.exception.js";

export class CreateException extends BaseException{
    constructor(message){
        super()
        this.status = 409
        this.message = message
    }
}