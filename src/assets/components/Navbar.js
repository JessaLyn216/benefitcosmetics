import { Link } from "react-router-dom";

import {AiOutlineShoppingCart} from '@react-icons/all-files/ai/AiOutlineShoppingCart';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="benefit logo" />
            </div>
            <div className="links">
                <Link to='/'><div className="nav-link active">Home</div></Link>
                <Link to='/products'><div className="nav-link">Products</div></Link>
                <div className="nav-link">Services</div>
                <div className="nav-link">Blog</div>
                <div className="nav-link">Hello</div>
            </div>
            <span class="click-icon cart"><AiOutlineShoppingCart /></span>
        </div>
    )
}

export default Navbar;