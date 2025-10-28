// src/HomePage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import DishCard from './DishCard';
import OrderSummary from './OrderSummary'; 
import { CUISINES, DISHES } from './data';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeCuisine, setActiveCuisine] = useState('Lunch');
  const [searchTerm, setSearchTerm] = useState('');
  const [popularDishes, setPopularDishes] = useState([]);
  const [cart, setCart] = useState([]); // Local state for cart

  useEffect(() => {
    // Filter dishes for the active cuisine and simulate 'popular' selection
    const filteredDishes = DISHES
      .filter(dish => dish.cuisine === activeCuisine)
      .slice(0, 3); 
    setPopularDishes(filteredDishes);
  }, [activeCuisine]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, this would route to the Menu Page with the search query
      window.location.href = '/menu?q=${searchTerm}';
    }
  };

  const updateCartQuantity = (dishId, newQuantity) => {
    // Simplified local cart logic for the frontend demo
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== dishId));
    } else {
      const existingItem = cart.find(item => item.id === dishId);
      if (existingItem) {
          setCart(cart.map(item =>
              item.id === dishId ? { ...item, quantity: newQuantity } : item
          ));
      } else {
          const dish = DISHES.find(d => d.id === dishId);
          setCart([...cart, { ...dish, quantity: newQuantity }]);
      }
    }
  };
    
  return (
    <div style={homeStyles.pageContainer}>
      <Header />
      <div style={homeStyles.layout}>
        
        <main style={homeStyles.contentArea}>
            {/* Hero Section */}
            <h1 style={homeStyles.heroTitle}>
              Delicious meals from *EatHub Cloud Kitchen* — hot, fresh, fast.
            </h1>
            
            {/* Search Bar (Dish/Cuisine Search - NOT Restaurant Search) */}
            <form onSubmit={handleSearch} style={homeStyles.searchForm}>
              <input
                type="text"
                placeholder="Search for dishes or cuisines"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={homeStyles.searchInput}
              />
              <button type="submit" style={homeStyles.searchButton}>Search</button>
            </form>

            {/* Cuisine/Meal Time Tabs */}
            <div style={homeStyles.cuisineTabs}>
              {CUISINES.map((cuisine) => (
                <Link to={'/menu?cuisine=${cuisine.name}'} key={cuisine.id} style={{textDecoration: 'none'}}>
                    <button
                      onClick={() => setActiveCuisine(cuisine.name)}
                      style={{
                        ...homeStyles.cuisineTabButton,
                        ...(activeCuisine === cuisine.name ? homeStyles.activeTab : {}),
                      }}
                    >
                      {cuisine.icon} {cuisine.name}
                    </button>
                </Link>
              ))}
            </div>

            {/* Popular Meals Section */}
            <h2 style={homeStyles.popularTitle}>Our Specials (Try our {activeCuisine} selection!)</h2>
            <div style={homeStyles.popularDishesGrid}>
              {popularDishes.map((dish) => (
                <DishCard 
                  key={dish.id} 
                  dish={dish} 
                  onCardClick={() => window.location.href = '/menu'} 
                />
              ))}
            </div>
        </main>
        
        <OrderSummary cart={cart} updateQuantity={updateCartQuantity} />
      </div>
    </div>
  );
};

const homeStyles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  layout: {
      display: 'flex',
      padding: '20px 40px',
  },
  contentArea: {
    flexGrow: 1,
  },
  heroTitle: {
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  searchForm: {
    marginBottom: '30px',
    display: 'flex',
  },
  searchInput: {
    flexGrow: 1,
    padding: '12px 15px',
    borderRadius: '8px 0 0 8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    borderRight: 'none',
  },
  searchButton: {
    padding: '12px 20px',
    backgroundColor: '#FF5722',
    color: 'white',
    border: 'none',
    borderRadius: '0 8px 8px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cuisineTabs: {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    borderBottom: '2px solid #eee',
    overflowX: 'auto',
    paddingBottom: '10px',
  },
  cuisineTabButton: {
    background: 'none',
    border: 'none',
    padding: '10px 0',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#999',
    outline: 'none',
    transition: 'color 0.2s, border-color 0.2s',
    whiteSpace: 'nowrap',
  },
  activeTab: {
    color: '#FF5722',
    fontWeight: 'bold',
    borderBottom: '2px solid #FF5722',
    marginBottom: '-2px', 
  },
  popularTitle: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  popularDishesGrid: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '20px',
  },
};

export default HomePage;