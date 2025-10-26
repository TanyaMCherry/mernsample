import React, { useState } from 'react';
import '../assets/css/FashionPage.css'; 
import ItemCard from '../Components/ItemCard';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/images/beauty/item.1.jpg';
import img2 from '../assets/images/beauty/item.2.avif';
import img3 from '../assets/images/beauty/item.3.jpg';
import img4 from '../assets/images/beauty/item.4.jpeg';
import img5 from '../assets/images/beauty/item.5.jpg';
import img6 from '../assets/images/beauty/item.6.jpg';
import img7 from '../assets/images/beauty/item.7.png';
import img8 from '../assets/images/beauty/item.8.avif';
import img9 from '../assets/images/beauty/item.9.jpg';
import img10 from '../assets/images/beauty/item.10.avif';
import img11 from '../assets/images/beauty/item.11.jpg';
import img12 from '../assets/images/beauty/item.12.avif';
import img13 from '../assets/images/beauty/item.13.jpg';
import img14 from '../assets/images/beauty/item.14.jpg';
import img15 from '../assets/images/beauty/item.15.png';

const beautyProducts = [
  { image: img1, title: "Maybelline Fit Me Foundation", description: "Matte + Poreless foundation for a flawless finish.", price: "₹549", rating: 4.5 },
  { image: img2, title: "Rare Beauty Lip Combo", description: "Vibrant lip mousse and stick duo.", price: "₹1899", rating: 4.8 },
  { image: img3, title: "Benefit Roller Lash Mascara", description: "Super-curling & lifting mascara.", price: "₹1390", rating: 4.6 },
  { image: img4, title: "MAC Retro Matte Lipstick", description: "Rich pigment, long-lasting red.", price: "₹1750", rating: 4.7 },
  { image: img5, title: "Olaplex No.3 Hair Perfector", description: "Repairs and strengthens damaged hair.", price: "₹2999", rating: 4.9 },
  { image: img6, title: "Neutrogena Hydro Boost Set", description: "Hydrating cleanser and gel cream.", price: "₹1299", rating: 4.4 },
  { image: img7, title: "Benefit Hoola Bronzer", description: "Natural matte finish bronzer.", price: "₹1500", rating: 4.5 },
  { image: img8, title: "NARS Radiant Creamy Concealer", description: "Buildable, blendable under-eye concealer.", price: "₹2100", rating: 4.6 },
  { image: img9, title: "Huda Beauty Eyeshadow Palette", description: "18 rich & warm-toned shades.", price: "₹5375", rating: 4.8 },
  { image: img10, title: "Laneige Lip Sleeping Mask", description: "Intense overnight hydration for lips.", price: "₹1150", rating: 4.9 },
  { image: img11, title: "OGX Argan Oil Shampoo", description: "Hydrating Moroccan argan oil blend.", price: "₹725", rating: 4.3 },
  { image: img12, title: "Fenty Beauty Lipstick", description: "Creamy texture with bold pigment.", price: "₹1900", rating: 4.6 },
  { image: img13, title: "L'Oréal Total Repair 5", description: "Repairing shampoo for damaged hair.", price: "₹675", rating: 4.2 },
  { image: img14, title: "Nivea Firming Body Lotion", description: "Q10 + Vitamin C enriched moisturizer.", price: "₹399", rating: 4.4 },
  { image: img15, title: "Physicians Formula Highlighter", description: "Butter highlighter & brush combo.", price: "₹1249", rating: 4.5 },
];

const BeautyPage = () => {
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
      <h2 className="mb-4 text-center fw-bold">Beauty</h2>

      <Row className="d-flex justify-content-center gap-4">
        {beautyProducts.map((item, index) => (
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

export default BeautyPage;
