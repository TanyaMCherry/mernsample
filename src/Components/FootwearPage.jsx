import React, { useState } from 'react';
import '../assets/css/FashionPage.css'; 
import ItemCard from '../Components/ItemCard';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/images/footwear/item1.jpg';
import img2 from '../assets/images/footwear/item2.webp';
import img3 from '../assets/images/footwear/item3.jpeg';
import img4 from '../assets/images/footwear/item4.jpeg';
import img5 from '../assets/images/footwear/item5.png';
import img6 from '../assets/images/footwear/item6.png';
import img7 from '../assets/images/footwear/item7.png';
import img8 from '../assets/images/footwear/item8.jpg';
import img9 from '../assets/images/footwear/item9.png';
import img10 from '../assets/images/footwear/item10.png';
import img11 from '../assets/images/footwear/item11.png';
import img12 from '../assets/images/footwear/item12.png';
import img13 from '../assets/images/footwear/item13.png';
import img14 from '../assets/images/footwear/item14.png';
import img15 from '../assets/images/footwear/item15.png';

const footwearProducts = [
  { image: img1, title: "Black Sequin Stilettos", description: "Elegant black high heels with sequin shine.", price: "₹2499", rating: 4.5 },
  { image: img2, title: "Black Ankle Strap Heels", description: "Pointed-toe heels with sleek ankle straps.", price: "₹1999", rating: 4.7 },
  { image: img3, title: "Blue Leather Oxford Shoes", description: "Stylish blue leather lace-up oxfords.", price: "₹3499", rating: 4.8 },
  { image: img4, title: "Black Gold-Detail Sneakers", description: "High-top sneakers with luxe gold accents.", price: "₹2799", rating: 4.3 },
  { image: img5, title: "White Adidas Sneakers", description: "Classic white sneakers with Adidas stripes.", price: "₹4299", rating: 4.5 },
  { image: img6, title: "Gucci Ace Sneakers", description: "Luxury sneakers with iconic Gucci stripe.", price: "₹5000", rating: 4.8 },
  { image: img7, title: "Puma Suede Classic", description: "Beige suede sneakers with classic flair.", price: "₹3999", rating: 4.9 },
  { image: img8, title: "Black Leather Trainers", description: "Sleek black trainers with white soles.", price: "₹2599", rating: 4.6 },
  { image: img9, title: "Red Loafers", description: "Bold red loafers with metal detailing.", price: "₹3299", rating: 4.4 },
  { image: img10, title: "H&M Baby Sandals", description: "Soft floral sandals for baby girls.", price: "₹1999", rating: 4.5 },
  { image: img11, title: "Tan Flat Sandals", description: "Casual tan flats for everyday wear.", price: "₹1199", rating: 4.9 },
  { image: img12, title: "Blue Strap Heels", description: "Block heels in pastel blue tones.", price: "₹1899", rating: 4.9 },
  { image: img13, title: "Nike Air Red & White", description: "Sporty sneakers with bold red style.", price: "₹7495", rating: 4.5 },
  { image: img14, title: "Crocs Navy Clogs", description: "Comfy navy clogs with red accents.", price: "₹2995", rating: 4.8 },
  { image: img15, title: "Beige Kitten Heels", description: "Chic beige heels with a soft bow.", price: "₹1799", rating: 4.7 },
];

const FootwearPage = () => {
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
      <h2 className="mb-4 text-center fw-bold">Footwear</h2>

      <Row className="d-flex justify-content-center gap-4">
        {footwearProducts.map((item, index) => (
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
          onClick={() => navigate(-1)} // Go to previous page
        >
          ⬅ Back
        </Button>
      </div>
    </Container>
  );
};

export default FootwearPage;
