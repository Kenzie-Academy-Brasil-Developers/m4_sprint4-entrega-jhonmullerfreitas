import database from "../database";

const listProductsService = async () =>{
    try {
        const res = await database.query(
            "SELECT name FROM products"
        );
        
        return res.rows;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default listProductsService;