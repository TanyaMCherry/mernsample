import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/ProductPage.css"; // custom styles
import titan from "../assets/images/titan.jpg"
import tommy from "../assets/images/tommy.jpg"
import kurti from "../assets/images/kurti.jpg"
import top from "../assets/images/top.jpg"
import dress from "../assets/images/dress.jpg"

const ProductPage = () => {
  const navigate = useNavigate();

  const featured = [
    {
      img: titan,
      title: "Timeless Gifts For Loved Ones",
      brand: "RAGA by TITAN",
      size: "300px"
    },
    {
      img: tommy,
      title: "Expertly Crafted Watches",
      brand: "TOMMY HILFIGER",
      size: "300px"
    }
  ];

  const sponsored = [
    {
      img: kurti,
      title: "LetsDressUp",
      desc: "Kurtis",
      price: "₹849 (49% OFF)"
    },
    {
      img: top,
      title: "Pannkh",
      desc: "Tops",
      price: "₹479 (52% OFF)"
    },
    {
      img: dress,
      title: "LetsDressUp",
      desc: "Dresses",
      price: "₹849 (50% OFF)"
    }
  ];

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

      <Container className="my-4">
        {/* Featured Brands */}
        <h3 className="twinkle-heading text-center mb-4">FEATURED BRANDS</h3>
        <Row>
  {featured.map((item, index) => (
    <Col md={6} key={index} className="mb-3">
      <Card className="shadow-sm border-0">
        <Card.Img variant="top" src={item.img} className="featured-img" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="text-muted">{item.brand}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


        {/* Sponsored Brands */}
        <h3 className="twinkle-heading text-center mb-4">SPONSORED BRANDS</h3>
        <Row>
          {sponsored.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <Card.Text className="text-danger fw-semibold">
                    {item.price}
                  </Card.Text>
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

export default ProductPage;
