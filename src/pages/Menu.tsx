import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { FoodCard } from '../components/FoodCard';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { generateSingleItemMessage, openWhatsApp } from '../utils/whatsapp';
import { MenuItem } from '../data/menuData';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../components/Button';
import { Search, X } from 'lucide-react';
import { RecentlyViewed } from '../components/RecentlyViewed';

type SortOption = 'popular' | 'price-low' | 'price-high';

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedPortion, setSelectedPortion] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchQuery(search);
      setActiveCategory('all');
    }
  }, [location.search]);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

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
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Our Menu</h1>
          <p className="text-lg text-muted-foreground">
            Browse our delicious selection of food and drinks
          </p>
        </div>

        {searchQuery && (
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-muted-foreground">Showing results for:</span>
            <span className="font-bold text-foreground">"{searchQuery}"</span>
            <button
              onClick={() => {
                setSearchQuery('');
                navigate('/menu', { replace: true });
              }}
              className="ml-2 flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground hover:bg-muted/80"
            >
              <X className="h-3 w-3" /> Clear Search
            </button>
          </div>
        )}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <label className="text-sm font-medium text-foreground">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {sortedItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
              onWhatsAppOrder={handleWhatsAppOrder}
              onClick={handleViewItem}
            />
          ))}
        </motion.div>

        {sortedItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No items found in this category
            </p>
          </div>
        )}

        <RecentlyViewed />
      </div>

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
