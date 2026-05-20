export interface MenuItem {
  id: string;
  name: string;
  category: 'small-chops' | 'rice-mains' | 'drinks-desserts' | 'event-packages';
  description: string;
  price: number;
  priceUnit: string;
  image: string;
  portions: {
    name: string;
    price: number;
    serves?: string;
  }[];
  bestseller?: boolean;
  eventTypes?: string[];
  ingredients?: string[];
  allergens?: string[];
  dietary?: string[];
  availableNow?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'puff-puff',
    name: 'Puff Puff',
    category: 'small-chops',
    description: 'Fluffy golden-fried sweet dough balls, perfect for any occasion',
    price: 50,
    priceUnit: 'per piece',
    image: 'https://images.unsplash.com/photo-1619419383046-b1e0b4b8d56e?w=800',
    portions: [
      { name: 'Per Piece', price: 50 },
      { name: 'Per Tray (50 pieces)', price: 2000, serves: '10-15 people' },
      { name: 'Bulk (100 pieces)', price: 3500, serves: '20-30 people' },
      { name: 'Bulk (200 pieces)', price: 6500, serves: '40-60 people' }
    ],
    bestseller: true,
    eventTypes: ['Birthdays', 'Church Programs', 'School Events'],
    ingredients: ['Flour', 'Sugar', 'Yeast', 'Nutmeg'],
    allergens: ['Gluten'],
    availableNow: true
  },
  {
    id: 'samosa',
    name: 'Samosa',
    category: 'small-chops',
    description: 'Crispy pastry filled with seasoned minced meat and vegetables',
    price: 100,
    priceUnit: 'per piece',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
    portions: [
      { name: 'Per Piece', price: 100 },
      { name: 'Per Tray (50 pieces)', price: 4500, serves: '10-15 people' },
      { name: 'Bulk (100 pieces)', price: 8500, serves: '20-30 people' },
      { name: 'Bulk (200 pieces)', price: 16000, serves: '40-60 people' }
    ],
    bestseller: true,
    eventTypes: ['Weddings', 'Naming Ceremonies', 'Birthdays'],
    ingredients: ['Pastry', 'Minced Meat', 'Vegetables', 'Spices'],
    allergens: ['Gluten'],
    availableNow: true
  },
  {
    id: 'spring-rolls',
    name: 'Spring Rolls',
    category: 'small-chops',
    description: 'Crunchy golden rolls filled with seasoned vegetables and protein',
    price: 120,
    priceUnit: 'per piece',
    image: 'https://images.unsplash.com/photo-1555503821-2fe63d62a8f1?w=800',
    portions: [
      { name: 'Per Piece', price: 120 },
      { name: 'Per Tray (50 pieces)', price: 5500, serves: '10-15 people' },
      { name: 'Bulk (100 pieces)', price: 10000, serves: '20-30 people' },
      { name: 'Bulk (200 pieces)', price: 19000, serves: '40-60 people' }
    ],
    eventTypes: ['Weddings', 'Church Programs', 'Birthdays'],
    ingredients: ['Spring Roll Pastry', 'Cabbage', 'Carrots', 'Chicken'],
    allergens: ['Gluten'],
    availableNow: true
  },
  {
    id: 'gizdodo',
    name: 'Gizdodo',
    category: 'small-chops',
    description: 'Spicy gizzard with sweet plantain in rich pepper sauce',
    price: 200,
    priceUnit: 'per serving',
    image: 'https://images.unsplash.com/photo-1604329758728-f43c45dddd2e?w=800',
    portions: [
      { name: 'Per Serving', price: 200 },
      { name: 'Per Tray (30 servings)', price: 5500, serves: '8-10 people' },
      { name: 'Bulk (50 servings)', price: 9000, serves: '15-20 people' },
      { name: 'Bulk (100 servings)', price: 17000, serves: '30-40 people' }
    ],
    bestseller: true,
    eventTypes: ['Weddings', 'Birthdays', 'Naming Ceremonies'],
    ingredients: ['Gizzard', 'Plantain', 'Pepper', 'Onions', 'Spices'],
    availableNow: true
  },
  {
    id: 'peppered-chicken',
    name: 'Peppered Chicken',
    category: 'small-chops',
    description: 'Juicy chicken pieces in aromatic pepper sauce',
    price: 250,
    priceUnit: 'per serving',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
    portions: [
      { name: 'Per Serving', price: 250 },
      { name: 'Per Tray (30 servings)', price: 7000, serves: '8-10 people' },
      { name: 'Bulk (50 servings)', price: 11500, serves: '15-20 people' },
      { name: 'Bulk (100 servings)', price: 22000, serves: '30-40 people' }
    ],
    bestseller: true,
    eventTypes: ['Weddings', 'Birthdays', 'Church Programs'],
    ingredients: ['Chicken', 'Pepper', 'Onions', 'Spices'],
    availableNow: true
  },
  {
    id: 'peppered-meat',
    name: 'Peppered Meat',
    category: 'small-chops',
    description: 'Tender beef in spicy pepper sauce',
    price: 300,
    priceUnit: 'per serving',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800',
    portions: [
      { name: 'Per Serving', price: 300 },
      { name: 'Per Tray (30 servings)', price: 8500, serves: '8-10 people' },
      { name: 'Bulk (50 servings)', price: 14000, serves: '15-20 people' },
      { name: 'Bulk (100 servings)', price: 27000, serves: '30-40 people' }
    ],
    eventTypes: ['Weddings', 'Naming Ceremonies', 'Birthdays'],
    ingredients: ['Beef', 'Pepper', 'Onions', 'Spices'],
    availableNow: true
  },
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    category: 'rice-mains',
    description: 'Classic Nigerian party rice with rich tomato flavor',
    price: 800,
    priceUnit: 'per plate',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800',
    portions: [
      { name: 'Per Plate with Chicken', price: 1200 },
      { name: 'Per Plate with Turkey', price: 1500 },
      { name: 'Per Plate with Beef', price: 1300 },
      { name: 'Cooler (20 plates)', price: 22000, serves: '20 people' },
      { name: 'Cooler (50 plates)', price: 52000, serves: '50 people' },
      { name: 'Cooler (100 plates)', price: 100000, serves: '100 people' }
    ],
    bestseller: true,
    eventTypes: ['Weddings', 'Birthdays', 'Naming Ceremonies', 'Church Programs'],
    ingredients: ['Rice', 'Tomatoes', 'Peppers', 'Onions', 'Spices'],
    availableNow: true
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    category: 'rice-mains',
    description: 'Colorful vegetable fried rice with your choice of protein',
    price: 800,
    priceUnit: 'per plate',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
    portions: [
      { name: 'Per Plate with Chicken', price: 1200 },
      { name: 'Per Plate with Turkey', price: 1500 },
      { name: 'Per Plate with Beef', price: 1300 },
      { name: 'Cooler (20 plates)', price: 22000, serves: '20 people' },
      { name: 'Cooler (50 plates)', price: 52000, serves: '50 people' },
      { name: 'Cooler (100 plates)', price: 100000, serves: '100 people' }
    ],
    bestseller: true,
    eventTypes: ['Weddings', 'Birthdays', 'Naming Ceremonies'],
    ingredients: ['Rice', 'Mixed Vegetables', 'Liver', 'Spices'],
    availableNow: true
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    category: 'rice-mains',
    description: 'Fragrant rice cooked in creamy coconut milk',
    price: 900,
    priceUnit: 'per plate',
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800',
    portions: [
      { name: 'Per Plate with Chicken', price: 1300 },
      { name: 'Per Plate with Turkey', price: 1600 },
      { name: 'Per Plate with Beef', price: 1400 },
      { name: 'Cooler (20 plates)', price: 24000, serves: '20 people' },
      { name: 'Cooler (50 plates)', price: 57000, serves: '50 people' }
    ],
    eventTypes: ['Weddings', 'Naming Ceremonies'],
    ingredients: ['Rice', 'Coconut Milk', 'Vegetables', 'Spices'],
    availableNow: true
  },
  {
    id: 'native-rice',
    name: 'Native/Ofada Rice',
    category: 'rice-mains',
    description: 'Traditional local rice with authentic Nigerian stew',
    price: 1000,
    priceUnit: 'per plate',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800',
    portions: [
      { name: 'Per Plate with Assorted Meat', price: 1500 },
      { name: 'Cooler (20 plates)', price: 28000, serves: '20 people' },
      { name: 'Cooler (50 plates)', price: 65000, serves: '50 people' }
    ],
    eventTypes: ['Naming Ceremonies', 'Traditional Events'],
    ingredients: ['Ofada Rice', 'Palm Oil', 'Local Spices', 'Assorted Meat'],
    availableNow: false
  },
  {
    id: 'chapman',
    name: 'Chapman',
    category: 'drinks-desserts',
    description: 'Refreshing Nigerian cocktail with mixed fruits',
    price: 300,
    priceUnit: 'per cup',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
    portions: [
      { name: 'Single Cup', price: 300 },
      { name: 'Bulk (30 cups)', price: 8000, serves: '30 people' },
      { name: 'Bulk (50 cups)', price: 13000, serves: '50 people' },
      { name: 'Bulk (100 cups)', price: 25000, serves: '100 people' }
    ],
    bestseller: true,
    eventTypes: ['Birthdays', 'Weddings', 'Church Programs'],
    availableNow: true
  },
  {
    id: 'zobo',
    name: 'Zobo',
    category: 'drinks-desserts',
    description: 'Traditional hibiscus drink with natural flavors',
    price: 200,
    priceUnit: 'per cup',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800',
    portions: [
      { name: 'Single Cup', price: 200 },
      { name: 'Bulk (30 cups)', price: 5500, serves: '30 people' },
      { name: 'Bulk (50 cups)', price: 9000, serves: '50 people' },
      { name: 'Bulk (100 cups)', price: 17000, serves: '100 people' }
    ],
    bestseller: true,
    eventTypes: ['School Events', 'Church Programs', 'Naming Ceremonies'],
    ingredients: ['Hibiscus', 'Ginger', 'Pineapple', 'Natural Flavors'],
    availableNow: true
  },
  {
    id: 'smoothies',
    name: 'Smoothies',
    category: 'drinks-desserts',
    description: 'Fresh fruit smoothies - mango, strawberry, or mixed berry',
    price: 400,
    priceUnit: 'per cup',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800',
    portions: [
      { name: 'Single Cup', price: 400 },
      { name: 'Bulk (30 cups)', price: 11000, serves: '30 people' },
      { name: 'Bulk (50 cups)', price: 18000, serves: '50 people' }
    ],
    eventTypes: ['Birthdays', 'School Events'],
    availableNow: true
  },
  {
    id: 'parfait',
    name: 'Parfait Cups',
    category: 'drinks-desserts',
    description: 'Layered yogurt with fresh fruits and granola',
    price: 500,
    priceUnit: 'per cup',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800',
    portions: [
      { name: 'Single Cup', price: 500 },
      { name: 'Bulk (30 cups)', price: 14000, serves: '30 people' },
      { name: 'Bulk (50 cups)', price: 22000, serves: '50 people' }
    ],
    eventTypes: ['Birthdays', 'Weddings'],
    ingredients: ['Yogurt', 'Fresh Fruits', 'Granola', 'Honey'],
    availableNow: true
  },
  {
    id: 'fruit-cups',
    name: 'Fruit Cups',
    category: 'drinks-desserts',
    description: 'Fresh cut seasonal fruits in individual cups',
    price: 400,
    priceUnit: 'per cup',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800',
    portions: [
      { name: 'Single Cup', price: 400 },
      { name: 'Bulk (30 cups)', price: 11000, serves: '30 people' },
      { name: 'Bulk (50 cups)', price: 18000, serves: '50 people' }
    ],
    eventTypes: ['Birthdays', 'School Events', 'Church Programs'],
    availableNow: true
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    category: 'drinks-desserts',
    description: 'Premium ice cream - vanilla, chocolate, or strawberry',
    price: 350,
    priceUnit: 'per cup',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    portions: [
      { name: 'Single Cup', price: 350 },
      { name: 'Bulk (30 cups)', price: 9500, serves: '30 people' },
      { name: 'Bulk (50 cups)', price: 15000, serves: '50 people' }
    ],
    eventTypes: ['Birthdays', 'School Events'],
    availableNow: true
  }
];

export const eventPackages = [
  {
    id: 'birthday-package',
    name: 'Birthday Package',
    description: 'Complete party package for a memorable celebration',
    price: 45000,
    serves: '20-25 people',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
    includes: [
      'Small Chops Tray (100 pieces mixed)',
      'Jollof Rice (20 plates with chicken)',
      'Chapman (20 cups)',
      'Fruit Cups (20 cups)',
      'Delivery within Makurdi'
    ],
    savings: '₦5,000 savings',
    eventType: 'Birthdays'
  },
  {
    id: 'naming-ceremony-package',
    name: 'Naming Ceremony Package',
    description: 'Traditional celebration with authentic Nigerian flavors',
    price: 85000,
    serves: '50 people',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800',
    includes: [
      'Native Rice (30 plates with assorted meat)',
      'Fried Rice (20 plates with chicken)',
      'Small Chops Tray (150 pieces mixed)',
      'Zobo (50 cups)',
      'Free delivery'
    ],
    savings: '₦10,000 savings',
    eventType: 'Naming Ceremonies'
  },
  {
    id: 'church-program-package',
    name: 'Church Program Package',
    description: 'Feed the congregation with delicious refreshments',
    price: 55000,
    serves: '100 people',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    includes: [
      'Bulk Puff Puff (200 pieces)',
      'Spring Rolls (100 pieces)',
      'Zobo (100 cups)',
      'Free delivery'
    ],
    savings: '₦8,000 savings',
    eventType: 'Church Programs'
  },
  {
    id: 'wedding-package',
    name: 'Wedding Package',
    description: 'Full catering for your special day',
    price: 250000,
    serves: '100 people',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
    includes: [
      'Jollof Rice Cooler (50 plates with turkey)',
      'Fried Rice Cooler (50 plates with chicken)',
      'Small Chops Tray (300 pieces assorted)',
      'Chapman (100 cups)',
      'Parfait Cups (50)',
      'Full event setup & service'
    ],
    savings: '₦30,000 savings',
    eventType: 'Weddings'
  },
  {
    id: 'school-event-package',
    name: 'School Event Package',
    description: 'Budget-friendly package for school functions',
    price: 35000,
    serves: '50 students',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    includes: [
      'Jollof Rice (50 plates with chicken)',
      'Puff Puff (100 pieces)',
      'Zobo (50 cups)',
      'Free delivery'
    ],
    savings: '₦5,000 savings',
    eventType: 'School Events'
  }
];

export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'small-chops', name: 'Small Chops', icon: '🍢' },
  { id: 'rice-mains', name: 'Rice & Mains', icon: '🍚' },
  { id: 'drinks-desserts', name: 'Drinks & Desserts', icon: '🥤' },
  { id: 'event-packages', name: 'Event Packages', icon: '🎉' }
];

export const eventTypes = [
  'Weddings',
  'Birthdays',
  'Naming Ceremonies',
  'Church Programs',
  'School Events'
];
