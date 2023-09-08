// import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from '@react-icons/all-files/ai/AiOutlineShoppingCart';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="benefit logo" />
            </div>
            <div className="links">
                <div className="nav-link active">Home</div>
                <div className="nav-link">Products</div>
                <div className="nav-link">Services</div>
                <div className="nav-link">Blog</div>
            </div>
            <span class="click-icon cart"><AiOutlineShoppingCart /></span>
        </div>
    )
}

export default Navbar;