import { CreateException } from "../../errors/create.exception.js";
import { DeleteDataException } from "../../errors/delete.exception.js";
import { GetDataException } from "../../errors/get-data.error.js";
import { UpdateException } from "../../errors/update.exception.js";
import { category } from "./category.schema.js";

class CategoryService {
  #_model;

  constructor() {
    this.#_model = category;
  }

  // create category
  async createOneCategory({
    name,
    name_ru,
    name_en,
    description,
    description_ru,
    description_en,
  }) {
    try {
      const data = await this.#_model.insertMany({
        name,
        name_ru,
        name_en,
        description,
        description_ru,
        description_en,
      });
      return data;
    } catch (error) {
      throw new CreateException("Error while creating category");
    }
  }
  // create category

  // getAllCategories
  async getAllCategories(language) {
    try {
      if (language == "english") {
        const data = await this.#_model
          .find().populate('products', "name_en cost")
          .select("name_en description_en products");
        return data;
      }
      if (language == "russian") {
        const data = await this.#_model
          .find().populate("products", "name_ru cost")
          .select("name_ru description_ru products");
        return data;
      }
      if (language == "uzbek") {
        const data = await this.#_model
          .find().populate("products","name cost")
          .select("name description products");
        return data;
      }
    } catch (error) {
      throw new GetDataException(
        "Error in service while getting all categories"
      );
    }
  }
  // getAllCategories

  // get one category
  async getOneCategory(language, id) {
    try {
      if (language == "english") {
        const data = await this.#_model
          .findById(id).populate('products', "name_en cost")
          .select("name_en description_en products");
        return data;
      }
      if (language == "russian") {
        const data = await this.#_model
          .findById(id).populate('products', "name_ru cost")
          .select("name_ru description_ru products");
        return data;
      }
      if (language == "uzbek") {
        const data = await this.#_model
          .findById(id).populate('products', "name cost")
          .select("name description products");
        return data;
      }
    } catch (error) {
      throw new GetDataException("Error in service while getting one category");
    }
  }
  // get one category

  // update category
  async updateOneCategory({
    name,
    name_ru,
    name_en,
    description,
    description_ru,
    description_en,
    id,
  }) {
    try {
        const data = await this.#_model.findByIdAndUpdate(id,{
            name,
            name_ru,
            name_en,
            description,
            description_ru,
            description_en 
        })
        return data
    } catch (error) {
        throw new UpdateException("Error in service while updating category")
    }
  }
  // update category

  // deleteCategory 
   async deleteOneCategory(id){
    try {
        const data = await this.#_model.deleteOne({_id:id})
        return data
    } catch (error) {
        throw new DeleteDataException("Error in service while deleting category")
    }
   }
  // deleteCategory 


}

export default new CategoryService();
