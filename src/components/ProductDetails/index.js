import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Data';
import './index.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find(item => item.id === productId);

  if (!product) {
    return <div className="product-details-container">Product not found.</div>;
  }

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.model} className="product-image" />
      <div className="product-info">
        <h2 className="product-model">{product.model}</h2>
        <p className="product-company">{product.company}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
