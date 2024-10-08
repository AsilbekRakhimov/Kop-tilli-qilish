import { CreateException } from "../../errors/create.exception.js";
import { GetDataException } from "../../errors/get-data.error.js";
import categoryService from "./category.service.js";

class CategoryController {
  #_service;
  constructor() {
    this.#_service = categoryService;
  }

  // create category
  createCategory = async (req, res) => {
    try {
      const data = await this.#_service.createOneCategory(req.body);
      res.status(201).send({
        data: data,
      });
    } catch (error) {
        res.status(409).send({
            message:"Xato kiritildi"
        });
    }
  };
  // create category

  // getAllCategories
  getCategories = async (req, res) => {
    try {
      const data = await this.#_service.getAllCategories(
        req.headers["accept-language"]
      );
      res.status(200).send({
        data: data,
      });
    } catch (error) {
        res.status(409).send({
            message:"Xato kiritildi"
        });
    }
  };
  // getAllCategories

  // get one category
  getCategory = async (req, res) => {
    try {
      const data = await this.#_service.getOneCategory(
        req.headers["accept-language"],
        req.params.id
      );
      res.status(200).send({
        data:data
      });
    } catch (error) {
        res.status(409).send({
            message:"Xato kiritildi"
        });
    }
  };
  // get one category

  // update category
  updateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const data = await this.#_service.updateOneCategory({...req.body, id})
        res.status(203).send({
            message:"Data is updated"
        })
    } catch (error) {
        res.status(409).send({
            message:"Error with updating category"
        })
    }
  }
  // update category

  // delete category
  deleteCategory = async (req,res) => {
    try {
        const data = await this.#_service.deleteOneCategory(req.params.id);
        res.status(200).send({
            message:"Category is deleted"
        })
    } catch (error) {
        res.status(409).send({
            message:"Error with deleting category"
        })
    }
  }
  // delete category

}

export default new CategoryController();
