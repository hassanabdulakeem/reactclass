import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import AuthProvider from "./contexts/AuthContext";
import Users from "./pages/Users";
import ProductProvider from "./contexts/ProductContext";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import ProtedtedRoutes from "./components/ProtedtedRoutes";
import { Toaster } from "sonner";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header />
              
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />

              <Route element={<ProtedtedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster position="top-right" richColors closeButton visibleToasts={1}
          icons={{
            success: "./assets/react.svg"
          }}


          />
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
