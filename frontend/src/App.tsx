import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { ReactNode } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navigation } from './components/Navigation';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { TVRadio } from './pages/TVRadio';
import { MusicMedia } from './pages/MusicMedia';
import { Monetization } from './pages/Monetization';
import { BLAC } from './pages/BLAC';
import { Profile } from './pages/Profile';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-puabo-dark">
      <Navigation />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tvradio"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <TVRadio />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/musicmedia"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <MusicMedia />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/monetization"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Monetization />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/blac"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <BLAC />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Profile />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/unauthorized"
            element={
              <div className="min-h-screen flex items-center justify-center bg-puabo-dark">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-puabo-primary mb-4">Access Denied</h1>
                  <p className="text-gray-400">You don't have permission to access this page.</p>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
