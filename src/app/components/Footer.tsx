import { Facebook, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Brand + tagline */}
          <div className="space-y-5">
            <Link href="/" className="inline-block font-serif text-2xl font-bold text-white hover:opacity-90 transition-opacity">
              Tuv Mandala
            </Link>
            <p className="text-white/75 text-sm leading-relaxed max-w-sm">
              Шашны бэлгэдлийн ач холбогдлыг таниулж, сүсэг бишрэлийг нэмэгдүүлэх зорилготой. Чанартай шашны эд хэрэгслийг боломжийн үнээр урьдчилан болон захиалгаар авч, хүргэж өгнө.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/groups/2086319425140158"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-colors"
                aria-label="Facebook Group"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571665965452"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-12">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Холбоо барих</h4>
            <ul className="space-y-5 text-sm text-white/80">
              <li className="flex gap-3">
                <Facebook className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-white">Group:</span>
                  <a href="https://www.facebook.com/groups/2086319425140158" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook Group</a>
                  <span className="font-medium text-white mt-2">Page:</span>
                  <a href="https://www.facebook.com/profile.php?id=61571665965452" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Tuv Mandala - Төв Мандала</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col gap-1">
                  <a href="tel:98629992" className="hover:text-accent transition-colors">9862-9992</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/60 order-2 sm:order-1">
            © {new Date().getFullYear()} Tuv Mandala - Төв Мандала. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-3 order-1 sm:order-2">
            <span className="text-xs text-white/50 uppercase tracking-wider">Төлбөр:</span>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-white/10 rounded-md text-xs font-medium text-white/90">QPay</span>
              <span className="px-3 py-1.5 bg-white/10 rounded-md text-xs font-medium text-white/90">SocialPay</span>
              <span className="px-3 py-1.5 bg-white/10 rounded-md text-xs font-medium text-white/90">Card</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
