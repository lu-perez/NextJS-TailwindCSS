import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={isDarkTheme(true)}>
      <head />
      <body className="dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}

function isDarkTheme(isDark: boolean) {
  return isDark ? 'dark' : '';
}
