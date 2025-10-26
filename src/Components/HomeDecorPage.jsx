import React, { useState } from 'react';
import '../assets/css/FashionPage.css'; 
import ItemCard from '../Components/ItemCard';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/images/home/item1.png';
import img2 from '../assets/images/home/item2.png';
import img3 from '../assets/images/home/item3.png';
import img4 from '../assets/images/home/item4.png';
import img5 from '../assets/images/home/item5.png';
import img6 from '../assets/images/home/item6.png';
import img7 from '../assets/images/home/item7.png';
import img8 from '../assets/images/home/item8.png';
import img9 from '../assets/images/home/item9.png';
import img10 from '../assets/images/home/item10.png';
import img11 from '../assets/images/home/item11.png';
import img12 from '../assets/images/home/item12.png';
import img13 from '../assets/images/home/item13.png';
import img14 from '../assets/images/home/item14.png';
import img15 from '../assets/images/home/item15.png';

const homeDecorProducts = [
  { image: img1, title: "Round Glass Coffee Table", description: "Modern and elegant centerpiece.", price: "₹7299", rating: 4.5 },
  { image: img2, title: "Elegant Candle Holder Set", description: "Stylish accent for any table.", price: "₹1499", rating: 4.6 },
  { image: img3, title: "Black Tray Decor Set", description: "Chic tray with candles and vases.", price: "₹11799", rating: 4.9 },
  { image: img4, title: "Monochrome Wall Gallery", description: "Minimalist black-and-white frames.", price: "₹2299", rating: 4.5 },
  { image: img5, title: "Neutral Tone Shelf Decor", description: "Earthy decor with a cozy feel.", price: "₹5599", rating: 4.9 },
  { image: img6, title: "Golden Bird Sculpture", description: "Artistic golden bird centerpiece.", price: "₹8499", rating: 4.7 },
  { image: img7, title: "Sunburst Wall Mirror", description: "Bright, decorative wall mirror.", price: "₹7999", rating: 4.4 },
  { image: img8, title: "Botanical Wall Art", description: "Floral artwork in a gold frame.", price: "₹6899", rating: 4.8 },
  { image: img9, title: "Sculptural Beige Vase", description: "Modern round ceramic vase.", price: "₹3099", rating: 4.3 },
  { image: img10, title: "Animal-Inspired Ceramic Set", description: "Whimsical tea set design.", price: "₹2199", rating: 4.7 },
  { image: img11, title: "Ethnic Drum Coffee Table", description: "Rustic carved wooden table.", price: "₹5499", rating: 4.1 },
  { image: img12, title: "Cream Eyelet Curtains", description: "Soft and simple window drapes.", price: "₹7299", rating: 4.6 },
  { image: img13, title: "Woven Cushion Sofa Set", description: "Cozy sofa with ethnic cushions.", price: "₹6799", rating: 4.8 },
  { image: img14, title: "Hand-Painted Wooden Bench", description: "Colorful traditional bench.", price: "₹9999", rating: 4.9 },
  { image: img15, title: "Floral Metal Thermos Set", description: "Vintage-style flask and mugs.", price: "₹3499", rating: 4.5 },
];

const HomeDecorPage = () => {
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
      <h2 className="mb-4 text-center fw-bold">Home Decor</h2>

      <Row className="d-flex justify-content-center gap-4">
        {homeDecorProducts.map((item, index) => (
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

export default HomeDecorPage;
