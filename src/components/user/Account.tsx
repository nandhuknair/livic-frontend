import React from 'react';
import { Button } from "@/components/ui/button";

const Account: React.FC = () => {
  // In a real application, you would fetch user data and order history
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  const orders = [
    { id: 1, date: "2023-05-15", total: 139.98 },
    { id: 2, date: "2023-06-02", total: 199.99 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Account</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <Button className="mt-4">Edit Profile</Button>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        {orders.map((order) => (
          <div key={order.id} className="border-b py-4">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;