import React from 'react';
import { useNavigate } from 'react-router';
import { Utensils, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        <div className="relative mx-auto h-40 w-40">
          <Utensils className="h-full w-full text-primary/20" />
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary">
            404
          </div>
        </div>
      </motion.div>

      <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
        Oops! This plate is empty.
      </h1>
      <p className="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
        We couldn't find the page you're looking for. It might have been moved, deleted, or eaten!
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
        <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </Button>
      </div>

      <div className="mt-12 text-muted-foreground">
        <p>Hungry? <button onClick={() => navigate('/menu')} className="text-primary hover:underline font-medium">Browse our delicious menu instead.</button></p>
      </div>
    </div>
  );
};

import { motion } from 'motion/react';
