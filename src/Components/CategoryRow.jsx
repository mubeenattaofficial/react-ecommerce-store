
import { useRef } from "react";
import ProductCard from "./ProductCard";

const CategoryRow = ({ title, products, addToCart, slug }) => {
    const scrollRef = useRef(null);

    const scrollProducts = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction * 600,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="category-row mb-5" id={slug}>
            <div className="category-heading">
                <h2 className="category-title">{title}</h2>

                <div className="category-arrows">
                    <button
                        className="scroll-arrow"
                        aria-label={`Scroll ${title} left`}
                        onClick={() => scrollProducts(-1)}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>

                    <button
                        className="scroll-arrow"
                        aria-label={`Scroll ${title} right`}
                        onClick={() => scrollProducts(1)}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className="product-row" ref={scrollRef}>
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <ProductCard
                            product={product}
                            addToCart={addToCart}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryRow;
