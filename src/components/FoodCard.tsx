import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { Button } from './Button';
import { WhatsAppLogo } from './WhatsAppLogo';
import { formatCurrency } from '../utils/formatters';
import { motion } from 'motion/react';

interface FoodCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onWhatsAppOrder: (item: MenuItem) => void;
  onClick: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  item,
  onAddToCart,
  onWhatsAppOrder,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div
        className="relative cursor-pointer overflow-hidden"
        onClick={() => onClick(item)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        {item.bestseller && (
          <div className="absolute left-2 top-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-md">
            ⭐ Bestseller
          </div>
        )}
        {!item.availableNow && (
          <div className="absolute right-2 top-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground shadow-md">
            Pre-order Only
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3
          className="mb-1 cursor-pointer text-lg font-semibold text-card-foreground hover:text-primary"
          onClick={() => onClick(item)}
        >
          {item.name}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {item.description}
        </p>
        <div className="mb-4 flex items-baseline justify-between">
          <div>
            <span className="text-xl font-bold text-primary">
              {formatCurrency(item.price)}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">
              {item.priceUnit}
            </span>
          </div>
          {item.portions && item.portions.length > 1 && (
            <span className="text-xs text-muted-foreground">
              {item.portions.length} sizes available
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1 whitespace-nowrap px-2 sm:px-4"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
          >
            <ShoppingCart className="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">Add to Cart</span>
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            className="flex-1 whitespace-nowrap px-2 sm:px-4"
            onClick={(e) => {
              e.stopPropagation();
              onWhatsAppOrder(item);
            }}
          >
            <WhatsAppLogo className="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4" glow />
            <span className="text-xs sm:text-sm">Order</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
