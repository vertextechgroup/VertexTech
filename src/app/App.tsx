import { RouterProvider } from 'react-router';
import { AuthProvider } from './lib/auth-context';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';
import { ThemeProvider } from 'next-themes';
import { ColorThemeProvider } from './lib/theme-context';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ColorThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
