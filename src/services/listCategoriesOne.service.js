import database from "../database";

const listCategoriesOneService = async (idCategory) =>{
    try {
        const res = await database.query(
            "SELECT name FROM categories WHERE id = ($1)",
            [idCategory]
        );
        
        return res.rows[0];
        
    } catch (error) {
        throw new Error(error);
    };
};

export default listCategoriesOneService;