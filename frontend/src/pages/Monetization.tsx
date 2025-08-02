
import { DollarSign, CreditCard, TrendingUp, History } from 'lucide-react';

export function Monetization() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <DollarSign className="w-8 h-8 mr-3 text-puabo-primary" />
          Monetization
        </h1>
        <p className="text-gray-400">
          Manage your earnings, Stripe integration, and payout history.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-puabo-primary" />
            Earnings Overview
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">This Month</span>
              <span className="text-2xl font-bold text-white">$3,247.50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Last Month</span>
              <span className="text-lg text-gray-300">$2,984.20</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">All Time</span>
              <span className="text-lg text-gray-300">$24,567.80</span>
            </div>
          </div>
        </div>

        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-puabo-primary" />
            Payment Methods
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Stripe Account</h3>
                <p className="text-gray-400 text-sm">Connected • Active</p>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
            </div>
            <button className="w-full py-3 px-4 border border-puabo-primary text-puabo-primary rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>

      <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <History className="w-5 h-5 mr-2 text-puabo-primary" />
          Recent Transactions
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
            <div>
              <h3 className="text-white font-medium">Subscription Payment</h3>
              <p className="text-gray-400 text-sm">From premium subscriber</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-semibold">+$29.99</p>
              <p className="text-gray-400 text-sm">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
            <div>
              <h3 className="text-white font-medium">Content Purchase</h3>
              <p className="text-gray-400 text-sm">Single track sale</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-semibold">+$2.99</p>
              <p className="text-gray-400 text-sm">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}