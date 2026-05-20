import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from '../context/CartContext';
import { Navigation } from '../components/Navigation';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { ProductDetail } from '../pages/ProductDetail';
import { Cart } from '../pages/Cart';
import { Events } from '../pages/Events';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { TrackOrder } from '../pages/TrackOrder';
import { Gallery } from '../pages/Gallery';
import { NotFound } from '../pages/NotFound';
import { AdminLayout } from '../pages/admin/AdminLayout';
import { AdminLogin } from '../pages/admin/Login';
import { AdminDashboard } from '../pages/admin/Dashboard';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
};

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Public Routes with Navigation and Footer */}
            <Route element={
              <>
                <Navigation />
                <Outlet />
                <Footer />
                <WhatsAppButton />
              </>
            }>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/track" element={<TrackOrder />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="orders" element={<div className="p-4">Orders Management (Coming Soon)</div>} />
              <Route path="menu" element={<div className="p-4">Menu Management (Coming Soon)</div>} />
              <Route path="settings" element={<div className="p-4">Settings (Coming Soon)</div>} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

import { Outlet } from 'react-router';