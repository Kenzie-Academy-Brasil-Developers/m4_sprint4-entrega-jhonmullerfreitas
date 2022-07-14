import database from "../database";

const deleteProductsService = async (idProduct) => {

    try {
        const res = await database.query(
            "DELETE FROM products WHERE name = ($1) RETURNING *",
            [idProduct]
        );

        return res.rows[0];
        
    } catch (error) {
        throw new Error(error);
    };
};

export default deleteProductsService;