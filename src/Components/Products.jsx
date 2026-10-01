
const Products = ({ addToCart, products, search, setSearch, category, setCategory, sort, setSort }) => {

    return (
        <>
            <h3 className="container text-center fs-1 py-3 fw-bolder bg-dark text-light">Our Products</h3>
            <div className="m-3 position-relative d-flex">
                <i className="bi bi-search position-absolute top-50 start-20 translate-middle-y ms-3"></i>
                <input
                    type="text"
                    placeholder="  Search products... "
                    value={search}
                    onChange={(e) => { setSearch(e.target.value), setCategory("all") }}
                    className="ps-5 pe-3 py-2 rounded-pill"
                    style={{
                        width: "300px",
                        border: "2px solid #212529",
                        outline: "none"
                    }}
                />
                <span className="row">

                    <select value={category} onChange={(e) => { setCategory(e.target.value), setSearch("") }} className="form-select ms-3 border-2 border-black rounded-pill" style={{ width: "200px" }}>
                        <option value="all">All Categories</option>
                        <option value="Wireless">Wireless</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Keyboard">Keyboard</option>
                    </select>

                    <select value={sort} onChange={(e) => { setSort(e.target.value) }} className="form-select ms-3 border-2 border-black rounded-pill" style={{ width: "200px" }}>
                        <option value="default">Default Pricing</option>
                        <option value="lowToHigh">Low to High Pricing</option>
                        <option value="highToLow">High to Low Pricing</option>
                    </select>
                </span>
            </div>


            {
                products.length > 0 ? products.map((p) => {
                    return (
                        <div className="d-flex col-md-6" key={p.id}>
                            <div className="app card border-3">
                                <h3 className="display-6">{p.Product}</h3>

                                <div className="d-flex justify-content-between">
                                    <p className="fs-3">
                                        Price: <strong>{p.price}$</strong>
                                    </p>
                                </div>

                                <button
                                    onClick={() => addToCart(p)}
                                    className="btn btn-dark rounded-pill mt-3" style={{ width: "500px" }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                            </div>
                    );
                }) :
                    <div className="text-center pt-5 my-5 fs-3">
                        Product Not Found...
                    </div>
            }

        </>
    )
}

export default Products;