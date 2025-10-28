// src/MenuDishItem.js
import React from 'react';

const MenuDishItem = ({ dish, onAddToCart, quantityInCart }) => {
  return (
    <div style={itemStyles.card}>
      <div style={itemStyles.imageContainer}>
          <img src={dish.image} alt={dish.name} style={itemStyles.image} />
      </div>
      <div style={itemStyles.details}>
        <h4 style={itemStyles.name}>{dish.name}</h4>
        <p style={itemStyles.brand}>Brand: {dish.brand}</p>
        <p style={itemStyles.ingredients}>{dish.ingredients}</p>
        <div style={itemStyles.meta}>
          <span style={itemStyles.rating}>⭐ {dish.rating}</span>
          <span style={itemStyles.vegTag}>{dish.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}</span>
        </div>
      </div>
      <div style={itemStyles.controls}>
        <span style={itemStyles.price}>${dish.price.toFixed(2)}</span>
        {quantityInCart === 0 ? (
          <button 
            style={itemStyles.addButton}
            onClick={() => onAddToCart(dish.id)}
          >
            + Add
          </button>
        ) : (
            <div style={itemStyles.inCartControls}>
                <button 
                    onClick={() => onAddToCart(dish.id, -1)} // Dummy quantity change
                    style={itemStyles.quantityButton}
                >-</button>
                <span style={itemStyles.quantityDisplay}>{quantityInCart}</span>
                <button 
                    onClick={() => onAddToCart(dish.id, 1)} // Dummy quantity change
                    style={itemStyles.quantityButton}
                >+</button>
            </div>
        )}
      </div>
    </div>
  );
};

const itemStyles = {
  card: {
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  imageContainer: {
    width: '120px',
    height: '100%',
    minHeight: '140px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: '#f0f0f0'
  },
  details: {
    padding: '10px',
    flexGrow: 1,
  },
  name: {
    margin: '0 0 5px 0',
    fontSize: '16px',
    fontWeight: '600',
  },
  brand: {
    margin: '0 0 5px 0',
    fontSize: '12px',
    color: '#FF5722',
    fontWeight: 'bold',
  },
  ingredients: {
    margin: '0 0 10px 0',
    fontSize: '12px',
    color: '#666',
  },
  meta: {
    display: 'flex',
    gap: '10px',
  },
  rating: {
    fontSize: '12px',
    color: '#fdd835',
  },
  vegTag: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#4CAF50',
  },
  controls: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    minWidth: '100px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  },
  addButton: {
    backgroundColor: '#FF5722',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  },
  inCartControls: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #FF5722',
      borderRadius: '4px',
      overflow: 'hidden',
  },
  quantityButton: {
      backgroundColor: '#f1f1f1',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      color: '#FF5722',
      fontSize: '16px',
      fontWeight: 'bold',
  },
  quantityDisplay: {
      padding: '0 5px',
      fontSize: '14px',
  }
};

export default MenuDishItem;