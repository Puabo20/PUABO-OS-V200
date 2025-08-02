import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Radio, 
  Music, 
  DollarSign, 
  Building2, 
  User, 
  LogOut,
  Settings
} from 'lucide-react';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'TV & Radio', href: '/tvradio', icon: Radio },
  { name: 'Music & Media', href: '/musicmedia', icon: Music },
  { name: 'Monetization', href: '/monetization', icon: DollarSign },
  { name: 'BLAC', href: '/blac', icon: Building2 },
  { name: 'Profile', href: '/profile', icon: User },
];

export function Navigation() {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className="bg-puabo-accent border-r border-puabo-gray min-h-screen w-64 flex flex-col">
      <div className="p-6 border-b border-puabo-gray">
        <h1 className="text-2xl font-bold text-puabo-primary">PUABO OS</h1>
        <p className="text-sm text-gray-400 mt-1">Creator OS v2.0.0</p>
      </div>

      <div className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={clsx(
                    'flex items-center px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-puabo-primary text-puabo-dark font-semibold'
                      : 'text-gray-300 hover:bg-puabo-gray hover:text-puabo-primary'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-puabo-gray">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-puabo-primary rounded-full flex items-center justify-center text-puabo-dark font-bold">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{user?.username}</p>
            <p className="text-xs text-gray-400">{user?.role}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link
            to="/settings"
            className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg text-gray-300 hover:bg-puabo-gray hover:text-puabo-primary transition-colors"
          >
            <Settings className="w-4 h-4" />
          </Link>
          <button
            onClick={logout}
            className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}