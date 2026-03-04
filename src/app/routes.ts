import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import EditorDashboard from './pages/EditorDashboard';
import ClientDashboard from './pages/ClientDashboard';

// Services pages
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

// Blog pages
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Portfolio pages
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';

// Pricing page
import PricingPage from './pages/PricingPage';

// Careers page
import CareersPage from './pages/CareersPage';

// CMS pages for Admin
import AdminPagesManager from './pages/admin/AdminPagesManager';
import AdminBlogManager from './pages/admin/AdminBlogManager';
import AdminPortfolioManager from './pages/admin/AdminPortfolioManager';
import AdminUsersManager from './pages/admin/AdminUsersManager';
import AdminMediaLibrary from './pages/admin/AdminMediaLibrary';
import AdminThemeSettings from './pages/admin/AdminThemeSettings';

// CMS pages for Editor
import EditorPagesManager from './pages/editor/EditorPagesManager';
import EditorBlogManager from './pages/editor/EditorBlogManager';
import EditorPortfolioManager from './pages/editor/EditorPortfolioManager';
import EditorMediaLibrary from './pages/editor/EditorMediaLibrary';

// Client pages
import ClientProjects from './pages/client/ClientProjects';
import ClientSupport from './pages/client/ClientSupport';
import ClientProfile from './pages/client/ClientProfile';

// Not Found
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  // Public Routes
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/services',
    Component: ServicesPage,
  },
  {
    path: '/services/:slug',
    Component: ServiceDetailPage,
  },
  {
    path: '/portfolio',
    Component: PortfolioPage,
  },
  {
    path: '/portfolio/:slug',
    Component: PortfolioDetailPage,
  },
  {
    path: '/blog',
    Component: BlogPage,
  },
  {
    path: '/blog/:slug',
    Component: BlogPostPage,
  },
  {
    path: '/pricing',
    Component: PricingPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/careers',
    Component: CareersPage,
  },

  // Auth Routes
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/register',
    Component: RegisterPage,
  },

  // Admin Dashboard Routes
  {
    path: '/dashboard/admin',
    Component: AdminDashboard,
  },
  {
    path: '/dashboard/admin/pages',
    Component: AdminPagesManager,
  },
  {
    path: '/dashboard/admin/blog',
    Component: AdminBlogManager,
  },
  {
    path: '/dashboard/admin/portfolio',
    Component: AdminPortfolioManager,
  },
  {
    path: '/dashboard/admin/users',
    Component: AdminUsersManager,
  },
  {
    path: '/dashboard/admin/media',
    Component: AdminMediaLibrary,
  },
  {
    path: '/dashboard/admin/theme',
    Component: AdminThemeSettings,
  },
  {
    path: '/dashboard/admin/services',
    Component: AdminBlogManager, // Reusing blog manager for demo
  },
  {
    path: '/dashboard/admin/support',
    Component: ClientSupport, // Reusing support page
  },
  {
    path: '/dashboard/admin/settings',
    Component: AdminThemeSettings, // Reusing theme for demo
  },

  // Editor Dashboard Routes
  {
    path: '/dashboard/editor',
    Component: EditorDashboard,
  },
  {
    path: '/dashboard/editor/pages',
    Component: EditorPagesManager,
  },
  {
    path: '/dashboard/editor/blog',
    Component: EditorBlogManager,
  },
  {
    path: '/dashboard/editor/portfolio',
    Component: EditorPortfolioManager,
  },
  {
    path: '/dashboard/editor/media',
    Component: EditorMediaLibrary,
  },

  // Client Dashboard Routes
  {
    path: '/dashboard/client',
    Component: ClientDashboard,
  },
  {
    path: '/dashboard/client/projects',
    Component: ClientProjects,
  },
  {
    path: '/dashboard/client/support',
    Component: ClientSupport,
  },
  {
    path: '/dashboard/client/profile',
    Component: ClientProfile,
  },
  {
    path: '/dashboard/client/billing',
    Component: ClientProfile, // Reusing profile for demo
  },

  // 404 Not Found
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
