
import "./CategorySection.css";
import CategoryRow from "./CategoryRow";

const categorySections = [
    {
        title: "Furniture",
        slug: "furniture"
    },
    {
        title: "Beauty",
        slug: "beauty"
    },
    {
        title: "Kitchen Accessories",
        slug: "kitchen-accessories"
    }
];

const CategorySection = ({ allProducts, addToCart }) => {
    return (
        <div className="container my-5">
            {categorySections.map((category) => {
                const categoryProducts = allProducts.filter(
                    (product) => product.category === category.slug
                );

                if (categoryProducts.length === 0) {
                    return null;
                }

                return (
                    <CategoryRow
                        key={category.slug}
                        slug={category.slug}
                        title={category.title}
                        products={categoryProducts}
                        addToCart={addToCart}
                    />
                );
            })}
        </div>
    );
};

export default CategorySection;
