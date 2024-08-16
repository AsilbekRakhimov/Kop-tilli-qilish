import { BaseException } from "./base.exception.js";

export class DeleteDataException extends BaseException{
    constructor(message){
        super()
        this.status = 400
        this.message = message
        this.name = "Error with deleting data"
    }
}