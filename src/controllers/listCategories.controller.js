import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (request, response) => {
    try {
        const listCategories = await listCategoriesService();
        return response.status(200).json(listCategories);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default listCategoriesController;