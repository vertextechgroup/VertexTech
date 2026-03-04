import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import {
  Menu, X, ChevronDown, Sun, Moon, Shield,
  Home, LayoutGrid, DollarSign, Info, FileText,
  Images, Mail, LogIn, LayoutDashboard, User
} from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '../../lib/auth-context';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { siteSettings } from '../../lib/site-settings';

export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const isUserActive = () => {
    if (isAuthenticated) {
      return location.pathname.startsWith('/dashboard');
    }
    return location.pathname === '/login' || location.pathname === '/register';
  };

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    {
      name: 'Solutions',
      href: '/services',
      icon: LayoutGrid,
      hasDropdown: true,
      dropdown: [
        { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Custom Software', href: '/services/custom-software' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
      ],
    },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Portfolio', href: '/portfolio', icon: Images },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Header (lg and above) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 hidden lg:block ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center gap-2 -m-1.5 p-1.5 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center theme-gradient shadow-sm group-hover:shadow-md transition-shadow">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                {siteSettings.brand.name.split('Tech')[0]}
                <span className="theme-gradient-text">Tech</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center lg:gap-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-x-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors relative after:absolute after:left-3 after:right-3 after:bottom-0 after:h-[2px] after:bg-[var(--theme-primary)] after:rounded-full after:transition-transform after:duration-300 after:origin-left ${
                        isActive(item.href)
                          ? 'theme-text bg-gray-50 after:scale-x-100'
                          : 'text-gray-700 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 top-full mt-1 w-52 rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 animate-slide-down">
                        <div className="p-1.5">
                          {item.dropdown?.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: 'var(--theme-primary)' }}
                              />
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors relative after:absolute after:left-3 after:right-3 after:bottom-0 after:h-[2px] after:bg-[var(--theme-primary)] after:rounded-full after:transition-transform after:duration-300 after:origin-left ${
                      isActive(item.href)
                        ? 'theme-text bg-gray-50 after:scale-x-100'
                        : 'text-gray-700 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 items-center">
            <ThemeSwitcher />
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle dark/light mode"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </Button>
            {isAuthenticated ? (
              <Button
                className="theme-btn rounded-lg px-5 h-9 text-sm font-semibold"
                onClick={() => navigate(`/dashboard/${user?.role}`)}
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/login')} className="font-semibold">
                  Log in
                </Button>
                {siteSettings.nav.ctas.map((cta) => (
                  <Button
                    key={cta.name}
                    size="sm"
                    variant={cta.variant as any}
                    className={`${
                      cta.variant === 'default' ? 'theme-btn' : 'theme-btn-outline'
                    } rounded-lg px-5 h-9 text-sm font-semibold`}
                    onClick={() => navigate(cta.href)}
                  >
                    {cta.name}
                  </Button>
                ))}
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Top Bar (logo + theme toggle + user) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center theme-gradient">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-extrabold text-gray-900">
              {siteSettings.brand.name.split('Tech')[0]}
              <span className="theme-gradient-text">Tech</span>
            </span>
          </Link>

          {/* Right side: Theme toggle and User */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle dark/light mode"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </Button>
            
            <Link
              to={isAuthenticated ? `/dashboard/${user?.role}` : '/login'}
              className={`flex items-center justify-center h-9 w-9 rounded-full transition-colors ${
                isUserActive() ? 'theme-text' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <nav className="flex items-center justify-around px-2 py-1">
          {/* Services */}
          <Link
            to="/services"
            className={`flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
              isActive('/services') ? 'theme-text' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">Services</span>
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
              isActive('/about') ? 'theme-text' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Info className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">About</span>
          </Link>

          {/* Home - Centered & Larger */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors relative ${
              isActive('/') ? 'theme-text' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                isActive('/') ? 'theme-gradient' : 'bg-gray-100'
              }`}
            >
              <Home className={`h-6 w-6 ${isActive('/') ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <span className="text-[10px] mt-1 font-medium">Home</span>
          </Link>

          {/* Portfolio */}
          <Link
            to="/portfolio"
            className={`flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
              isActive('/portfolio') ? 'theme-text' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Images className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">Portfolio</span>
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
              isActive('/contact') ? 'theme-text' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Mail className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">Contact</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Drawer (slides up) */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-t-2xl lg:hidden animate-slide-up">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center theme-gradient">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-extrabold text-gray-900">
                  {siteSettings.brand.name.split('Tech')[0]}
                  <span className="theme-gradient-text">Tech</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-6 space-y-1 max-h-[70vh] overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                      isActive(item.href) ? 'theme-text bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t space-y-3">
                {isAuthenticated ? (
                  <Button
                    className="theme-btn w-full flex items-center gap-2"
                    onClick={() => {
                      navigate(`/dashboard/${user?.role}`);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2"
                      onClick={() => {
                        navigate('/login');
                        setMobileMenuOpen(false);
                      }}
                    >
                      <LogIn className="h-4 w-4" />
                      Log in
                    </Button>
                    <Button
                      className="theme-btn w-full flex items-center gap-2"
                      onClick={() => {
                        navigate('/pricing');
                        setMobileMenuOpen(false);
                      }}
                    >
                      <Shield className="h-4 w-4" />
                      Get Protected
                    </Button>
                  </>
                )}
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                  onClick={toggleTheme}
                >
                  <Sun className="h-4 w-4 hidden dark:block" />
                  <Moon className="h-4 w-4 dark:hidden" />
                  Toggle Dark/Light
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacers to prevent content from hiding behind fixed bars */}
      <div className="lg:hidden h-14" /> {/* Top bar spacer */}
      <div className="lg:hidden h-16" /> {/* Bottom bar spacer */}
    </>
  );
}