import { api } from "../services";

export const getCartService = async () => { 
    try{
        const response = await api.get('/carts');
        return response.data;
    }catch(e){
        console.error(e)
    }
}

export const addToCartService = async (data) => {
    try{
        const response = await api.post('/carts', data);
        return response.data;
    }catch(e){
        console.error(e)
    }
}