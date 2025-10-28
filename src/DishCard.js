// src/DishCard.js
import React from 'react';

const DishCard = ({ dish, onCardClick }) => {
  return (
    <div style={cardStyles.card} onClick={() => onCardClick(dish)}>
      <img src={dish.image} alt={dish.name} style={cardStyles.image} />
      <div style={cardStyles.info}>
        <p style={cardStyles.name}>{dish.name}</p>
        <p style={cardStyles.price}>${dish.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const cardStyles = {
  card: {
    minWidth: '150px',
    maxWidth: '150px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #eee',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.2s',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    backgroundColor: '#f0f0f0' // Placeholder background
  },
  info: {
    padding: '10px',
    textAlign: 'left',
  },
  name: {
    fontSize: '14px',
    fontWeight: '500',
    margin: '0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontSize: '14px',
    color: '#555',
    margin: '5px 0 0 0',
  },
};

export default DishCard;