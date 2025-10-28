// src/MenuPage.js
import React, { useState, useMemo } from 'react';
import Header from './Header';
import { DISHES, CUISINES } from './data';
import OrderSummary from './OrderSummary';
import MenuDishItem from './MenuDishItem'; 

const MenuPage = () => {
  const [filters, setFilters] = useState({
    search: '',
    vegNonVeg: 'all', 
    cuisineType: 'all', 
  });
  const [cart, setCart] = useState([]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const updateCartQuantity = (dishId, quantityChange) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === dishId);
        const dish = DISHES.find(d => d.id === dishId);
        let newQuantity = existingItem ? existingItem.quantity + quantityChange : quantityChange;

        if (newQuantity <= 0) {
            return prevCart.filter(item => item.id !== dishId);
        } else if (existingItem) {
            return prevCart.map(item =>
                item.id === dishId ? { ...item, quantity: newQuantity } : item
            );
        } else {
            return [...prevCart, { ...dish, quantity: newQuantity }];
        }
    });
  };

  const filteredDishes = useMemo(() => {
    let list = DISHES;

    // 1. Search Filter (by name or brand)
    if (filters.search) {
      const term = filters.search.toLowerCase();
      list = list.filter(dish => 
        dish.name.toLowerCase().includes(term) ||
        dish.brand.toLowerCase().includes(term)
      );
    }

    // 2. Veg / Non-Veg Filter
    if (filters.vegNonVeg !== 'all') {
      const isVeg = filters.vegNonVeg === 'veg';
      list = list.filter(dish => dish.isVeg === isVeg);
    }
    
    // 3. Cuisine Type Filter (Virtual Brands)
    if (filters.cuisineType !== 'all') {
      list = list.filter(dish => dish.cuisine === filters.cuisineType);
    }

    return list;
  }, [filters]);

  return (
    <div style={menuStyles.pageContainer}>
      <Header />
      <div style={menuStyles.layout}>
        
        {/* Left Side: Filters */}
        <aside style={menuStyles.sidebar}>
          <h3 style={menuStyles.filterTitle}>Filters</h3>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search dish name..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            style={{...menuStyles.filterInput, marginBottom: '20px'}}
          />

          {/* Veg/Non-Veg Filter */}
          <div style={menuStyles.filterGroup}>
            <h4>Veg / Non-Veg</h4>
            <select
              value={filters.vegNonVeg}
              onChange={(e) => handleFilterChange('vegNonVeg', e.target.value)}
              style={menuStyles.filterSelect}
            >
              <option value="all">All</option>
              <option value="veg">🌱 Veg Only</option>
              <option value="nonveg">🍗 Non-Veg Only</option>
            </select>
          </div>
          
          {/* Cuisine Type Filter (Virtual Brands) */}
          <div style={menuStyles.filterGroup}>
            <h4>Cuisine Type (Brands)</h4>
            <select
              value={filters.cuisineType}
              onChange={(e) => handleFilterChange('cuisineType', e.target.value)}
              style={menuStyles.filterSelect}
            >
              <option value="all">All Cuisines</option>
              {CUISINES.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

        </aside>

        {/* Center: Dish List */}
        <main style={menuStyles.dishListArea}>
          <h2>Full Menu ({filteredDishes.length} Items)</h2>
          <p style={{marginBottom: '20px', color: '#666'}}>All meals come directly from EatHub's centralized cloud kitchen network.</p>
          
          <div style={menuStyles.dishList}>
            {filteredDishes.map((dish) => (
              <MenuDishItem 
                key={dish.id} 
                dish={dish} 
                onAddToCart={(dishId, quantityChange = 1) => updateCartQuantity(dishId, quantityChange)}
                quantityInCart={cart.find(item => item.id === dish.id)?.quantity || 0}
              />
            ))}
            {filteredDishes.length === 0 && (
                <p>No dishes found matching your filters. Try a different combination!</p>
            )}
          </div>
        </main>
        
        {/* Right Side: Order Summary / Cart */}
        <OrderSummary cart={cart} updateQuantity={(dishId, newQuantity) => updateCartQuantity(dishId, newQuantity - (cart.find(item => item.id === dishId)?.quantity || 0))} />
      </div>
    </div>
  );
};

const menuStyles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  layout: {
    display: 'flex',
    padding: '20px',
    gap: '20px',
  },
  sidebar: {
    width: '250px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    height: 'fit-content',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  filterTitle: {
    fontSize: '20px',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  filterGroup: {
    marginBottom: '20px',
  },
  filterSelect: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  filterInput: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  dishListArea: {
    flexGrow: 1,
  },
  dishList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  }
};

export default MenuPage;