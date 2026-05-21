import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppLogo } from '../components/WhatsAppLogo';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Mercy! 👋

I'd like to inquire about catering:

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
🎉 Event Type: ${formData.eventType}
👥 Guest Count: ${formData.guestCount}
📅 Event Date: ${formData.eventDate}

${formData.message ? `📝 Additional Details:\n${formData.message}` : ''}

Please get back to me. Thank you! 🙏`;

    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Planning an event? We're here to help make it delicious!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <div className="mb-8 flex items-center gap-4 rounded-2xl bg-primary/5 p-4 border border-primary/10">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                <img src="/ceo.jpeg" alt="Mercy Iyamah" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Message from Mercy</h3>
                <p className="text-sm text-muted-foreground italic">"I'm here to ensure your event food is nothing short of perfect. Let's talk about your menu!"</p>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:09121772238"
                    className="text-muted-foreground hover:text-primary"
                  >
                    0912 177 2238
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                  <WhatsAppLogo className="h-6 w-6" glow />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                  <p className="mb-2 text-muted-foreground">
                    For fastest response, message us on WhatsApp
                  </p>
                  <Button
                    variant="whatsapp"
                    size="sm"
                    onClick={() =>
                      openWhatsApp("Hi Mercy! 👋 I'd like to place a food order!")
                    }
                  >
                    <WhatsAppLogo className="h-4 w-4 mr-2" glow />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Makurdi, Benue State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                  <p className="mt-2 text-sm text-accent">
                    For urgent orders, WhatsApp is fastest!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-foreground">
                Service Areas
              </h3>
              <p className="text-sm text-muted-foreground">
                We deliver to all areas within Makurdi and surrounding locations.
                For bulk orders within Makurdi, delivery is often free! Contact us to
                confirm delivery availability for your specific location.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-card p-5 shadow-md sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Catering Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 0912 177 2238"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Naming Ceremony">Naming Ceremony</option>
                    <option value="Church Program">Church Program</option>
                    <option value="School Event">School Event</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Number of guests"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your event, budget range, specific requirements..."
                  />
                </div>

                <Button type="submit" variant="whatsapp" size="lg" fullWidth>
                  <WhatsAppLogo className="h-5 w-5" glow />
                  Send Inquiry via WhatsApp
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  This will open WhatsApp with your inquiry pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
