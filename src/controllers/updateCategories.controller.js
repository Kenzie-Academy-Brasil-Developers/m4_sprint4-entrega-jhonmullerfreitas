import updateCategoriesService from "../services/updateCategories.service";

const updateCategoriesController = async (request, response) => {
    const {id} = request.params;
    const {name} = request.body;

    try {
        const updated = await updateCategoriesService(id, name);

        return response.status(200).json(updated);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default updateCategoriesController;