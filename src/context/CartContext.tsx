import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  portion: string;
  price: number;
  quantity: number;
  image: string;
  specialInstructions?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, portion: string) => void;
  updateQuantity: (id: string, portion: string, quantity: number) => void;
  updateInstructions: (id: string, portion: string, instructions: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('mercyKitchenCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mercyKitchenCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id && cartItem.portion === item.portion
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id && cartItem.portion === item.portion
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }

      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: string, portion: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.portion === portion))
    );
  };

  const updateQuantity = (id: string, portion: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, portion);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.portion === portion
          ? { ...item, quantity }
          : item
      )
    );
  };

  const updateInstructions = (id: string, portion: string, instructions: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.portion === portion
          ? { ...item, specialInstructions: instructions }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateInstructions,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
