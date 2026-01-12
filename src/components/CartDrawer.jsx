import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCartStore();

  // การคำนวณค่าต่างๆ (Derived State)
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}
      
      <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 dark:text-gray-400 text-2xl">&times;</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center mt-10">ตะกร้าว่างเปล่า</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b dark:border-gray-600 pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.price.toLocaleString()} x {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm hover:underline">Remove</button>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 border-t dark:border-gray-600 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{subtotal.toLocaleString()} THB</span></div>
            <div className="flex justify-between"><span>VAT (7%)</span><span>{tax.toLocaleString(undefined, {minimumFractionDigits: 2})} THB</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping} THB</span></div>
            <div className="flex justify-between font-bold text-xl text-blue-600 dark:text-blue-400 pt-2">
              <span>Total</span><span>{total.toLocaleString()} THB</span>
            </div>
            <button
              onClick={() => {
                navigate("/cart");
                onClose();
              }}
              className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              View Full Cart
            </button>
            <button 
              onClick={clearCart} 
              className="w-full mt-2 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;