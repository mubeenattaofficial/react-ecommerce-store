import { useState, useEffect } from "react";

const useCart = () => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

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

    return {
        cart,
        addToCart,
        incrementCount,
        decrementCount,
        removeProduct,
        clearCart,
        total,
        cartQuantity
    };
};

export default useCart;