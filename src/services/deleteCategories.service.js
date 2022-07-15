import database from "../database";

const deleteCategoriesService = async (idCategory) => {

    try {
        const categoryNotExists = await database.query(
            "SELECT name FROM categories WHERE id = ($1)",
            [idCategory]
        )
        
        if(categoryNotExists.rows.length === 0){
            throw (error)
        }


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