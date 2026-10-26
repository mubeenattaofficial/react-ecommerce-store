import "./Cart.css";
import { Link } from "react-router";

const Cart = ({ cart, incrementCount, decrementCount, total, removeProduct, clearCart, cartQuantity }) => {
    return (
        <>
            <section className="container cart-page py-5">
                <div className="cart-header mb-4">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="row g-5 cart-layout">
                    <div className="col-12 col-lg-8">
                        <div className="cart-products">
                            {
                                cart.length > 0 ?
                                    cart.map((cartItem) => {
                                        return (
                                            <div className="cart-product-item" key={cartItem.id}>
                                                <div className="cart-product-info">
                                                    <img
                                                        src={cartItem.thumbnail}
                                                        alt={cartItem.title}
                                                        className="cart-product-image"
                                                    />
                                                    <div>
                                                        <h5>{cartItem.title}</h5>
                                                        <p>${cartItem.price}</p>
                                                    </div>
                                                </div>
                                                <div className="cart-product-actions">
                                                    <div className="cart-quantity">
                                                        <button
                                                            onClick={() => decrementCount(cartItem)}
                                                            className="btn"
                                                        >
                                                            −
                                                        </button>

                                                        <span>{cartItem.quantity}</span>

                                                        <button
                                                            onClick={() => incrementCount(cartItem)}
                                                            className="btn"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeProduct(cartItem)}
                                                        className="btn cart-remove-btn"
                                                        aria-label={`Remove ${cartItem.title}`}
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        );
                                    })

                                    : <div className="text-center pt-5">
                                        Cart is Empty
                                    </div>

                            }
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="cart-summary">
                            <h4>Order Summary</h4>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${total().toFixed(2)}</span>
                            </div>

                            <div className="summary-row">
                                <span>Shipping</span>
                                <span className="free-shipping">Free</span>
                            </div>

                            <hr />

                            <div className="summary-total">
                                <span>Total</span>
                                <span>${total().toFixed(2)}</span>
                            </div>

                            <button className="checkout-btn">
                                Proceed to Checkout
                            </button>

                            <Link to="/Products" className="continue-shopping">
                                Continue Shopping
                            </Link>

                            <button
                                className="clear-cart-btn"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="col-12">
                <div>
                    <div id="cart" className="card border-3 bg-dark text-light pt-3 mt-3">
                        <div className="text-center">
                            <h3 className="fs-1 fw-bold pb-3 col">Your Cart</h3>
                            <h5 className="lead fs-3 col">Cart items ( {cartQuantity()} )</h5>
                        </div>

                        {
                            cart.length > 0 ?
                                cart.map((cartItem) => {
                                    return (
                                        <div className="mt-3 fs-4 " key={cartItem.id}>
                                            <div className=" d-flex justify-content-around">
                                                <span className="fs-3 d-flex justify-content-start">{cartItem.title}- {cartItem.price}$</span>
                                                <div className="d-flex align-items-center gap-2">
                                                    <button onClick={() => incrementCount(cartItem)} className="btn btn-primary rounded-circle fw-bold p-0" style={{ width: "30px", height: "30px" }}>+</button>
                                                    <p className="fs-4 mb-0 px-2">{cartItem.quantity}</p>
                                                    <button onClick={() => decrementCount(cartItem)} className="btn btn-primary rounded-circle fw-bold p-0" style={{ width: "30px", height: "30px" }}> −</button>
                                                    <button onClick={() => removeProduct(cartItem)} className="btn btn-danger rounded-pill fw-bold p-1 ms-3" style={{ width: "50px", height: "30px" }} ><i className="bi bi-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })

                                : <div className="text-center pt-5">
                                    Cart is Empty
                                </div>

                        }
                        <hr className="border-2 mt-5" />

                        <div className="d-flex justify-content-end">
                            <p className="container text-center display-6 d-flex justify-content-between">
                                Total Bill: <span>{total()}$</span> </p>
                            <button onClick={clearCart} className="btn btn-dark rounded-pill fw-bold shadow mt-2 mx-4" style={{ width: "150px", height: "45px", backgroundColor: "#a10808", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)" }}><i className="bi bi-trash"></i> Clear Cart </button>
                        </div>
                    </div>

                </div>

            </section> */}
        </>
    )
};

export default Cart;