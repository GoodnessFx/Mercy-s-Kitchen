const RECENT_ITEMS_KEY = 'mercy_kitchen_recent_items';
const MAX_RECENT_ITEMS = 4;

export const addRecentItem = (itemId: string) => {
  if (typeof window === 'undefined') return;
  
  const recent = getRecentItems();
  const updated = [itemId, ...recent.filter(id => id !== itemId)].slice(0, MAX_RECENT_ITEMS);
  
  localStorage.setItem(RECENT_ITEMS_KEY, JSON.stringify(updated));
};

export const getRecentItems = (): string[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const data = localStorage.getItem(RECENT_ITEMS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};
