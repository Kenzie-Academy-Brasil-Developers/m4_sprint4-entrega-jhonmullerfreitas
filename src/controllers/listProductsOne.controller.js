import listProductsOneService from "../services/listProductsOne.service";

const listProductsOneController = async (request, response) => {
    const {id} = request.params;

    try {
        const product = await listProductsOneService(id);

        return response.status(200).json(product);
    } catch (error) {
        return response.status(400).json({message: error.message});
    }
};

export default listProductsOneController;