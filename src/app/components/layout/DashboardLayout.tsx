import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Briefcase, 
  MessageSquare, 
  Image as ImageIcon,
  Palette,
  LogOut,
  Menu,
  X,
  Home,
  UserCircle,
  CreditCard,
  HelpCircle,
  Newspaper,
  FolderOpen
} from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAuth } from '../../lib/auth-context';
import { Badge } from '../ui/badge';
import type { UserRole } from '../../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout, hasRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Navigation items based on role
  const getNavigationItems = () => {
    const role = user?.role;
    
    if (role === 'admin') {
      return [
        { name: 'Overview', href: '/dashboard/admin', icon: LayoutDashboard },
        { name: 'Pages', href: '/dashboard/admin/pages', icon: FileText },
        { name: 'Services', href: '/dashboard/admin/services', icon: Briefcase },
        { name: 'Blog', href: '/dashboard/admin/blog', icon: Newspaper },
        { name: 'Portfolio', href: '/dashboard/admin/portfolio', icon: FolderOpen },
        { name: 'Media Library', href: '/dashboard/admin/media', icon: ImageIcon },
        { name: 'Users', href: '/dashboard/admin/users', icon: Users },
        { name: 'Support', href: '/dashboard/admin/support', icon: MessageSquare },
        { name: 'Theme', href: '/dashboard/admin/theme', icon: Palette },
        { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
      ];
    } else if (role === 'editor') {
      return [
        { name: 'Overview', href: '/dashboard/editor', icon: LayoutDashboard },
        { name: 'Pages', href: '/dashboard/editor/pages', icon: FileText },
        { name: 'Blog', href: '/dashboard/editor/blog', icon: Newspaper },
        { name: 'Portfolio', href: '/dashboard/editor/portfolio', icon: FolderOpen },
        { name: 'Media Library', href: '/dashboard/editor/media', icon: ImageIcon },
      ];
    } else {
      return [
        { name: 'Overview', href: '/dashboard/client', icon: LayoutDashboard },
        { name: 'My Projects', href: '/dashboard/client/projects', icon: FolderOpen },
        { name: 'Support', href: '/dashboard/client/support', icon: MessageSquare },
        { name: 'Profile', href: '/dashboard/client/profile', icon: UserCircle },
        { name: 'Billing', href: '/dashboard/client/billing', icon: CreditCard },
      ];
    }
  };

  const navigationItems = getNavigationItems();

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'editor':
        return 'bg-blue-100 text-blue-800';
      case 'client':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center border-b border-gray-200 -mx-6 px-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VertexTech
              </span>
            </Link>
          </div>
          
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors ${
                            active
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className={`h-5 w-5 shrink-0 ${active ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              
              <li className="-mx-6 mt-auto border-t border-gray-200">
                <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                  <Avatar>
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{user?.name}</p>
                    <Badge className={`text-xs mt-1 ${getRoleBadgeColor(user?.role || 'client')}`}>
                      {user?.role}
                    </Badge>
                  </div>
                </div>
                <div className="px-6 pb-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 pb-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-16 shrink-0 items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  VertexTech
                </span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav className="mt-6">
              <ul role="list" className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                          active
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`h-5 w-5 shrink-0 ${active ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar for mobile */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  View Site
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
