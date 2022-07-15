import deleteCategoriesService from "../services/deleteCategories.service";

const deleteCategoriesController = async (request, response) => {
    const {id} = request.params;

    try {
        const deleted = await deleteCategoriesService(id);

        return response.status(204).json(deleted);
    } catch (error) {
        return response.status(400).json({message: error.message});
    }
};

export default deleteCategoriesController;