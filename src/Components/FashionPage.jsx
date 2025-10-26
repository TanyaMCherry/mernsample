import React, { useState } from 'react';
import '../assets/css/FashionPage.css'; 
import ItemCard from '../Components/ItemCard';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/images/fashion/item1.jpg';
import img2 from '../assets/images/fashion/item2.jpg';
import img3 from '../assets/images/fashion/item3.jpg';
import img4 from '../assets/images/fashion/item4.jpg';
import img5 from '../assets/images/fashion/item5.jpg';
import img6 from '../assets/images/fashion/item6.jpg';
import img7 from '../assets/images/fashion/item7.jpg';
import img8 from '../assets/images/fashion/item8.jpg';
import img9 from '../assets/images/fashion/item9.jpeg';
import img10 from '../assets/images/fashion/item10.jpg';
import img11 from '../assets/images/fashion/item11.jpg';
import img12 from '../assets/images/fashion/item12.jpg';
import img13 from '../assets/images/fashion/item13.png';
import img14 from '../assets/images/fashion/item14.jpg';
import img15 from '../assets/images/fashion/item15.png';

const fashionItems = [
  { image: img1, title: "Floral Kurti", description: "Elegant block print cotton kurti.", price: "₹799", rating: 4.5 },
  { image: img2, title: "Pastel Jumpsuit", description: "Comfortable pastel pink jumpsuit.", price: "₹999", rating: 4.2 },
  { image: img3, title: "Black Shirt", description: "Men’s printed casual shirt.", price: "₹649", rating: 4.3 },
  { image: img4, title: "Linen Set", description: "Breathable beige shirt & pants.", price: "₹1399", rating: 4.1 },
  { image: img5, title: "Slim Fit Jeans", description: "Classic blue stretch-fit jeans.", price: "₹1199", rating: 4.4 },
  { image: img6, title: "Navy Saree", description: "Royal navy blue ethnic saree.", price: "₹1799", rating: 4.7 },
  { image: img7, title: "Sky Hoodie", description: "Lightweight men’s hoodie.", price: "₹1099", rating: 4.2 },
  { image: img8, title: "Printed Maxi Skirt", description: "Colorful tiered cotton skirt.", price: "₹899", rating: 4.5 },
  { image: img9, title: "Floral Mini Dress", description: "Summer-ready short dress.", price: "₹699", rating: 4.0 },
  { image: img10, title: "Printed Nightsuit", description: "Comfy floral cotton nightsuit.", price: "₹799", rating: 4.6 },
  { image: img11, title: "Dungaree Dress", description: "Casual denim dungaree for girls.", price: "₹849", rating: 4.3 },
  { image: img12, title: "White Crop Tee", description: "Versatile cotton crop t-shirt.", price: "₹449", rating: 4.4 },
  { image: img13, title: "Red Lehenga", description: "Heavily embroidered bridal wear.", price: "₹4999", rating: 4.8 },
  { image: img14, title: "Olive Lounge Set", description: "Cozy loungewear with pockets.", price: "₹1299", rating: 4.1 },
  { image: img15, title: "Knit Cardigan Set", description: "Soft and stylish winter wear.", price: "₹1599", rating: 4.6 },
];

const FashionPage = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (index) => {
    setQuantities(prev => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  };

  const handleDecrement = (index) => {
    setQuantities(prev => ({
      ...prev,
      [index]: (prev[index] > 1 ? prev[index] - 1 : 1),
    }));
  };

  const handleAddToCart = (item, index) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex(cartItem => cartItem.title === item.title);

    const quantityToAdd = quantities[index] || 1;

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantityToAdd;
    } else {
      cart.push({
        image: item.image,
        title: item.title,
        description: item.description,
        price: parseFloat(item.price.replace("₹", "")),
        quantity: quantityToAdd,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.title} added to cart!`);
  };

  return (
    <Container className="mt-4 position-relative">
      <h2 className="mb-4 text-center fw-bold">Fashion</h2>

      <Row className="d-flex justify-content-center gap-4">
        {fashionItems.map((item, index) => (
          <div key={index} style={{ width: '18rem' }}>
            <ItemCard {...item} />
            <div className="d-flex justify-content-center align-items-center my-2 gap-2">
              <Button variant="secondary" onClick={() => handleDecrement(index)}>-</Button>
              <span>{quantities[index] || 1}</span>
              <Button variant="secondary" onClick={() => handleIncrement(index)}>+</Button>
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="dark" onClick={() => handleAddToCart(item, index)}>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </Row>

      {/* Back Button */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px' }}>
        <Button
          variant="dark"
          style={{ borderRadius: '30px', padding: '10px 20px', fontWeight: 'bold' }}
          onClick={() => navigate(-1)}
        >
          ⬅ Back
        </Button>
      </div>
    </Container>
  );
};

export default FashionPage;
