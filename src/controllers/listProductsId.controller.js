import listProductsIdService from "../services/listProductsId.service";

const listProductsIdController = async (request, response) => {
    const {id} = request.params;

    try {
        const categories = await listProductsIdService(id);

        return response.status(200).json(categories);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default listProductsIdController;