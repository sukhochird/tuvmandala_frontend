'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';
import { MessageCircle } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { CartProvider } from '@/app/context/CartContext';
import { FavoritesProvider } from '@/app/context/FavoritesContext';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const hideFooterOnMobile =
    pathname === '/products' || (pathname?.startsWith('/products/') && pathname !== '/products');

  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="min-h-screen flex flex-col">
          <Toaster position="top-center" expand={true} richColors />
          <Header />
          <CartDrawer />
          {/* Messenger FAB - mobile only */}
          <a
            href="https://www.messenger.com/t/101541682775777"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 md:hidden flex items-center justify-center size-14 rounded-full bg-[#0084FF] text-white shadow-lg hover:bg-[#0066CC] hover:scale-105 active:scale-95 transition-all"
            title="Facebook Messenger"
            aria-label="Facebook Messenger"
          >
            <MessageCircle className="size-7" strokeWidth={2} />
          </a>
          <main className="flex-1">{children}</main>
          <div className={hideFooterOnMobile ? 'hidden md:block' : ''}>
            <Footer />
          </div>
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}
