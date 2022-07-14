import createProductsService from "../services/createProducts.service";

const createProductsController = async (request, response) => {
    const {name, price, category_id} = request.body;

    try {
        const product = await createProductsService(name, price, category_id);

        return response.status(201).json(product);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default createProductsController;