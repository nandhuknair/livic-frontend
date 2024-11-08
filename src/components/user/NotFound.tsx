import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Button asChild>
        <Link to="/">Go to Homepage</Link>
      </Button>
    </div>
  );
};

export default NotFound;