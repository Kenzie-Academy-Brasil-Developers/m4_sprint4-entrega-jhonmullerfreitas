import database from "../database";

const listProductsOneService = async (idProducts) =>{
    try {
        const res = await database.query(
            "SELECT name FROM products WHERE id = ($1)",
            [idProducts]
        );
        
        return res.rows[0];
        
    } catch (error) {
        throw new Error(error);
    };
};

export default listProductsOneService;