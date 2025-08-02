export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'creator' | 'admin';
  profile?: {
    bio?: string;
    avatar?: string;
    settings?: Record<string, any>;
  };
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}