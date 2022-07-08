import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = (request, response) => {
    try {
        const listCategories = listCategoriesService();

        return response.status(201).json(listCategories);
    } catch (error) {
        return response.status(400).json(error.message);
    }
};

export default listCategoriesController;