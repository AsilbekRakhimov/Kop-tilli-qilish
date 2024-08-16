import productService from "./product.service.js"

class ProductController{
    #_service
    constructor(){
        this.#_service = productService
    }

    // create product
    createCategory = async (req,res) => {
        try {
            const data = await this.#_service.createOneProduct(req.body);
            res.status(201).send({
                data:data
            });
        } catch (error) {
            res.status(409).send({
                message:error.name
            });
        }
    }
    // create product

    // get all products
    getProducts = async (req,res) => {
        try {
            const data = await this.#_service.getAllProducts()
            res.status(200).send({
                data:data
            })
        } catch (error) {
            res.status(409).send({
                message:error.message
            });
        }
    }
    // get all products

    // get one product
    getOneProduct = async (req,res) => {
        try {
            const data = await this.#_service.getOneProduct(req.params.id)
            res.status(200).send({
                data:data
            })
        } catch (error) {
            res.status(409).send({
                message:error.message
            });
        }
    }
    // get one product

    // update product
    updateProduct = async (req,res) => {
        try {
            const id = req.params.id
            const data = await this.#_service.updateOnePRoduct({...req.body, id});
            res.status(203).send({
                message:"Product is updated"
            })
        } catch (error) {
            res.status(409).send({
                message:"Error in controller while updating product"
            })
        }
    }
    // update product

    // delete product
    deleteProduct = async (req,res) => {
        try {
            const data = await this.#_service.deleteOneProduct(req.params.id);
            console.log(data);
            if (data.acknowledged && data.deletedCount > 0) {
                res.status(200).send({
                    message:"Product is deleted"
                });
                return ; 
            }
            res.status(400).send({
                message:"Something is wrong while deleting product"
            })
        } catch (error) {
            res.status(409).send({
                message:"Error while deleting product"
            })
        }
    }
    // delete product
}

export default new ProductController()