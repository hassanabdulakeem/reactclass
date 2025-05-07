import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import AuthProvider from "./contexts/AuthContext";
import Users from "./pages/Users";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
