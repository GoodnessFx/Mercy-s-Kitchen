import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, Clock, CheckCircle, Truck, Utensils } from 'lucide-react';
import { Button } from '../components/Button';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { openWhatsApp } from '../utils/whatsapp';

export const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [tracking, setTracking] = useState(false);
  const [result, setResult] = useState<null | 'not_found' | 'found'>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    
    setTracking(true);
    // Simulate API call
    setTimeout(() => {
      setTracking(false);
      if (orderId.toLowerCase().includes('mercy')) {
        setResult('found');
      } else {
        setResult('not_found');
      }
    }, 1500);
  };

  const statusSteps = [
    { label: 'Order Received', icon: Package, completed: true, active: false },
    { label: 'Confirmed', icon: CheckCircle, completed: true, active: false },
    { label: 'Cooking', icon: Utensils, completed: false, active: true },
    { label: 'Out for Delivery', icon: Truck, completed: false, active: false },
    { label: 'Delivered', icon: Star, completed: false, active: false },
  ];

  function Star({ className }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Track Your Order</h1>
          <p className="text-lg text-muted-foreground">
            Enter your order reference number or phone number to see where your food is.
          </p>
        </div>

        <div className="mb-8 rounded-xl bg-card p-6 shadow-lg">
          <form onSubmit={handleTrack} className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="e.g., MERCY-1234 or your phone number"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full rounded-lg border border-border bg-input-background py-3 pl-10 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              variant="primary"
              type="submit"
              disabled={tracking || !orderId}
              className="min-w-[120px]"
            >
              {tracking ? 'Searching...' : 'Track Order'}
            </Button>
          </form>
        </div>

        {result === 'found' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-card p-8 shadow-lg"
          >
            <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
              <div>
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="text-xl font-bold text-foreground">#{orderId.toUpperCase()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                <p className="text-xl font-bold text-primary">25-35 mins</p>
              </div>
            </div>

            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-border sm:left-1/2 sm:-ml-px sm:h-0.5 sm:w-full sm:top-6" />
              
              <div className="relative flex flex-col gap-8 sm:flex-row sm:justify-between">
                {statusSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 sm:flex-col sm:gap-2">
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background transition-colors ${
                        step.completed || step.active
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      } ${step.active ? 'ring-4 ring-primary/20' : ''}`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="sm:text-center">
                      <p
                        className={`text-sm font-bold ${
                          step.active ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {step.label}
                      </p>
                      {step.active && (
                        <p className="text-xs text-primary animate-pulse">Current Status</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-primary/5 p-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1595030334552-6f71e2c7f4b8?w=200"
                      alt="Mercy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Mercy is cooking!</p>
                    <p className="text-sm text-muted-foreground">Your food will be ready shortly.</p>
                  </div>
                </div>
                <Button
                  variant="whatsapp"
                  onClick={() => openWhatsApp(`Hi Mercy! 👋 I'm checking on my order #${orderId}.`)}
                >
                  <WhatsAppLogo className="h-5 w-5" />
                  Message Mercy
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {result === 'not_found' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl bg-card p-12 text-center shadow-lg"
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <Search className="h-10 w-10" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">Order Not Found</h2>
            <p className="mb-8 text-muted-foreground">
              We couldn't find any order with that reference. Please check the number or contact us if you need help.
            </p>
            <Button
              variant="whatsapp"
              onClick={() => openWhatsApp(`Hi Mercy! 👋 I'm having trouble tracking my order. Can you help?`)}
            >
              <WhatsAppLogo className="h-5 w-5" />
              Contact Support
            </Button>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an order number? Check your WhatsApp chat with Mercy.
            <br />
            Most orders are confirmed within 15 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};
