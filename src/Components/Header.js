import "../Styles/Header.css"
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Menu from "../Pages/Menu";
import ReserveATable from "../Pages/ReserveATable";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import logo from "../assets/Little-Lemon-Logo.png"



function Header() {
    return (
        <div>
            <div className="header" >
                <img src={logo} style={{height: "50px", margin: "15px"}} />
                <nav className="header-nav">
                    <Link className={"navLink"} to={"/"}>Home</Link>
                    <Link className={"navLink"} to={"/menu"}>Menu</Link>
                    <Link className={"navLink"} to={"/reserve"}>Reserve a Table</Link>
                    <Link className={"navLink"} to={"/about"}>About Us</Link>
                    <Link className={"navLink"} to={"/login"}>Login</Link>
                </nav>
            </div>
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