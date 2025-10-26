import React from 'react';
import '../assets/css/ItemCard.css';

const ItemCard = ({ image, title, description, price, rating }) => {
  return (
    <div className="item-card">
      <div className="card-img-wrapper">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="card-info">
        <h5 className="card-title">{title}</h5>
        <p className="card-desc">{description}</p>
        <p className="card-price">Price: {price}</p>
        <p className="card-rating">Rating: ⭐ {rating}</p>
      </div>
    </div>
  );
};

export default ItemCard;
