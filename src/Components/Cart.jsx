
const Cart = ({ cart, incrementCount, decrementCount, total, removeProduct, clearCart, cartQuantity }) => {
    return (
        <>
            <section className="col-md-8">
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
                                                <span className="fs-3 d-flex justify-content-start">{cartItem.Product}- {cartItem.price}$</span>
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

            </section>
        </>
    )
};

export default Cart;