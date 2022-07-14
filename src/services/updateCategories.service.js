import database from "../database";

const updateCategoriesService = async (idCategory, name) => {

    try {
        const res = await database.query(
            "UPDATE categories SET name = ($2) WHERE id = ($1) RETURNING *",
            [idCategory, name]
        );

        const response = {
            message: "Atualizada",
            category: res.rows[0]
        }

        return response;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default updateCategoriesService;