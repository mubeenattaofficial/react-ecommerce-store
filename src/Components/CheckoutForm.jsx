

const CheckoutForm = ({ checkout, setCheckout, handleSubmit }) => {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center">
                <form
                    onSubmit={handleSubmit}
                    className="card shadow-lg border-0 p-4"
                    style={{ maxWidth: "500px", width: "100%" }}
                >
                    <div className="text-center mb-4">
                        <h3 className="fw-bold mb-2">ORDER FORM</h3>
                        <p className="text-muted mb-0">
                            Enter your details to place your order
                        </p>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control border-dark"
                            value={checkout.name}
                            onChange={(e) =>
                                setCheckout({ ...checkout, name: e.target.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control border-dark"
                            value={checkout.email}
                            onChange={(e) =>
                                setCheckout({ ...checkout, email: e.target.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Phone"
                            className="form-control border-dark"
                            value={checkout.phone}
                            onChange={(e) =>
                                setCheckout({ ...checkout, phone: e.target.value })
                            }
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Address"
                            className="form-control border-dark"
                            value={checkout.address}
                            onChange={(e) =>
                                setCheckout({ ...checkout, address: e.target.value })
                            }
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success rounded-pill fw-semibold w-100"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;