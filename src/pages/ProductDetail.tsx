import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingCart, ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { menuItems } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { generateSingleItemMessage, openWhatsApp } from '../utils/whatsapp';
import { formatCurrency } from '../utils/formatters';
import { addRecentItem } from '../utils/recentItems';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const item = menuItems.find((menuItem) => menuItem.id === id);
  const [selectedPortion, setSelectedPortion] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  useEffect(() => {
    if (id) {
      addRecentItem(id);
    }
  }, [id]);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Item not found</h2>
          <Button onClick={() => navigate('/menu')}>Back to Menu</Button>
        </div>
      </div>
    );
  }

  const selectedPortionData = item.portions[selectedPortion];
  const totalPrice = selectedPortionData.price * quantity;

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      portion: selectedPortionData.name,
      price: selectedPortionData.price,
      quantity,
      image: item.image,
      specialInstructions: specialInstructions || undefined,
    });
    navigate('/cart');
  };

  const handleWhatsAppOrder = () => {
    const message = generateSingleItemMessage(
      item.name,
      selectedPortionData.name,
      selectedPortionData.price,
      quantity,
      specialInstructions || undefined
    );
    openWhatsApp(message);
  };

  const relatedItems = menuItems
    .filter((menuItem) => menuItem.category === item.category && menuItem.id !== item.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[500px]"
                />
              </div>
              {item.bestseller && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                  ⭐ Bestseller
                </div>
              )}
              {!item.availableNow && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                  Pre-order Only (48 hours notice required)
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground">{item.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground">{item.description}</p>

            {item.eventTypes && item.eventTypes.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                  Perfect for:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.eventTypes.map((eventType) => (
                    <span
                      key={eventType}
                      className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {eventType}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6 rounded-lg border border-border p-6">
              <h3 className="mb-4 text-lg font-semibold">Select Portion/Package</h3>
              <div className="space-y-3">
                {item.portions.map((portion, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPortion(index)}
                    className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                      selectedPortion === index
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium">{portion.name}</p>
                        {portion.serves && (
                          <p className="text-sm text-muted-foreground">
                            Serves {portion.serves}
                          </p>
                        )}
                      </div>
                      <p className="text-xl font-bold text-primary">
                        {formatCurrency(portion.price)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-border text-xl font-bold hover:border-primary"
                >
                  -
                </button>
                <span className="min-w-[4rem] text-center text-2xl font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-border text-xl font-bold hover:border-primary"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                Special Instructions (Optional)
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="e.g., mild pepper, extra sauce, no onions..."
                className="w-full rounded-lg border border-border bg-input-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>

            <div className="mb-6 rounded-lg bg-muted p-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-3xl font-bold text-primary">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="whatsapp" size="lg" fullWidth onClick={handleWhatsAppOrder}>
                <WhatsAppLogo className="h-5 w-5" glow />
                Order via WhatsApp
              </Button>
            </div>

            {(item.ingredients || item.allergens) && (
              <div className="mt-8 space-y-4 rounded-lg border border-border p-6">
                {item.ingredients && (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Ingredients</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.ingredients.join(', ')}
                    </p>
                  </div>
                )}
                {item.allergens && (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Allergens</h3>
                    <p className="text-sm text-muted-foreground">
                      Contains: {item.allergens.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {relatedItems.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedItems.map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  onClick={() => navigate(`/menu/${relatedItem.id}`)}
                  className="cursor-pointer overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-xl"
                >
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.name}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="mb-1 font-semibold">{relatedItem.name}</h3>
                    <p className="text-sm text-primary">
                      {formatCurrency(relatedItem.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
