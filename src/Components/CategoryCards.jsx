import "./CategoryCards.css";

import CardFurniture from "../assets/CardFurniture.jfif"
import CardBeauty from "../assets/CardBeauty.jfif";
import CardKitchen from "../assets/CardKitchen.jfif";

const categories = [
    {
        title: "Furniture",
        description: "Stylish furniture for every space",
        icon: "bi-house-door-fill",
        image: CardFurniture,
        className: "furniture-card",
        title: "Furniture",
        slug: "furniture"
    },
    {
        title: "Beauty",
        description: "Look good, feel great",
        icon: "bi-stars",
        image: CardBeauty,
        className: "beauty-card",
        title: "Beauty",
        slug: "beauty"
    },
    {
        title: "Kitchen",
        description: "Smart tools for better cooking",
        icon: "bi-cup-hot-fill",
        image: CardKitchen,
        className: "kitchen-card",
        title: "Kitchen",
        slug: "kitchen-accessories"
    },
];


const CategoryCards = () => {
    return (
        <section className="container-fluid category-section py-4">
            <div className="row g-2">
                {categories.map((category) => (
                    <div className="col-4" key={category.title}>
                        <div className={`category-card ${category.className}`}>
                            <div className="category-content">
                                <div className="category-icon">
                                    <i className={`bi ${category.icon}`}></i>
                                </div>

                                <h3>{category.title}</h3>

                                <p>{category.description}</p>

                                <button
                                    type="button"
                                    className="category-btn"
                                    aria-label={`Explore ${category.title}`}
                                    onClick={() => {
                                        document.getElementById(category.slug)?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        });
                                    }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>

                            <div className="category-image">
                                <img src={category.image} alt={category.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryCards;
