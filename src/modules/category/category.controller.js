import { CreateException } from "../../errors/create.exception.js";
import { GetDataException } from "../../errors/get-data.error.js";
import categoryService from "./category.service.js";

class CategoryController{
    #_service;
    constructor(){
        this.#_service = categoryService
    }

    // create category
    createCategory = async(req,res) => {
        try {
            const data = await this.#_service.createOneCategory(req.body);
            res.status(201).send({
                data:data
            })
        } catch (error) {
            throw new CreateException("Error in create category controller")
        }
    }
    // create category

    // getAllCategories
    getCategories = async(req,res) => {
        try {
            const data = await this.#_service.getAllCategories(req.headers['accept-language']);
            res.status(200).send({
                data:data
            })
        } catch (error) {
            throw new GetDataException("Error in controller while getting all categories")
        }        
    }
    // getAllCategories
}

export default new CategoryController()