import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<ProductList/>} />
            <Route path="/product/:productId" element={<ProductDetails/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

