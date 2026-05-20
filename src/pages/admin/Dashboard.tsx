import React from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Revenue', value: '₦428,500', icon: TrendingUp, change: '+12.5%', trend: 'up' },
    { label: 'Active Orders', value: '18', icon: ShoppingBag, change: '+3', trend: 'up' },
    { label: 'New Customers', value: '24', icon: Users, change: '+5.2%', trend: 'up' },
    { label: 'Avg. Delivery Time', value: '32m', icon: Clock, change: '-2.1%', trend: 'down' },
  ];

  const recentOrders = [
    { id: '#M-4521', customer: 'Faith Odeh', items: '2x Jollof Rice, 1x Samosa', status: 'Cooking', total: '₦3,500', time: '5 mins ago' },
    { id: '#M-4520', customer: 'Tunde Benue', items: '1x Gizdodo, 1x Chapman', status: 'Delivering', total: '₦2,100', time: '12 mins ago' },
    { id: '#M-4519', customer: 'Sarah Mike', items: 'Bulk Puff Puff (100pcs)', status: 'Pending', total: '₦4,500', time: '25 mins ago' },
    { id: '#M-4518', customer: 'John Doe', items: '1x Native Rice, 1x Zobo', status: 'Completed', total: '₦2,800', time: '1 hour ago' },
    { id: '#M-4517', customer: 'Grace Emmanuel', items: 'Wedding Package B', status: 'Completed', total: '₦125,000', time: '3 hours ago' },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Cooking': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Delivering': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Mercy. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border p-6">
            <h2 className="text-lg font-bold text-foreground">Recent Orders</h2>
            <button className="text-sm font-medium text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-6 py-3 font-semibold text-foreground">Order ID</th>
                  <th className="px-6 py-3 font-semibold text-foreground">Customer</th>
                  <th className="px-6 py-3 font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 font-semibold text-foreground">Total</th>
                  <th className="px-6 py-3 font-semibold text-foreground">Time</th>
                  <th className="px-6 py-3 font-semibold text-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="transition-colors hover:bg-muted/30">
                    <td className="px-6 py-4 font-medium text-foreground">{order.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground">{order.customer}</p>
                        <p className="text-xs text-muted-foreground truncate max-w-[150px]">{order.items}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-foreground">{order.total}</td>
                    <td className="px-6 py-4 text-muted-foreground">{order.time}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="rounded-md p-1 hover:bg-muted">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Center / Quick Actions */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-foreground">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Add Order</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                <div className="rounded-full bg-accent/10 p-2 text-accent">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Verify Pay</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Reports</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Customers</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-foreground">Stock Alerts</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">Flour running low</p>
                  <p className="text-xs text-muted-foreground">Only 2 bags left in store</p>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">Restock</button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">Cooking Gas</p>
                  <p className="text-xs text-muted-foreground">Check cylinder levels</p>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">Check</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
