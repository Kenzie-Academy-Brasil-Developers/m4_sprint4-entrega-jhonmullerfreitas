import database from "../database";

const listProductsIdService = async (idCategory) =>{
    try {
        const res = await database.query(
            "SELECT products.name FROM products INNER JOIN categories ON categories.id = products.category_id WHERE category_id = ($1)",
            [idCategory]
        );

        const response = [{
            category: res.rows
        }]
        
        return response;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default listProductsIdService;