
const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card card h-100">
            <div className="product-image-wrapper">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                    loading="lazy"
                />
            </div>

            <div className="card-body d-flex flex-column">
                <h5 className="product-title" title={product.title}>
                    {product.title}
                </h5>

                <p className="product-brand">
                    {product.brand || "No Brand"}
                </p>

                <p className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    {" "}{product.rating}
                </p>

                <h5 className="product-price">
                    ${product.price}
                </h5>

                <button
                    className="btn btn-success rounded-pill w-100 mt-auto"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
