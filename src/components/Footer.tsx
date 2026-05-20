import React from 'react';
import { Link } from 'react-router';
import { UtensilsCrossed, Phone, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">Mercy's Kitchen</span>
                <span className="text-xs text-muted-foreground">Makurdi's Finest</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium catering and small chops for every occasion in Makurdi.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary">
                  Event Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Small Chops Catering</li>
              <li>Event Food Packages</li>
              <li>Rice & Main Dishes</li>
              <li>Drinks & Desserts</li>
              <li>Home Delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:09121772238" className="hover:text-primary">
                  0912 177 2238
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Makurdi, Benue State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" /> by Mercy Iyamah
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mercy's Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
