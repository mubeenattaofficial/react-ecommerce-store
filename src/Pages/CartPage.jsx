import Cart from "../Components/Cart";

const CartPage = ({ cart, incrementCount, decrementCount, total, removeProduct, clearCart, cartQuantity }) => {
    return (
        <>
            <Cart
                cart={cart}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                removeProduct={removeProduct}
                total={total}
                clearCart={clearCart}
                cartQuantity={cartQuantity}

            />
        </>
    )
}
export default CartPage;