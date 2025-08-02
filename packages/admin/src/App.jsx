import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [users, setUsers] = useState([])
  const [analytics, setAnalytics] = useState(null)

  const handleLogin = () => {
    // Mock admin login
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  // Mock data loading
  useEffect(() => {
    if (isAuthenticated) {
      // Load mock users
      setUsers([
        { id: 1, name: 'John Creator', email: 'john@example.com', role: 'creator', status: 'active' },
        { id: 2, name: 'Jane Streamer', email: 'jane@example.com', role: 'creator', status: 'active' },
        { id: 3, name: 'Mike Producer', email: 'mike@example.com', role: 'creator', status: 'inactive' }
      ])

      // Load mock analytics
      setAnalytics({
        totalUsers: 1250,
        activeStreams: 23,
        totalRevenue: 45678.90,
        newUsersToday: 15
      })
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-puabo-secondary flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-puabo-primary mb-2">
              PUABO OS Admin
            </h1>
            <p className="text-puabo-primary/70 mb-8">
              Administration Dashboard
            </p>
          </div>
          
          <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
            <h2 className="text-xl font-semibold text-puabo-primary mb-4">
              Admin Access
            </h2>
            <p className="text-puabo-primary/70 mb-6">
              Sign in to access the admin dashboard
            </p>
            
            <button
              onClick={handleLogin}
              className="w-full bg-puabo-primary text-puabo-secondary font-bold py-3 px-4 rounded-lg hover:bg-puabo-primary/90 transition-colors shadow-lg"
            >
              Sign In as Admin
            </button>
            
            <p className="text-xs text-puabo-primary/50 mt-4">
              Demo: Uses mock authentication
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-puabo-primary">Dashboard Overview</h2>
            
            {analytics && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
                  <h3 className="text-sm font-medium text-puabo-primary/70">Total Users</h3>
                  <p className="text-2xl font-bold text-puabo-primary">{analytics.totalUsers.toLocaleString()}</p>
                </div>
                <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
                  <h3 className="text-sm font-medium text-puabo-primary/70">Active Streams</h3>
                  <p className="text-2xl font-bold text-puabo-primary">{analytics.activeStreams}</p>
                </div>
                <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
                  <h3 className="text-sm font-medium text-puabo-primary/70">Total Revenue</h3>
                  <p className="text-2xl font-bold text-puabo-primary">${analytics.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
                  <h3 className="text-sm font-medium text-puabo-primary/70">New Users Today</h3>
                  <p className="text-2xl font-bold text-puabo-primary">{analytics.newUsersToday}</p>
                </div>
              </div>
            )}
          </div>
        )
      
      case 'users':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-puabo-primary">User Management</h2>
            
            <div className="bg-puabo-dark/50 rounded-lg border border-puabo-light overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-puabo-accent">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-puabo-primary uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-puabo-primary uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-puabo-primary uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-puabo-primary uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-puabo-primary uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-puabo-light">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-puabo-primary">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-puabo-primary/70">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-puabo-primary">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-puabo-primary hover:text-puabo-primary/70 mr-4">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      
      case 'logs':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-puabo-primary">System Logs</h2>
            
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-puabo-accent rounded">
                  <span className="text-puabo-primary">User login successful - john@example.com</span>
                  <span className="text-xs text-puabo-primary/50">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-puabo-accent rounded">
                  <span className="text-yellow-400">High memory usage detected - Streaming service</span>
                  <span className="text-xs text-puabo-primary/50">5 minutes ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-puabo-accent rounded">
                  <span className="text-red-400">Payment processing failed - Order #123</span>
                  <span className="text-xs text-puabo-primary/50">10 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'modules':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-puabo-primary">Module Control</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Auth', 'Streaming', 'Monetization', 'BLAC', 'TV/Radio', 'Music/Media', 'Notifications'].map((module) => (
                <div key={module} className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-puabo-primary">{module}</h3>
                    <div className="flex items-center">
                      <span className="text-green-400 text-sm mr-2">●</span>
                      <span className="text-puabo-primary/70 text-sm">Active</span>
                    </div>
                  </div>
                  <p className="text-puabo-primary/50 text-sm mt-2">Module is running normally</p>
                  <button className="mt-4 w-full bg-puabo-primary/20 text-puabo-primary border border-puabo-primary py-2 px-4 rounded-lg hover:bg-puabo-primary/30 transition-colors">
                    Configure
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-puabo-secondary">
      {/* Header */}
      <header className="bg-puabo-accent border-b border-puabo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-puabo-primary">
                PUABO OS Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-puabo-primary">Admin User</span>
              <button
                onClick={handleLogout}
                className="bg-puabo-primary/20 text-puabo-primary px-4 py-2 rounded-lg hover:bg-puabo-primary/30 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-puabo-accent min-h-screen border-r border-puabo-light">
          <div className="p-4">
            <ul className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: '📊' },
                { id: 'users', label: 'User Management', icon: '👥' },
                { id: 'logs', label: 'System Logs', icon: '📝' },
                { id: 'modules', label: 'Module Control', icon: '⚙️' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-puabo-primary text-puabo-secondary'
                        : 'text-puabo-primary hover:bg-puabo-primary/20'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App
