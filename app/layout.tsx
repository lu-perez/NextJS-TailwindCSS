import Nav from './components/Nav/Nav';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={isDarkTheme(true)}>
      <head />
      <body className="dark:bg-gray-900 dark:text-white">
        <Nav />
        <main className="h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

function isDarkTheme(isDark: boolean) {
  return isDark ? 'dark' : '';
}
