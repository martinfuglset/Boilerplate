import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Sidebar from '@/components/admin/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Modern Next.js Supabase Starter',
  description: 'A modern, scalable starter template with Next.js, TypeScript, Tailwind CSS, and Supabase',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}