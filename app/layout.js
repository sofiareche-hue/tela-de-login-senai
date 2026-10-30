import './globals.css';

export const metadata = {
  title: 'Next.js + Supabase Auth',
  description: 'Login page created with Next.js and Supabase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col justify-center">
        {children}
      </body>
    </html>
  );
}
