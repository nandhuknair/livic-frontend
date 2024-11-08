import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Checkout: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Full Name</label>
          <Input type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">Address</label>
          <Input type="text" id="address" required />
        </div>
        <div className="mb-4">
          <label htmlFor="card" className="block mb-2">Card Number</label>
          <Input type="text" id="card" required />
        </div>
        <Button type="submit" className="w-full">Place Order</Button>
      </form>
    </div>
  );
};

export default Checkout;