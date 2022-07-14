import database from "../database";

const updateProductsService = async (idProduct, name) => {

    try {
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