import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import SignUpPage from "./Pages/SignUpPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import HomePage from "./Components/HomePage";
import ShopPage from "./Components/ShopPage";
import ProductPage from "./Components/ProductPage";
import ContactPage from "./Components/ContactPage";
import FashionPage from './Components/FashionPage';
import BeautyPage from './Components/BeautyPage';
import FootwearPage from './Components/FootwearPage';
import AccessoriesPage from './Components/AccessoriesPage';
import HomeDecorPage from './Components/HomeDecorPage';
import AddToCart from './Components/AddToCart';
import PaymentPage from "./Components/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/fashion" element={<FashionPage />} />
        <Route path="/category/beauty" element={<BeautyPage />} />
        <Route path="/category/footwear" element={<FootwearPage />} />
        <Route path="/category/accessories" element={<AccessoriesPage />} />
        <Route path="/category/home" element={<HomeDecorPage />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
