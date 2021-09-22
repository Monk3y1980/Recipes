import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1/"
})
    
export const Api = {
    getRecipes(){
        return instance.get(`recipes/`
        ).then((res) => res.data);
        
    },
    getRecipesId(id) {
        return instance.get(`recipes/${id}`)
    },

    getCategory(id) {
        return instance.get(`category/${id}`)
        .then((res) => res.data);
        
    }
}