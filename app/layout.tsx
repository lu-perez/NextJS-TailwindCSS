import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  )
}
