import { BaseException } from "./base.exception.js";

export class GetDataException extends BaseException{
    constructor(message){
        super()
        this.status = 400
        this.message = message
        this.name = "Error with getting data"
    }
}