import database from "../database";

const createProductsService = async (name, price, category_id) => {

    try {
        const productsAleradyExists = await database.query(
            "SELECT name FROM products WHERE name = ($1)",
            [name]
        )
        
        if(!productsAleradyExists){
            throw new Error(error)
        }


        const res = await database.query(
            "INSERT INTO products(name, price, category_id) VALUES($1, $2, $3) RETURNING *",
            [name, price, category_id]
        );

        const response = {
            message: "Produto criado!",
            product: res.rows[0]
        }

        return response;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default createProductsService;