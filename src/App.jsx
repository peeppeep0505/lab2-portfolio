import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import FormLayout from "./layouts/FormLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Review from "./pages/Review";

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

          {/* Nested Routes for Job Application Form */}
          <Route path="/apply" element={<FormLayout />}>
            <Route path="step-1" element={<Step1 />} />
            <Route path="step-2" element={<Step2 />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;