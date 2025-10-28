// src/OrderSummary.js
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ cart, updateQuantity }) => {
  
  const totalItems = useMemo(() => 
    cart.reduce((sum, item) => sum + item.quantity, 0), 
    [cart]
  );
  
  const totalPrice = useMemo(() => 
    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), 
    [cart]
  );

  if (totalItems === 0) {
    return (
        <div style={summaryStyles.containerEmpty}>
            Your cart is empty. Start adding delicious meals!
        </div>
    );
  }

  return (
    <div style={summaryStyles.container}>
      <h3 style={summaryStyles.title}>Your Order Summary ({totalItems} items)</h3>
      
      {/* Individual Cart Items (showing first item + count) */}
      <div style={summaryStyles.cartItems}>
        {cart.slice(0, 1).map((item) => ( 
          <div key={item.id} style={summaryStyles.cartItem}>
            <div style={summaryStyles.itemDetails}>
              <p style={summaryStyles.itemName}>{item.name}</p>
              <p style={summaryStyles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            
            <div style={summaryStyles.quantityControls}>
              {/* Note: UpdateQuantity function must handle -1 for removal */}
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                style={summaryStyles.qtyButton}
              >-</button>
              <span style={summaryStyles.qtyDisplay}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                style={summaryStyles.qtyButton}
              >+</button>
            </div>
          </div>
        ))}
        {cart.length > 1 && (
            <p style={summaryStyles.moreItems}>+ {cart.length - 1} more item{cart.length > 2 ? 's' : ''}</p>
        )}
      </div>

      {/* Place Order Button (Core CTA) */}
      <div style={summaryStyles.footer}>
        <div style={summaryStyles.total}>
            <span>Total:</span>
            <span style={summaryStyles.totalAmount}>${totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/checkout" style={summaryStyles.placeOrderButtonLink}>
            <button style={summaryStyles.placeOrderButton}>
              Place order
            </button>
        </Link>
      </div>
    </div>
  );
};

const summaryStyles = {
  container: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    position: 'sticky', 
    top: '20px',
    height: 'fit-content',
    marginLeft: '20px',
  },
  containerEmpty: {
    width: '300px',
    padding: '20px',
    border: '1px dashed #FF5722',
    borderRadius: '8px',
    backgroundColor: '#fff3e0',
    textAlign: 'center',
    color: '#FF5722',
    fontWeight: '500',
    height: 'fit-content',
    marginLeft: '20px',
  },
  title: {
      fontSize: '18px',
      marginBottom: '15px',
      borderBottom: '1px solid #eee',
      paddingBottom: '10px',
  },
  cartItems: {
      marginBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  itemDetails: {
    flexGrow: 1,
    marginRight: '10px',
  },
  itemName: {
    margin: '0',
    fontSize: '14px',
    fontWeight: '500',
  },
  itemPrice: {
    margin: '0',
    fontSize: '12px',
    color: '#666',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #FF5722',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  qtyButton: {
    background: 'none',
    border: 'none',
    padding: '5px 8px',
    cursor: 'pointer',
    color: '#FF5722',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  qtyDisplay: {
    padding: '0 5px',
    fontSize: '14px',
  },
  moreItems: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#666',
    marginTop: '10px',
  },
  footer: {
      marginTop: '20px',
      borderTop: '1px solid #eee',
      paddingTop: '10px',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  totalAmount: {
    color: '#FF5722',
    fontSize: '20px',
  },
  placeOrderButtonLink: {
      textDecoration: 'none',
  },
  placeOrderButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#FF5722',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export default OrderSummary;