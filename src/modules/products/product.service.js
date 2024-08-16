import { CreateException } from "../../errors/create.exception.js";
import { DeleteDataException } from "../../errors/delete.exception.js";
import { GetDataException } from "../../errors/get-data.error.js";
import { UpdateException } from "../../errors/update.exception.js";
import { category } from "../category/category.schema.js";
import { product } from "./product.schema.js";

class ProductService {
  #_model;
  #_category_model;
  constructor() {
    this.#_model = product;
    this.#_category_model = category;
  }

  // create product
  async createOneProduct({ name_ru, name, name_en, cost, categoryId }) {
    try {
      const data = await this.#_model.insertMany({
        name,
        name_ru,
        name_en,
        cost,
        categoryId,
      });
      await this.#_category_model.updateOne(
        {
          _id: categoryId,
        },
        {
          $push: {
            products: data,
          },
        }
      );      
      return data;
    } catch (error) {
      throw new CreateException("Error in service while create product");
    }
  }
  // create product

  // get all products
  async getAllProducts(){
    try {
        const data = await this.#_model.find()
        return data
    } catch (error) {
        throw new GetDataException("Error in service while getting all product")
    }
  }
  // get all products

  // get one product
  async getOneProduct(id){
    try {
        const data = await this.#_model.findById(id)
        return data
    } catch (error) {
        throw new GetDataException("Error in service while getting one product")
    }
  }
  // get one product

  // updateProduct
  async updateOnePRoduct({name,name_ru,name_en,cost,id}){
    try {
        const data = await this.#_model.findByIdAndUpdate(id, {
            name,name_ru,name_en,cost
        })
        return data
    } catch (error) {
        throw new UpdateException("Error in service while updating product")
    }
  }
  // updateProduct

  // delete one product
  async deleteOneProduct(id){
    try {
        const data = await this.#_model.deleteOne({
            _id:id
        })
        return data
    } catch (error) {
        throw new DeleteDataException("Error in service while deleting product")
    }
  }
  // delete one product

}

export default new ProductService() 
