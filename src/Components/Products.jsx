
const Products = ({ addToCart, products, search, setSearch, category, setCategory, sort, setSort, categories }) => {

    return (
        <>
            {/* <h3 className="container text-center fs-1 py-3 fw-bolder bg-dark text-light">Our Products</h3> */}
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
                        {categories.map((category) => (
                            <option key={category.slug} value={category.slug}>{category.name}</option>
                        ))}

                    </select>

                    <select value={sort} onChange={(e) => { setSort(e.target.value) }} className="form-select ms-3 border-2 border-black rounded-pill" style={{ width: "200px" }}>
                        <option value="default">Default Pricing</option>
                        <option value="lowToHigh">Low to High Pricing</option>
                        <option value="highToLow">High to Low Pricing</option>
                    </select>
                </span>
            </div>


            {
                products.length > 0 ?

                    <div className="container py-4" style={{ backgroundColor: "#f5f5f5" }}>
                        <div className="row g-3">

                            {products.map((p) => (
                                <div className="col-6 col-md-4 col-lg-3" key={p.id}>

                                    {/* Product card */}
                                    <div className="card h-100 shadow-sm border-0">

                                        {/* Product image */}
                                        <img
                                            src={p.thumbnail}
                                            className="card-img-top"
                                            alt={p.title}
                                            style={{
                                                height: "180px",
                                                objectFit: "contain"
                                            }}
                                        />

                                        <div className="card-body d-flex flex-column">

                                            {/* Product title */}
                                            <h5 className="card-title mb-2">
                                                {p.title}
                                            </h5>

                                            {/* Product category */}
                                            <p className="text-muted small mb-1">
                                                Category: {p.category}
                                            </p>

                                            {/* Product brand */}
                                            <p className="text-muted small mb-2">
                                                Brand: {p.brand || "No Brand"}
                                            </p>

                                            {/* Rating */}
                                            <p className="mb-2">
                                                ⭐ {p.rating}
                                            </p>

                                            {/* Product price */}
                                            <h5 className="fw-bold mb-3">
                                                ${p.price}
                                            </h5>

                                            {/* Button stays at the bottom */}
                                            <button
                                                onClick={() => addToCart(p)}
                                                className="btn btn-dark w-100 rounded-pill mt-auto"
                                            >
                                                Add to Cart
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div> :
                    <div className="text-center pt-5 my-5 fs-3">
                        Product Not Found...
                    </div>
            }

        </>
    )
}

export default Products;