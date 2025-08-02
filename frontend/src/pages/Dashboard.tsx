
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  DollarSign, 
  Play, 
  Upload,
  TrendingUp,
  Activity
} from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Followers', value: '12.5K', icon: Users, change: '+15%' },
    { name: 'Monthly Revenue', value: '$3,247', icon: DollarSign, change: '+8%' },
    { name: 'Content Views', value: '847K', icon: Play, change: '+23%' },
    { name: 'Uploads This Month', value: '24', icon: Upload, change: '+12%' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.username}!
        </h1>
        <p className="text-gray-400">
          Here's what's happening with your creator journey today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-puabo-gray border border-puabo-accent rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-puabo-primary" />
              <span className="text-green-400 text-sm font-medium flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-puabo-primary" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-puabo-accent">
              <div>
                <p className="text-white font-medium">New subscriber milestone</p>
                <p className="text-gray-400 text-sm">Reached 12,500 followers</p>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-puabo-accent">
              <div>
                <p className="text-white font-medium">Content uploaded</p>
                <p className="text-gray-400 text-sm">"My Creative Process" video</p>
              </div>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-white font-medium">Payment received</p>
                <p className="text-gray-400 text-sm">Monthly subscription earnings</p>
              </div>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>

        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-puabo-primary text-puabo-dark font-semibold py-3 px-4 rounded-lg hover:bg-puabo-secondary transition-colors">
              Upload Content
            </button>
            <button className="border border-puabo-primary text-puabo-primary font-semibold py-3 px-4 rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors">
              Start Stream
            </button>
            <button className="border border-puabo-primary text-puabo-primary font-semibold py-3 px-4 rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors">
              View Analytics
            </button>
            <button className="border border-puabo-primary text-puabo-primary font-semibold py-3 px-4 rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors">
              Manage Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}