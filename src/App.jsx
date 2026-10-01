import { useState, useEffect } from "react"
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import "./App.css";

const App = () => {
    // let total = count * headphonePrice;
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");

    const [checkout, setCheckout] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });


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

    const products = [
        {
            id: 1,
            Product: "Wireless Headphones",
            price: 49,
            category: "Wireless"
        },
        {
            id: 2,
            Product: "Gaming Mouse",
            price: 29,
            category: "Gaming"
        },
        {
            id: 3,
            Product: "Mechanical Keyboard",
            price: 79,
            category: "Keyboard"
        },
        {
            id: 4,
            Product: "Gaming LCD 64-inch",
            price: 804,
            category: "Gaming"
        }
    ];


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

    // decide karta hai woh products kis order mein show honge.
    const sortingProducts = (products) => {
        if (sort === "lowToHigh") {
            return [...products].sort((a, b) => a.price - b.price);
        }
        else if (sort === "highToLow") {
            return [...products].sort((a, b) => b.price - a.price);
        }
        else {
            return products;
        }
    };

    // decide karta hai kaunse products show honge.
    const filteredProducts = products.filter((product) => {
        if (search !== "") {
            return product.Product.toLowerCase().includes(search.toLowerCase());
        }
        else if (category !== "all") {
            return product.category === category;
        }
        else {
            return true;
        }
    });

    const sortedProducts = sortingProducts(filteredProducts);

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
        <div className="row">
            <Products
                addToCart={addToCart}
                products={sortedProducts}
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
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


    )

}

export default App