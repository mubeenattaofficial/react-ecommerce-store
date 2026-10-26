import Products from "../Components/Products";


const ProductsPage = ({ addToCart, products, search, setSearch, category, setCategory, sort, setSort, categories }) => {
    return (
        <>
            <Products

                addToCart={addToCart}
                products={products}
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
                categories={categories}

            />
        </>
    )
}

export default ProductsPage;