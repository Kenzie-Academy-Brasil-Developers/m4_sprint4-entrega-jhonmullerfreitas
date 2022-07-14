import database from "../database";

const createCategoriesService = async (name) => {


    try {
        const categoryAleradyExists = await database.query(
            "SELECT name FROM categories WHERE name = ($1)",
            [name]
        )
        
        if(!categoryAleradyExists){
             throw new Error(error)
        }

        const res = await database.query(
            "INSERT INTO categories(name) VALUES($1) RETURNING *",
            [name]
        );

        

        const response = {
            message: "Categoria criada!",
            category: res.rows[0]
        }

        return response;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default createCategoriesService;