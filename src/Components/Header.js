import "../Styles/Header.css"
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Menu from "../Pages/Menu";
import ReserveATable from "../Pages/ReserveATable";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";

function Header() {
    return (
        <div>
            <nav className="header-nav">
                <Link to={"/"} style={{color: "white", textDecoration: "none", paddingInlineStart: "10px", paddingInlineEnd: "10px"}}>Home</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/reserve"}>Reserve a Table</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/login"}>Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/reserve" element={<ReserveATable/>}></Route>
                <Route path="/about" element={<AboutUs/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    );
}

export default Header;