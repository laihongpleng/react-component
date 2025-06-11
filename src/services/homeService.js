import { api } from "./index"

export  const fetchSliders = async () => {
    try{
        const response = await api.get('/sliders');
        //api + /sliders => http://localhost:3000/sliders
        //api = http://localhost:3000
        return response.data;
    }catch(e){
        console.error(e)
    }
}

export const fetchCategories = async () => {
    try{
        const response = await api.get('/categories');  //http://localhost:3000/categories
        return response.data;
    }catch(e){
        console.error(e)
    }
}

export const fetchProducts = async () => {
    try{
        const response = await api.get('/products');
        return response.data;
    }catch(e){
        console.error(e)
    }
}