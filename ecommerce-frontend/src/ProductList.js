import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/products') // Make sure this is correct
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products');
      });
  }, []);
  

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
