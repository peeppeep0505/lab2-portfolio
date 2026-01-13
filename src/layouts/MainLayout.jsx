import { useState } from "react";
import { Link, Outlet } from "react-router-dom"; 
import { useTheme } from "../context/ThemeContext";
import { useCartStore } from "../store/useCartStore";
import { useAuthStore } from "../store/useAuthStore";
import CartDrawer from "../components/CartDrawer";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useCartStore((state) => state.cart.length);
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> 
      <nav className="p-4 flex justify-between items-center border-b dark:border-gray-700"> 
        <h1 className="text-xl font-bold">MyPortfolio</h1> 
        <div className="space-x-4 flex items-center"> 
          <Link to="/" className="hover:text-blue-500">Catalog</Link> 
          <Link to="/home" className="hover:text-blue-500">Home</Link> 
          <Link to="/projects" className="hover:text-blue-500">Projects</Link> 
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <Link to="/apply/step-1" className="hover:text-blue-500">Apply Job</Link>
          
          {/* แสดง Dashboard link เฉพาะเมื่อ Login แล้ว */}
          {user && (
            <Link to="/dashboard" className="hover:text-blue-500 font-semibold">
              📊 Dashboard
            </Link>
          )}
          
          {/* แสดง Login link เมื่อยังไม่ Login */}
          {!user && (
            <Link to="/login" className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              🔐 Login
            </Link>
          )}
          
          <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"> 
            {darkMode ? "☀️ Light" : "🌙 Dark"} 
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
      <main className="p-8"> 
        <Outlet />
      </main>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default MainLayout; 