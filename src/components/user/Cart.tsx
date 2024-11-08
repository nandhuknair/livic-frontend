import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Cart: React.FC = () => {
  // In a real application, you would fetch the cart items from a state management solution or API
  const cartItems = [
    { id: 1, name: "Classic White Shirt", price: 59.99, quantity: 1 },
    { id: 2, name: "Slim Fit Jeans", price: 79.99, quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
          </div>
          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-2xl font-bold">Total:</h2>
        <p className="text-2xl font-bold">${total.toFixed(2)}</p>
      </div>
      <div className="mt-8">
        <Button asChild className="w-full">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;