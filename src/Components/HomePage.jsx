import React, { useState } from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedBrands from "../Components/FeaturedBrands";
import offer from "../assets/images/offer.avif";
import fashion from "../assets/images/fashion.png";
import beauty from "../assets/images/beauty.png";
import heels from "../assets/images/heels.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    switch (term) {
      case "fashion":
      case "beauty":
      case "footwear":
      case "accessories":
      case "home":
      case "home decor":
        navigate(`/category/${term === "home decor" ? "home" : term}`);
        break;
      case "shop":
        navigate("/shop");
        break;
      case "product":
        navigate("/product");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        alert("No matching category or page found.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
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
              <Nav.Link
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Sign Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Bar */}
      <div style={{ background: "#fff", padding: "20px 0" }}>
        <Container>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Search for brands and products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              style={{
                width: "60%",
                padding: "10px 15px",
                borderRadius: "25px",
                border: "1px solid #ced4da",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                marginLeft: "10px",
                padding: "10px 20px",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#212529",
                color: "#fff",
              }}
            >
              Search
            </button>
          </div>
        </Container>
      </div>

      {/* Category Icons Section */}
      <div style={{ background: "#f8f9fa", padding: "20px 0" }}>
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Fashion */}
          <div
            className="text-center mx-2 category-icon"
            onClick={() => navigate("/category/fashion")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={fashion}
              alt="Fashion"
              style={{ width: "60px", height: "60px" }}
            />
            <p>Fashion</p>
          </div>

          {/* Beauty */}
          <div
            className="text-center mx-2 category-icon"
            onClick={() => navigate("/category/beauty")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={beauty}
              alt="Beauty"
              style={{ width: "60px", height: "60px" }}
            />
            <p>Beauty</p>
          </div>

          {/* Footwear */}
          <div
            className="text-center mx-2 category-icon"
            onClick={() => navigate("/category/footwear")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={heels}
              alt="Footwear"
              style={{ width: "60px", height: "60px" }}
            />
            <p>Footwear</p>
          </div>

          {/* Accessories */}
          <div
            className="text-center mx-2 category-icon"
            onClick={() => navigate("/category/accessories")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://img.icons8.com/color/70/000000/necklace.png"
              alt="Accessories"
            />
            <p>Accessories</p>
          </div>

          {/* Home */}
          <div
            className="text-center mx-2 category-icon"
            onClick={() => navigate("/category/home")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://img.icons8.com/color/70/000000/sofa.png"
              alt="Home"
            />
            <p>Home</p>
          </div>
        </Container>
      </div>

      {/* Main Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/99s35zF.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Latest Fashion Trends</h3>
            <p>Discover styles that suit you.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/mSpZ2UF.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Exclusive Collections</h3>
            <p>Find your perfect outfit today.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/86WeGJq.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Style Redefined</h3>
            <p>Express yourself with fashion.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Offers Carousel */}
      <Carousel className="mt-5">
        <Carousel.Item>
          <img className="d-block w-100" src={offer} alt="Offer 1" />
          <Carousel.Caption>
            <h4>Buy 1 Get 1 Free</h4>
            <p>Limited time on select fashion styles.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/yAsF5hv.jpeg"
            alt="Offer 2"
          />
          <Carousel.Caption>
            <h4>Flat 40% Off</h4>
            <p>On beauty and skincare products.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/qjqGJkG.jpeg"
            alt="Offer 3"
          />
          <Carousel.Caption>
            <h4>Festive Combo Deals</h4>
            <p>Accessories + Footwear = Extra savings!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Featured Brands */}
      <FeaturedBrands />

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

      <style>
        {`
          .category-icon {
            transition: transform 0.3s ease;
            display: inline-block;
          }

          .category-icon:hover {
            transform: translateY(-8px) scale(1.1);
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
