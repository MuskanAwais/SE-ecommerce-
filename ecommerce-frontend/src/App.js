import React from 'react';
import './App.css';
import ProductList from './ProductList'; // Import the ProductList component

function App() {
  return (
    <div className="App">
      <h1>Welcome to Our E-Commerce App</h1>
      <ProductList /> {/* Render the ProductList component */}
    </div>
  );
}

export default App;
