import { useState, useEffect } from "react"
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CategorySection from "./Components/CategorySection";

import "./App.css";

const App = () => {

    let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [categories, setCategories] = useState([]);
    const [sort, setSort] = useState("default");
    const [product, setProduct] = useState([]);

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

    useEffect(() => {
        let url;
        const controller = new AbortController();

        if (search !== "") {
            url = `https://dummyjson.com/products/search?q=${search}`;
        }
        else if (category !== "all") {
            url = `https://dummyjson.com/products/category/${category}`;
        }
        else {
            url = 'https://dummyjson.com/products';
        }

        if (sort === "lowToHigh") {
            url += url.includes("?") ? "&sortBy=price&order=asc" : "?sortBy=price&order=asc";
        }
        else if (sort === "highToLow") {
            url += url.includes("?") ? "&sortBy=price&order=desc" : "?sortBy=price&order=desc";
        }

        fetch(url, { signal: controller.signal })
            .then(res => res.json())
            .then(data => setProduct(data.products))
            .catch(err => {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            });

        return () => controller.abort();

    }, [search, category, sort]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);




    function incrementCount(product) {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === product.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem;
        });
        setCart(updatedCart);

    }

    function decrementCount(product) {

        if (product.quantity === 1) {
            removeProduct(product);
        }
        else {
            const cartSubtract = cart.map((cartItem) => {
                if (cartItem.id === product.id) {

                    return { ...cartItem, quantity: cartItem.quantity - 1 }

                }
                return cartItem;
            });
            setCart(cartSubtract);
        }
    }

    const removeProduct = (product) => {
        const removeFromCart = cart.filter((cartItem) => cartItem.id !== product.id);
        setCart(removeFromCart);
    }

    const clearCart = () => {
        setCart([]);
    };

    function total() {

        const total = cart.reduce((sum, cartItems) => {

            return sum + (cartItems.price * cartItems.quantity);

        }, 0);

        return total;
    }

    function cartQuantity() {

        const cartQuantity = cart.reduce((sum, cartItems) => {

            return sum + cartItems.quantity;

        }, 0);

        return cartQuantity;
    }

    function addToCart(product) {
        const isExist = cart.some((cartItem) => cartItem.id === product.id);
        if (isExist) {
            incrementCount(product);
        }
        else {
            const cartItem = { ...product, quantity: 1 }
            setCart([...cart, cartItem]);
        }
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

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

            <Navbar />
            <HeroSection />
            <CategorySection 
                allProducts={allProducts}
                addToCart={addToCart}
            />

            <div className="row">


                <Products
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

                <Cart
                    cart={cart}
                    incrementCount={incrementCount}
                    decrementCount={decrementCount}
                    removeProduct={removeProduct}
                    total={total}
                    clearCart={clearCart}
                    cartQuantity={cartQuantity}

                />
                <div className="container my-5">

                    <div className="d-flex justify-content-center">

                        <form onSubmit={handleSubmit} className="card shadow-lg border-0 p-4" style={{ maxWidth: "500px", width: "100%" }}>

                            <div className="text-center mb-4">
                                <h3 className="fw-bold mb-2">ORDER FORM</h3>
                                <p className="text-muted mb-0">Enter your details to place your order</p>
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder="Name" className="form-control border-dark" value={checkout.name} onChange={(e) => setCheckout({ ...checkout, name: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <input type="email" placeholder="Email" className="form-control border-dark" value={checkout.email} onChange={(e) => setCheckout({ ...checkout, email: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder="Phone" className="form-control border-dark" value={checkout.phone} onChange={(e) => setCheckout({ ...checkout, phone: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <input type="text" placeholder="Address" className="form-control border-dark" value={checkout.address} onChange={(e) => setCheckout({ ...checkout, address: e.target.value })} />
                            </div>

                            <button type="submit" className="btn btn-success rounded-pill fw-semibold w-100">Place Order</button>

                        </form>

                    </div>

                </div>



            </div>

        </>


    )

}

export default App