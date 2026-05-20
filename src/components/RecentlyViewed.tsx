import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getRecentItems } from '../utils/recentItems';
import { menuItems } from '../data/menuData';
import { formatCurrency } from '../utils/formatters';

export const RecentlyViewed: React.FC = () => {
  const [items, setItems] = useState<typeof menuItems>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ids = getRecentItems();
    const recentItems = ids
      .map(id => menuItems.find(item => item.id === id))
      .filter((item): item is typeof menuItems[0] => !!item);
    setItems(recentItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Recently Viewed</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/menu/${item.id}`)}
            className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-3">
              <h3 className="truncate text-sm font-semibold text-foreground">{item.name}</h3>
              <p className="text-xs font-bold text-primary">{formatCurrency(item.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
