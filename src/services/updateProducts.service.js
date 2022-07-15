import database from "../database";

const updateProductsService = async (idProduct, name) => {

    try {
        
        const idProducts = await database.query(
            "SELECT id FROM products"
        );

        const idProductExists = idProducts.rows.find((row) => row.id === idProduct);

        if(idProductExists === undefined){
            throw ("Este produto não existe.")
        }
        

        const res = await database.query(
            "UPDATE products SET name = ($2) WHERE id = ($1) RETURNING *",
            [idProduct, name]
        );

        const response = {
            message: "Atualizado",
            product: res.rows[0]
        }

        return response;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default updateProductsService;