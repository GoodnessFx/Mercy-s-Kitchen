import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { openWhatsApp } from '../utils/whatsapp';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    title: 'Party Jollof & Small Chops',
    category: 'Events',
    description: 'A colorful spread for a birthday celebration in Makurdi.'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
    title: 'Crispy Samosas',
    category: 'Small Chops',
    description: 'Freshly fried golden samosas ready for an office event.'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800',
    title: 'Wedding Rice Cooler',
    category: 'Rice & Mains',
    description: 'Bulk jollof rice prepared for a traditional wedding.'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
    title: 'Chilled Chapman',
    category: 'Drinks',
    description: 'Refreshing fruit cocktails for a summer party.'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800',
    title: 'Zobo Setup',
    category: 'Drinks',
    description: 'Healthy traditional hibiscus drinks in bulk.'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1604329758728-f43c45dddd2e?w=800',
    title: 'Gizdodo Platter',
    category: 'Small Chops',
    description: 'The perfect combination of gizzard and plantain.'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
    title: 'Peppered Chicken',
    category: 'Small Chops',
    description: 'Spicy and juicy chicken pieces for event guests.'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1619419383046-b1e0b4b8d56e?w=800',
    title: 'Fluffy Puff Puff',
    category: 'Small Chops',
    description: 'The ultimate Nigerian party snack.'
  }
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Small Chops', 'Rice & Mains', 'Drinks', 'Events'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Our Food Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A feast for your eyes. See the love and quality we put into every dish we serve in Makurdi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-md"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {image.category}
                  </p>
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute right-6 top-6 text-white transition-colors hover:text-primary"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl overflow-hidden rounded-2xl bg-card shadow-2xl"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/3">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:w-1/3">
                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {selectedImage.category}
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-foreground">{selectedImage.title}</h2>
                    <p className="mb-8 text-muted-foreground">{selectedImage.description}</p>
                    
                    <div className="space-y-4">
                      <Button
                        variant="whatsapp"
                        fullWidth
                        onClick={() => openWhatsApp(`Hi Mercy! 👋 I saw the photo of "${selectedImage.title}" in your gallery and I'd like to order something similar.`)}
                      >
                        <WhatsAppLogo className="h-5 w-5" />
                        Order This Item
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={() => setSelectedImage(null)}
                      >
                        Back to Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Taste the Magic?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Don't just look at the photos. Experience the real flavor today. Order fresh small chops or a hearty rice plate now!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = '/menu'}
            >
              Browse Full Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => openWhatsApp('Hi Mercy! 👋 I just saw your gallery and I want to place an order.')}
            >
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
