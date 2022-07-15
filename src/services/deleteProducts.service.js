import database from "../database";

const deleteProductsService = async (idProduct) => {

    try {

        const idProducts = await database.query(
            "SELECT id FROM products"
        );

        const idProductExists = idProducts.rows.find((row) => row.id === idProduct);

        if(idProductExists === undefined){
            throw ("Este produto não existe.")
        }

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