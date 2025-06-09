import { products } from "../data/data";
import Card from "../reusable-component/Card";
import Category from "../reusable-component/Category";

const Home = () => {
    return (
        <div className=" container my-5 p-0" style={{ "height" : "100vh" }}>

            <Category data={[1,2]}/>

            <div className="row p-0 m-0">
                {
                   products.map((value,index) => {
                    return (
                        <div key={index} className="col-lg-3 col-md-4  col-12 mb-5">
                          <Card data={value}/>
                       </div>
                    )
                   }) 
                }
                
            </div>

        </div>
    );
}

export default Home;

