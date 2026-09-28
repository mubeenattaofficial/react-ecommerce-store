import { useState } from "react"
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import "./App.css";

const App = () => {
    // let total = count * headphonePrice;
    let [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");


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
            // count={count}
            />
        </div>


    )

}

export default App