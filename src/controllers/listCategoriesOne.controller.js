import listCategoriesOneService from "../services/listCategoriesOne.service";

const listCategoriesOneController = async (request, response) => {
    const {id} = request.params;

    try {
        const categories = await listCategoriesOneService(id);

        return response.status(200).json(categories);
    } catch (error) {
        return response.status(400).json({message: error.message});
    }
};

export default listCategoriesOneController;