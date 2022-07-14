import updateProductsService from "../services/updateProducts.service";

const updateProductsController = async (request, response) => {
    const {id} = request.params;
    const {name} = request.body;

    try {
        const updated = await updateProductsService(id, name);

        return response.status(200).json(updated);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default updateProductsController;