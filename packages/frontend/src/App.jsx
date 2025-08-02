import { useState } from 'react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogin = async () => {
    // Mock login - replace with actual API call
    try {
      const response = await fetch('http://localhost:3002/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'creator@puabo.com',
          password: 'creator123'
        })
      })
      const data = await response.json()
      
      if (data.success) {
        setIsAuthenticated(true)
        setUser(data.user)
        localStorage.setItem('token', data.token)
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('token')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-puabo-secondary flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-puabo-primary mb-2">
              PUABO OS v2.0.0
            </h1>
            <p className="text-puabo-primary/70 mb-8">
              The World's First! Creator OS
            </p>
          </div>
          
          <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
            <h2 className="text-xl font-semibold text-puabo-primary mb-4">
              Welcome Back
            </h2>
            <p className="text-puabo-primary/70 mb-6">
              Sign in to access your creator dashboard
            </p>
            
            <button
              onClick={handleLogin}
              className="w-full bg-puabo-primary text-puabo-secondary font-bold py-3 px-4 rounded-lg hover:bg-puabo-primary/90 transition-colors shadow-lg"
            >
              Sign In
            </button>
            
            <p className="text-xs text-puabo-primary/50 mt-4">
              Demo: Uses mock authentication
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-puabo-secondary">
      {/* Header */}
      <header className="bg-puabo-accent border-b border-puabo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-puabo-primary">
                PUABO OS v2.0.0
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-puabo-primary">
                Welcome, {user?.name || 'Creator'}
              </span>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Live Streaming */}
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <h3 className="text-lg font-semibold text-puabo-primary mb-4">
                Live Streaming
              </h3>
              <p className="text-puabo-primary/70 mb-4">
                Start your live stream and connect with your audience
              </p>
              <button className="w-full bg-puabo-primary text-puabo-secondary font-bold py-2 px-4 rounded-lg hover:bg-puabo-primary/90 transition-colors">
                Go Live
              </button>
            </div>

            {/* Content Library */}
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <h3 className="text-lg font-semibold text-puabo-primary mb-4">
                Media Library
              </h3>
              <p className="text-puabo-primary/70 mb-4">
                Manage your music, videos, and content
              </p>
              <button className="w-full bg-puabo-primary/20 text-puabo-primary border border-puabo-primary py-2 px-4 rounded-lg hover:bg-puabo-primary/30 transition-colors">
                Browse Library
              </button>
            </div>

            {/* Monetization */}
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <h3 className="text-lg font-semibold text-puabo-primary mb-4">
                Earnings
              </h3>
              <p className="text-puabo-primary/70 mb-4">
                Track your revenue and manage payouts
              </p>
              <button className="w-full bg-puabo-primary/20 text-puabo-primary border border-puabo-primary py-2 px-4 rounded-lg hover:bg-puabo-primary/30 transition-colors">
                View Earnings
              </button>
            </div>

            {/* TV/Radio */}
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <h3 className="text-lg font-semibold text-puabo-primary mb-4">
                TV/Radio
              </h3>
              <p className="text-puabo-primary/70 mb-4">
                Broadcast on PUABO TV and Radio channels
              </p>
              <button className="w-full bg-puabo-primary/20 text-puabo-primary border border-puabo-primary py-2 px-4 rounded-lg hover:bg-puabo-primary/30 transition-colors">
                Broadcasting
              </button>
            </div>

            {/* BLAC Lending */}
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <h3 className="text-lg font-semibold text-puabo-primary mb-4">
                BLAC Lending
              </h3>
              <p className="text-puabo-primary/70 mb-4">
                Alternative lending for creators
              </p>
              <button className="w-full bg-puabo-primary/20 text-puabo-primary border border-puabo-primary py-2 px-4 rounded-lg hover:bg-puabo-primary/30 transition-colors">
                Apply for Loan
              </button>
            </div>

            {/* Profile */}
            <div className="bg-puabo-dark/50 p-6 rounded-lg border border-puabo-light">
              <h3 className="text-lg font-semibold text-puabo-primary mb-4">
                Profile
              </h3>
              <p className="text-puabo-primary/70 mb-4">
                Manage your creator profile and settings
              </p>
              <button className="w-full bg-puabo-primary/20 text-puabo-primary border border-puabo-primary py-2 px-4 rounded-lg hover:bg-puabo-primary/30 transition-colors">
                Edit Profile
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default App
