import database from "../database";

const listCategoriesService = () =>{
    try {
        const res = database.query(
            "SELECT name FROM categories"
        );

        return res;
        
    } catch (error) {
        throw new Error(error);
    };
};

export default listCategoriesService;