import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Data';
import './index.css';

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2 className="section-title">Products</h2>
      <div className="product-list">
        {data.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-item">
            <img src={product.image} alt={product.model} className="product-image" />
            <div className="product-details">
              <h3 className="product-model">{product.model}</h3>
              <p className="product-company">{product.company}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

