import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/user/Header'
import Footer from './components/user/Header';
import Home from './pages/user/Home';
import ProductList from './components/user/ProductList';
import ProductShowcase from './components/user/ProductShowcase';
import Cart from './components/user/Cart';
import Checkout from './components/user/Checkout';
import Account from './components/user/Account';
import NotFound from './components/user/NotFound';
import './styles/font.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow  mt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductShowcase />} />
            <Route path="/categories/:category" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;