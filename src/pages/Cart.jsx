import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, addToCart } = useCartStore();

  // การคำนวณค่าต่างๆ (Derived State)
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  const decreaseQuantity = (item) => {
    if (item.quantity <= 1) {
      removeFromCart(item.id);
    } else {
      // Decrease quantity by updating the cart manually
      useCartStore.setState((state) => ({
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-xl mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.category}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {item.desc}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-xl">
                    {item.price.toLocaleString()} THB
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="w-8 h-8 flex items-center justify-center border dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-8 h-8 flex items-center justify-center border dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-lg font-bold mt-2">
                    {(item.price * item.quantity).toLocaleString()} THB
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal ({cart.length} items)</span>
                  <span className="font-semibold">{subtotal.toLocaleString()} THB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">VAT (7%)</span>
                  <span className="font-semibold">
                    {tax.toLocaleString(undefined, { minimumFractionDigits: 2 })} THB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="font-semibold">{shipping} THB</span>
                </div>
                <div className="border-t dark:border-gray-600 pt-3"></div>
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {total.toLocaleString()} THB
                  </span>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition mb-3">
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="w-full py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
