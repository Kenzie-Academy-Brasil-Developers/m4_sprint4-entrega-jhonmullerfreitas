import deleteProductsService from "../services/deleteProducts.service";

const deleteProductsController = async (request, response) => {
    const {id} = request.params;

    try {
        const deleted = await deleteProductsService(id);

        return response.status(204).json(deleted);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default deleteProductsController;