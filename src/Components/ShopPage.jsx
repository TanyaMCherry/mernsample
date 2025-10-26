import React from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import shirt from '../assets/images/shirt.jpg';
import jeans from '../assets/images/jeans.jpg';
import jacket from '../assets/images/jacket.jpg';
import shirts from '../assets/images/shirts.avif';
import pants from '../assets/images/pants.jpg';
import shoes from '../assets/images/shoes.jpg';
import '../assets/css/ShopPage.css'; 
import kid1 from '../assets/images/beauty/kid1.jpg';
import kid2 from '../assets/images/beauty/kid2.jpeg';
import kid3 from '../assets/images/beauty/kid3.jpg';

const ShopPage = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex(cartItem => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.title} added to cart!`);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
            WardrobeX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/shop")}>Shop</Nav.Link>
              <Nav.Link onClick={() => navigate("/product")}>Product</Nav.Link>
              <Nav.Link onClick={() => navigate("/cart")}>
                🛒 Cart
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
              <Nav.Link onClick={() => navigate("/")}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Shop Content */}
      <Container className="my-5">
        {/* Featured Products */}
        <h3 className="mb-4 text-center blink-heading">Featured Products</h3>

        <Row className="mb-5 justify-content-center">
          {[
            {
              title: "Trendy T-Shirt",
              price: "Rs. 2000",
              img: shirt
            },
            {
              title: "Stylish Jeans",
              price: "Rs. 3000",
              img: jeans
            },
            {
              title: "Cool Jacket",
              price: "Rs. 2500",
              img: jacket
            }
          ].map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart({
                      title: item.title,
                      price: parseFloat(item.price.replace("Rs. ", "")),
                      image: item.img
                    })}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Shop by Category */}
        <h3 className="mb-4 text-center blink-heading">Shop by Category</h3>

        <Row className="justify-content-center">
          {[
            {
              name: "Shirts",
              img: shirts
            },
            {
              name: "Pants",
              img: pants
            },
            {
              name: "Shoes",
              img: shoes
            }
          ].map((cat, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="text-center h-100">
                <Card.Img
                  variant="top"
                  src={cat.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{cat.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Kids Section */}
        <h3 className="mb-4 text-center blink-heading">Kids Collection</h3>
        <Row className="justify-content-center mb-5">
          {[
            {
              title: "Cartoon T-Shirt",
              price: "Rs. 899",
              img: kid1
            },
            {
              title: "Mini Denim Set",
              price: "Rs. 1299",
              img: kid2
            },
            {
              title: "Cute Hoodie",
              price: "Rs. 999",
              img: kid3
            }
          ].map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button
                    variant="warning"
                    onClick={() => handleAddToCart({
                      title: item.title,
                      price: parseFloat(item.price.replace("Rs. ", "")),
                      image: item.img
                    })}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>

      {/* WardrobeX Cares Section */}
      <div
        style={{
          backgroundColor: "#212529",
          color: "#ffffff",
          padding: "40px 20px",
          marginTop: "60px",
        }}
      >
        <Container className="text-center">
          <h3 style={{ marginBottom: "20px" }}>WardrobeX Cares</h3>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            We do not ask for your bank account or card details verbally or
            telephonically. Do not divulge these to fraudsters and imposters
            claiming to be calling on our behalf.
          </p>
        </Container>
      </div>
    </>
  );
};

export default ShopPage;
