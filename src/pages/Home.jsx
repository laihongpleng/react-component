
import Category from "../components/reusable-component/Category";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoryAction, getProductAction } from "../stores/homeStore";
import Slider from "../components/Slider";

const Home = () => {

    const dispatch = useDispatch(); 
    /*
       1.we used useDispatch for calling action creator
       2.we used useSelector for calling state
       3.we used useEffect for calling api
    */
    const products = useSelector((a) => {
        return a.sdfsdasdfas.products
    });

    const categories = useSelector((state) => {
        return state.sdfsdasdfas.categories
    });

    useEffect(() => {

        dispatch(getCategoryAction());
        dispatch(getProductAction());
        
    },[dispatch])

    return (
        <>
        <Slider/>
        <div className=" container my-5 p-0" style={{ "height" : "100vh" }}>

            <Category data={categories}/>    

            <ProductList data={products} />

        </div>

        </>
    );
}

export default Home;

