import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Settings2, X } from 'lucide-react';
import { Button } from '../components/Button';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { eventPackages } from '../data/menuData';
import { generateEventInquiryMessage, openWhatsApp } from '../utils/whatsapp';

export const Events: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<typeof eventPackages[0] | null>(null);

  const handleInquiry = (packageName: string, serves: string, price: number) => {
    const message = `Hi Mercy! 👋 I'm interested in the ${packageName} (${serves}, ₦${price.toLocaleString()}). Please send me more details. Thank you!`;
    openWhatsApp(message);
  };

  const handleCustomInquiry = (packageName: string, serves: string, price: number) => {
    const message = `Hi Mercy! 👋 I'd like to customize the ${packageName} (${serves}). I have some specific requirements. Can we discuss?`;
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Event Catering Packages
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Pre-designed packages for your special occasions. Save time and money with our curated bundles.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-card shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute right-2 top-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow-md">
                  {pkg.savings}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {pkg.eventType}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{pkg.description}</p>

                <div className="mb-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    What's Included:
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Serves</p>
                    <p className="font-semibold">{pkg.serves}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Total Price</p>
                    <p className="text-2xl font-bold text-primary">
                      ₦{pkg.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="whatsapp"
                    fullWidth
                    onClick={() => handleInquiry(pkg.name, pkg.serves, pkg.price)}
                  >
                    <WhatsAppLogo className="h-5 w-5" glow />
                    Inquire via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => setSelectedPkg(pkg)}
                  >
                    <Settings2 className="h-5 w-5 mr-2" />
                    Customize This Package
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customize Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-2xl bg-card p-8 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Customize {selectedPkg.name}</h2>
              <button onClick={() => setSelectedPkg(null)} className="rounded-full p-2 hover:bg-muted">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="mb-6 text-muted-foreground">
              You can swap items, add extras, or adjust quantities for this package. 
              Let Mercy know what you'd like to change!
            </p>

            <div className="mb-8 space-y-4">
              <div className="rounded-lg border border-border p-4">
                <p className="text-sm font-semibold mb-2">Currently Includes:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {selectedPkg.includes.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <textarea 
                placeholder="E.g., Swap Samosa for Spring Rolls, Add 20 extra cups of Zobo..."
                className="w-full rounded-lg border border-border bg-input-background p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button 
                variant="whatsapp" 
                fullWidth 
                onClick={() => {
                  handleCustomInquiry(selectedPkg.name, selectedPkg.serves, selectedPkg.price);
                  setSelectedPkg(null);
                }}
              >
                <WhatsAppLogo className="h-5 w-5" />
                Discuss Customization
              </Button>
              <Button variant="outline" fullWidth onClick={() => setSelectedPkg(null)}>
                Cancel
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Need a Custom Package?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Have specific requirements for your event? We can create a custom package tailored to your needs and budget.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const message = generateEventInquiryMessage(
                'Custom Event',
                0,
                '',
                ''
              );
              openWhatsApp(message);
            }}
          >
            <WhatsAppLogo className="h-5 w-5" />
            Request Custom Package
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: 'How far in advance should I book?',
              a: 'For event packages, we recommend booking at least 48-72 hours in advance. For larger events (100+ people), please give us 1 week notice to ensure availability.',
            },
            {
              q: 'Do you deliver outside Makurdi?',
              a: 'We primarily serve Makurdi and surrounding areas. For deliveries outside Makurdi, please contact us via WhatsApp to discuss logistics and additional delivery fees.',
            },
            {
              q: 'Can I customize a package?',
              a: 'Absolutely! You can swap items, adjust quantities, or build a completely custom package. Just send us a message on WhatsApp with your requirements.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept bank transfer and cash on delivery. Full payment details will be shared after order confirmation.',
            },
          ].map((faq, index) => (
            <div key={index} className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
