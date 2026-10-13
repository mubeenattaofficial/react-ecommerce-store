import "./CategorySection.css"

const CategorySection = ({ allProducts, addToCart }) => {
    const furnitureProducts = allProducts.filter(p => p.category === "furniture");
    const beautyProducts = allProducts.filter(products => products.category === "beauty");
    const kitchenProducts = allProducts.filter(products => products.category === "kitchen-accessories");


    return (
        <>
            <section className="container my-5">
                <h2 className="fw-bold mb-2">Furniture</h2>

                <div className="product-row">
                    {
                        furnitureProducts.map((products) => (

                            <div className="product-card card shadow-sm border-0" key={products.id}>
                                <div className="card-body d-flex flex-column">

                                    <img src={products.thumbnail} className="card-img-top" alt={products.title} style={{ height: "180px", objectFit: "contain" }} />
                                    <h5 className="card-title mb-2">{products.title}</h5>
                                    <p className="text-muted small mb-1">Category: {products.category}</p>
                                    <p className="text-muted small mb-2">Brand: {products.brand}</p>
                                    <p className="mb-2">⭐ {products.rating}</p>
                                    <h5 className="fw-bold mb-3">${products.price}</h5>

                                    <button className="btn btn-dark w-100 rounded-pill mt-auto">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        ))

                    }
                </div>

                <h2 className="fw-bold my-2">Beauty</h2>

                <div className="product-row">
                    {
                        beautyProducts.map((products) => (

                            <div className="product-card card shadow-sm border-0" key={products.id}>
                                <div className="card-body d-flex flex-column">

                                    <img src={products.thumbnail} className="card-img-top" alt={products.title} style={{ height: "180px", objectFit: "contain" }} />
                                    <h5 className="card-title mb-2">{products.title}</h5>
                                    <p className="text-muted small mb-1">Category: {products.category}</p>
                                    <p className="text-muted small mb-2">Brand: {products.brand}</p>
                                    <p className="mb-2">⭐ {products.rating}</p>
                                    <h5 className="fw-bold mb-3">${products.price}</h5>

                                    <button className="btn btn-dark w-100 rounded-pill mt-auto">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        ))

                    }
                </div>

                <h2 className="fw-bold my-2">Kitchen Accessories</h2>

                <div className="product-row">
                    {
                        kitchenProducts.map((products) => (

                            <div className="product-card card shadow-sm border-0" key={products.id}>
                                <div className="card-body d-flex flex-column">

                                    <img src={products.thumbnail} className="card-img-top" alt={products.title} style={{ height: "180px", objectFit: "contain" }} />
                                    <h5 className="card-title mb-2">{products.title}</h5>
                                    <p className="text-muted small mb-1">Category: {products.category}</p>
                                    <p className="text-muted small mb-2">Brand: {products.brand}</p>
                                    <p className="mb-2">⭐ {products.rating}</p>
                                    <h5 className="fw-bold mb-3">${products.price}</h5>

                                    <button className="btn btn-dark w-100 rounded-pill mt-auto">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        ))

                    }
                </div>

            </section>
        </>
    )
}

export default CategorySection;