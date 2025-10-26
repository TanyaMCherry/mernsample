import React, { useEffect, useState } from "react";
import { Container, Table, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cleanedCart = storedCart.map(item => ({
      ...item,
      price: parseFloat(item.price),
      quantity: parseInt(item.quantity) || 1
    }));
    setCartItems(cleanedCart);
  }, []);

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const GST_RATE = 0.18;
  const subtotal = getSubtotal();
  const gstAmount = subtotal * GST_RATE;
  const grandTotal = subtotal + gstAmount;

  const handlePayment = () => {
    if (paymentMethod === "cod") {
      alert("Order placed successfully! Pay on delivery.");
    } else {
      alert(`Payment of ₹${grandTotal.toFixed(2)} via ${paymentMethod.toUpperCase()} successful!`);
    }
    
    localStorage.removeItem("cart");
    navigate("/home");
  };  

  return (
    <Container style={{ padding: "40px 0" }}>
      <h2 className="mb-4 text-center">Payment Summary</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>Product</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Qty</th>
            <th>Subtotal (₹)</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, idx) => (
            <tr key={idx} className="text-center align-middle">
              <td>
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  rounded
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-end mb-4">
        <p>Subtotal: ₹ {subtotal.toFixed(2)}</p>
        <p>GST (18%): ₹ {gstAmount.toFixed(2)}</p>
        <h5>Total Payable: ₹ {grandTotal.toFixed(2)}</h5>
      </div>

      <h5>Select Payment Method:</h5>
      <Form>
        <Form.Check
          type="radio"
          label="UPI"
          name="payment"
          id="upi"
          value="upi"
          checked={paymentMethod === "upi"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="Credit/Debit Card"
          name="payment"
          id="card"
          value="card"
          checked={paymentMethod === "card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="Cash on Delivery"
          name="payment"
          id="cod"
          value="cod"
          checked={paymentMethod === "cod"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      </Form>

      <div className="text-end mt-4">
  <Button
    variant={paymentMethod === "cod" ? "primary" : "success"}
    size="lg"
    onClick={handlePayment}
  >
    {paymentMethod === "cod" ? "Confirm Order" : `Proceed to Pay ₹ ${grandTotal.toFixed(2)}`}
  </Button>
</div>

    </Container>
  );
};

export default PaymentPage;
