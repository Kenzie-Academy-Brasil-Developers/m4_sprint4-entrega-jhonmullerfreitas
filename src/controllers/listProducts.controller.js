import listProductsService from "../services/listProducts.service";

const listProductsController = async (request, response) => {
    try {
        const listProducts = await listProductsService();
        return response.status(200).json(listProducts);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default listProductsController;