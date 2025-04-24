import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import CartPage from './pages/CartPage/CartPage';

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage cart={cart} setCart={setCart} />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
      <Footer />
    </>
  );
}