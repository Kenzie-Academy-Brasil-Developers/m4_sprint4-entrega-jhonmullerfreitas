import database from "../database";

const deleteCategoriesService = async (idCategory) => {

    try {
        const res = await database.query(
            "DELETE FROM categories WHERE name = ($1) RETURNING *",
            [idCategory]
        );

        return res.rows[0];
        
    } catch (error) {
        throw new Error(error);
    };
};

export default deleteCategoriesService;