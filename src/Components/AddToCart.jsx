import React, { useEffect, useState } from "react";
import { Container, Table, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddToCartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cleanedCart = storedCart.map(item => ({
      ...item,
      price: parseFloat(item.price),
      quantity: item.quantity && parseInt(item.quantity) > 0 ? parseInt(item.quantity) : 1
    }));
    setCartItems(cleanedCart);
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += delta;

    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1; // Minimum quantity is 1
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <Container style={{ padding: "40px 0" }}>
      <h2 className="mb-4 text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Button variant="dark" onClick={() => navigate("/home")}>
            Go Shopping
          </Button>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr className="text-center">
                <th>Product Image</th>
                <th>Name</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Subtotal (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="text-center align-middle">
                  <td>
                    <Image
                      src={item.image}
                      alt={item.title}
                      rounded
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Button variant="secondary" size="sm" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="secondary" size="sm" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                    </div>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end d-flex justify-content-between align-items-center">
            <div>
              <h5>Total: ₹ {getTotal()}</h5>
            </div>
            <div className="d-flex gap-2">
              <Button variant="danger" onClick={handleClearCart}>
                Clear Cart
              </Button>
              <Button variant="success" onClick={handleProceedToPayment}>
                Proceed to Payment
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default AddToCartPage;
