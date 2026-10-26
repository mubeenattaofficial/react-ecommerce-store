import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css"

const Navbar = ({cartQuantity}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg custom-navbar pt-3">

            <div className="container">

                {/* First row: Logo + Search + Cart */}
                <div className="navbar-top">

                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <NavLink className="navbar-brand mubeenLogoSection fw-bold" to="/">
                        <div className="brand-logo">
                            M
                        </div>
                        <div>
                            <div>Mubeen</div>
                            <small>SHOP YOUR WAY</small>
                        </div>
                    </NavLink>

                    <div className="navbar-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products..."
                        />
                        <button className="search-btn">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>

                    <NavLink to="/cart"
                        className={({ isActive }) =>
                            isActive ? "navbar-cart active" : "navbar-cart"
                        }
                    >
                        <i className="bi bi-cart3"></i>
                        <span className="cart-badge">{cartQuantity()}</span>
                    </NavLink>

                </div>

                {/* Second row: Navigation links */}
                <div className="navbar-bottom">
                    <div
                        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                    to="/Products"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Products
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                    to="/about"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;