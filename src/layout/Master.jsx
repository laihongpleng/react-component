import { Outlet } from "react-router"
import Header from "../components/Header"
import Navbar from "../components/Navbar";

const Master = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="main">
               <Outlet />
            </div>
        </div>
    )
}

export default Master;