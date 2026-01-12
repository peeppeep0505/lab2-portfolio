import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  
  // เพิ่มสินค้า: ถ้าซ้ำให้เพิ่มจำนวน (Quantity) ถ้าใหม่ให้เพิ่มแถว
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  // ลบสินค้าออกจากตะกร้า
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId)
  })),

  // ล้างตะกร้าทั้งหมด
  clearCart: () => set({ cart: [] }),
}));