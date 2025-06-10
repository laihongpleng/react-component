
import Category from "../components/reusable-component/Category";
import ProductList from "../components/ProductList";

const Home = () => {

    

    return (
        <div className=" container my-5 p-0" style={{ "height" : "100vh" }}>

            <Category data={[1,2]}/>    

            <ProductList data={[1,1,1,1,1,1,1,1,1,1,1,1,1]}/>

        </div>
    );
}

export default Home;

