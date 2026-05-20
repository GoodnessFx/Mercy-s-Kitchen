import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';
import { generateCartMessage, openWhatsApp } from '../utils/whatsapp';
import { WhatsAppLogo } from '../components/WhatsAppLogo';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, updateInstructions, cartTotal, clearCart } = useCart();
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleOrderViaWhatsApp = () => {
    const message = generateCartMessage(cart, cartTotal, {
      date: eventDate,
      time: eventTime,
      address: deliveryAddress,
      phone,
      name,
    });
    openWhatsApp(message);
  };

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <ShoppingBag className="mx-auto mb-4 h-24 w-24 text-muted-foreground" />
          <h2 className="mb-2 text-2xl font-bold text-foreground">Your Cart is Empty</h2>
          <p className="mb-6 text-muted-foreground">
            Add some delicious items to get started!
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('/menu')}>
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Your Order</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.portion}`}
                  className="flex flex-col gap-4 rounded-lg bg-card p-4 shadow-md sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full rounded-lg object-cover sm:h-24 sm:w-24"
                  />
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-foreground">{item.name}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">{item.portion}</p>
                    <p className="font-bold text-primary">
                      {formatCurrency(item.price)}
                    </p>

                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="Special instructions..."
                        value={item.specialInstructions || ''}
                        onChange={(e) =>
                          updateInstructions(item.id, item.portion, e.target.value)
                        }
                        className="w-full rounded border border-border bg-input-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-start justify-between gap-4 sm:flex-col sm:items-end">
                    <button
                      onClick={() => removeFromCart(item.id, item.portion)}
                      className="rounded-full p-2 text-destructive transition-colors hover:bg-destructive/10"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.portion, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded border border-border hover:border-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-[2rem] text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.portion, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded border border-border hover:border-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-2 font-bold text-foreground sm:mt-0">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-4 text-sm text-destructive hover:underline"
            >
              Clear Cart
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-lg bg-card p-6 shadow-md">
              <h2 className="mb-4 text-xl font-bold">Order Details</h2>

              <div className="mb-6 space-y-3">
                <div>
                  <label className="mb-1 block text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., 0912 177 2238"
                    className="w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    When do you need it?
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Time</label>
                  <input
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Delivery Address in Makurdi
                  </label>
                  <textarea
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter your address, area/estate, landmark..."
                    className="w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={3}
                  />
                </div>
              </div>

              <div className="mb-6 space-y-2 border-t border-border pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="text-xs text-muted-foreground">
                    To be confirmed
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-2 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">{formatCurrency(cartTotal)}</span>
                </div>
              </div>

              <p className="mb-4 text-xs text-muted-foreground">
                * Bulk orders require at least 48 hours notice. Delivery fee will be confirmed by Mercy based on your location.
              </p>

              <Button
                variant="whatsapp"
                size="lg"
                fullWidth
                onClick={handleOrderViaWhatsApp}
              >
                <WhatsAppLogo className="h-5 w-5" glow />
                Order via WhatsApp
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Your order details will be sent to Mercy who will confirm availability and pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
