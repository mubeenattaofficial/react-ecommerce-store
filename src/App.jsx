import { useState, useEffect } from "react"
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About"
import CheckoutForm from "./Components/CheckoutForm"
import useCart from "./hooks/useCart";
import useProducts from "./hooks/useProducts";
import { Route, Routes } from "react-router";

import "./App.css";

const App = () => {

    const {
        cart,
        addToCart,
        incrementCount,
        decrementCount,
        removeProduct,
        clearCart,
        total,
        cartQuantity
    } = useCart();

    const {
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort,
        product,
        categories
    } = useProducts();

    const [allProducts, setAllProducts] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=0")
            .then(res => res.json())
            .then(data => setAllProducts(data.products))
            .catch(err => console.error(err));
    }, []);

    const [checkout, setCheckout] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            customer: checkout,
            items: cart,
            total: total()
        };

        clearCart();

        console.log(order);
    }

    return (
        <>
            <Navbar
                cartQuantity={cartQuantity}
            />

            <Routes>
                <Route path="/" element={
                    <>
                        <Home
                            allProducts={allProducts}
                            addToCart={addToCart}
                        />
                    </>
                } />

                <Route path="Products" element={
                    <ProductsPage
                        addToCart={addToCart}
                        products={product}
                        search={search}
                        setSearch={setSearch}
                        category={category}
                        setCategory={setCategory}
                        sort={sort}
                        setSort={setSort}
                        categories={categories}
                    />
                } />

                <Route path="About" element={< About />} />

                <Route path="Cart" element={
                    <>
                        <CartPage
                            cart={cart}
                            incrementCount={incrementCount}
                            decrementCount={decrementCount}
                            removeProduct={removeProduct}
                            total={total}
                            clearCart={clearCart}
                            cartQuantity={cartQuantity}

                        />

                        <CheckoutForm
                            handleSubmit={handleSubmit}
                            checkout={checkout}
                            setCheckout={setCheckout}
                        />
                    </>


                } />

            </Routes>

        </>
    )

}

export default App;