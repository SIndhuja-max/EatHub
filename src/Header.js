// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <a href="/" style={styles.logoLink}>
            <span style={{color: '#FF5722', fontWeight: 'bold'}}>EatHub</span>
        </a>
      </div>
      <div>
        <a href="/login" style={styles.navLink}>Login</a>
        <a href="/signup" style={styles.navLink}>Sign up</a>
      </div>
    </header>
  );
};

// Simple inline styles for demonstration
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    borderBottom: '1px solid #eee',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'normal',
  },
  logoLink: {
      textDecoration: 'none',
      color: 'inherit'
  },
  navLink: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
  },
};

export default Header;