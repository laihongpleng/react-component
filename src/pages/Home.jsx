
import Category from "../components/reusable-component/Category";
import ProductList from "../components/ProductList";

const Home = () => {

    

    return (
        <div className=" container my-5 p-0" style={{ "height" : "100vh" }}>

            <Category data={[1,1]}/>    

            <ProductList data={[1,2,3,4,5,6,7,8,9,10,11,12,12,13]} />

        </div>
    );
}

export default Home;

