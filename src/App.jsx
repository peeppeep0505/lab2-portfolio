import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter> 
      <ThemeProvider> 
        <Routes> 
          <Route path="/" element={<MainLayout />}> 
            <Route index element={<Catalog />} /> 
            <Route path="home" element={<Home />} /> 
            <Route path="projects" element={<Projects />} /> 
            <Route path="contact" element={<Contact />} /> 
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;