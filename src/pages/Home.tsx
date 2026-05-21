import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Clock, Award, Truck, Star, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { FoodCard } from '../components/FoodCard';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { menuItems, eventTypes } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { generateSingleItemMessage, openWhatsApp } from '../utils/whatsapp';
import { MenuItem } from '../data/menuData';
import * as Dialog from '@radix-ui/react-dialog';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600', // Party Jollof
  'https://images.unsplash.com/photo-1604329758728-f43c45dddd2e?w=1600', // Gizdodo
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1600', // Samosas
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1600', // Wedding Rice
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600', // Chapman
  'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=1600', // Zobo
  'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1600', // Peppered Chicken
  'https://images.unsplash.com/photo-1567070506502-fa9602fa92f7?w=1600', // Platter
  'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1600', // Fresh Grill
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedPortion, setSelectedPortion] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const bestsellers = menuItems.filter((item) => item.bestseller);

  const handleAddToCart = (item: MenuItem) => {
    setSelectedItem(item);
    setSelectedPortion(0);
    setQuantity(1);
  };

  const confirmAddToCart = () => {
    if (selectedItem) {
      const portion = selectedItem.portions[selectedPortion];
      addToCart({
        id: selectedItem.id,
        name: selectedItem.name,
        portion: portion.name,
        price: portion.price,
        quantity,
        image: selectedItem.image,
      });
      setSelectedItem(null);
    }
  };

  const handleWhatsAppOrder = (item: MenuItem) => {
    const portion = item.portions[0];
    const message = generateSingleItemMessage(
      item.name,
      portion.name,
      portion.price,
      1
    );
    openWhatsApp(message);
  };

  const handleViewItem = (item: MenuItem) => {
    navigate(`/menu/${item.id}`);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        {/* Background Image Carousel with sophisticated overlay */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Hero Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-left"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block font-sans">We Cook the Vibe.</span>
              <span className="mt-2 block font-serif italic text-secondary">
                You Enjoy the Moment.
              </span>
            </h1>
            
            <p className="mb-10 max-w-lg text-lg text-gray-300 sm:text-xl">
              Premium catering and artisanal small chops for Makurdi's most memorable moments. Freshly crafted, delivered with love.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="group relative overflow-hidden px-10 py-4 text-lg font-bold shadow-lg shadow-primary/20"
                onClick={() => navigate('/menu')}
              >
                <span className="relative z-10">Order Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 px-10 py-4 text-lg font-bold text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                onClick={() => navigate('/events')}
              >
                Browse Event Packages
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-primary py-3">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex min-w-max whitespace-nowrap text-sm font-medium text-primary-foreground"
        >
          <span className="mx-8">🍢 SMALL CHOPS</span>
          <span className="mx-8">🍚 JOLLOF RICE</span>
          <span className="mx-8">🥤 CHAPMAN</span>
          <span className="mx-8">🎉 EVENT PACKAGES</span>
          <span className="mx-8">✦ FREE DELIVERY WITHIN MAKURDI ON BULK ORDERS ✦</span>
          <span className="mx-8">✦ ORDER VIA WHATSAPP ✦</span>
          <span className="mx-8">🍢 SMALL CHOPS</span>
          <span className="mx-8">🍚 JOLLOF RICE</span>
          <span className="mx-8">🥤 CHAPMAN</span>
          <span className="mx-8">🎉 EVENT PACKAGES</span>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our Bestsellers
          </h2>
          <p className="text-lg text-muted-foreground">
            Customer favorites that keep them coming back
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bestsellers.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
              onWhatsAppOrder={handleWhatsAppOrder}
              onClick={handleViewItem}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/menu')}
          >
            View Full Menu <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Perfect for Every Occasion
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => (
              <Link
                key={type}
                to="/events"
                className="rounded-full bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
              >
                {type}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
              1️⃣
            </div>
            <h3 className="mb-2 text-xl font-semibold">Choose Your Food</h3>
            <p className="text-muted-foreground">
              Browse our menu of delicious small chops, rice dishes, and drinks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
              2️⃣
            </div>
            <h3 className="mb-2 text-xl font-semibold">Place Order via WhatsApp</h3>
            <p className="text-muted-foreground">
              One tap to send your order directly to Mercy on WhatsApp
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
              3️⃣
            </div>
            <h3 className="mb-2 text-xl font-semibold">We Deliver to You</h3>
            <p className="text-muted-foreground">
              Fresh food delivered on time to your location in Makurdi
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by hundreds of happy clients in Makurdi
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: 'Blessing A.',
                text: "Mercy catered my daughter's naming ceremony and the food was fire! Everyone kept asking for her number.",
                role: 'Mother',
                image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100'
              },
              {
                name: 'Emeka J.',
                text: "The best small chops in Makurdi, hands down. Fresh, hot, and delivered right on time for our office party.",
                role: 'Business Owner',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
              },
              {
                name: 'Terna S.',
                text: "Her jollof rice is legendary. It has that authentic party taste that you can't find anywhere else.",
                role: 'Event Planner',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100'
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-8 shadow-sm border border-border"
              >
                <div className="mb-4 flex gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-primary px-8 py-12 text-primary-foreground sm:px-16 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-5xl">Ready to Eat?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90 sm:text-xl">
            Don't stay hungry. Order your favorite small chops or main meal now and have it delivered fresh to your door.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => navigate('/menu')}
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => openWhatsApp('Hi Mercy! 👋 I want to place an order.')}
            >
              <WhatsAppLogo className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Dialog.Root open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-card p-4 shadow-xl sm:w-full sm:p-6">
            {selectedItem && (
              <>
                <Dialog.Title className="mb-4 text-2xl font-bold">
                  Add to Cart
                </Dialog.Title>
                <div className="mb-4">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="h-48 w-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{selectedItem.name}</h3>
                <p className="mb-4 text-muted-foreground">{selectedItem.description}</p>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium">
                    Select Portion/Package
                  </label>
                  <div className="space-y-2">
                    {selectedItem.portions.map((portion, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPortion(index)}
                        className={`w-full rounded-lg border-2 p-3 text-left transition-all ${
                          selectedPortion === index
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <span className="font-medium">{portion.name}</span>
                          <span className="font-bold text-primary">
                            ₦{portion.price.toLocaleString()}
                          </span>
                        </div>
                        {portion.serves && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            Serves {portion.serves}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium">Quantity</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border font-bold hover:border-primary"
                    >
                      -
                    </button>
                    <span className="min-w-[3rem] text-center text-xl font-bold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border font-bold hover:border-primary"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mb-4 rounded-lg bg-muted p-3">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">
                      ₦{(selectedItem.portions[selectedPortion].price * quantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => setSelectedItem(null)}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" fullWidth onClick={confirmAddToCart}>
                    Add to Cart
                  </Button>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
