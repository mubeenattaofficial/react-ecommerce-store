
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-3">
                <div className="container">
                    <a className="navbar-brand" href="#">MyShop</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;