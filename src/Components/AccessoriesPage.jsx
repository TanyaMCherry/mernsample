import React, { useState } from 'react';
import '../assets/css/FashionPage.css'; 
import ItemCard from '../Components/ItemCard';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/images/accessories/item1.png';
import img2 from '../assets/images/accessories/item2.png';
import img3 from '../assets/images/accessories/item3.png';
import img4 from '../assets/images/accessories/item4.png';
import img5 from '../assets/images/accessories/item5.png';
import img6 from '../assets/images/accessories/item6.png';
import img7 from '../assets/images/accessories/item7.png';
import img8 from '../assets/images/accessories/item8.png';
import img9 from '../assets/images/accessories/item9.png';
import img10 from '../assets/images/accessories/item10.png';
import img11 from '../assets/images/accessories/item11.png';
import img12 from '../assets/images/accessories/item12.png';
import img13 from '../assets/images/accessories/item13.png';
import img14 from '../assets/images/accessories/item14.png';
import img15 from '../assets/images/accessories/item15.png';

const fashionItems = [
  { image: img1, title: "Braided Hairband", description: "Stylish and comfortable.", price: "₹149" },
  { image: img2, title: "Scrunchie Set", description: "Trendy animal print combo.", price: "₹199" },
  { image: img3, title: "Beaded Necklace", description: "A timeless classic.", price: "₹499" },
  { image: img4, title: "Diamond Bow Clip", description: "Elegant shimmer for any outfit.", price: "₹349" },
  { image: img5, title: "Gold Chain Clutch", description: "Carry your essentials in style.", price: "₹899" },
  { image: img6, title: "Braided Choker", description: "Traditional charm.", price: "₹199" },
  { image: img7, title: "Dangling Bracelet", description: "Perfect for festive wear.", price: "₹299" },
  { image: img8, title: "Pearl Jewelry Set", description: "Minimal and graceful.", price: "₹1099" },
  { image: img9, title: "Jhumka Earrings", description: "Bold and beautiful.", price: "₹399" },
  { image: img10, title: "Tan Sling Bag", description: "Trendy and practical.", price: "₹999" },
  { image: img11, title: "Yellow Boho Bag", description: "Bohemian vibes all the way.", price: "₹1199" },
  { image: img12, title: "Pink Party Clutch", description: "For glamorous nights.", price: "₹849" },
  { image: img13, title: "Rose Gold Watch", description: "Chic and layered elegance.", price: "₹1499" },
  { image: img14, title: "Studded Sunglasses", description: "Upgrade your waist game.", price: "₹599" },
  { image: img15, title: "Pastel Hair Clips", description: "Compact and stylish.", price: "₹129" },
];

const AccessoriesPage = () => {
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
      <h2 className="mb-4 text-center fw-bold">Accessories</h2>

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
          onClick={() => navigate(-1)} // Go to previous page
        >
          ⬅ Back
        </Button>
      </div>
    </Container>
  );
};

export default AccessoriesPage;
