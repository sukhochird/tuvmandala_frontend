'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Package, Loader2 } from 'lucide-react';
import { getPreorderProducts } from '@/app/lib/api';

interface Product {
  id: number;
  name: string;
  /** Зарагдах үнэ (хямдрал байвал хямдруулсан) */
  price: number;
  /** Анхны үнэ (зурвастай харуулах) */
  originalPrice?: number;
  /** Хямдралын хувь (0–100) */
  discount?: number;
  image: string;
}

const ACCENT = '#8B5CF6';

export function March8PreOrder() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPreorderProducts();
        setProducts(list.map(p => {
          const discountPercent = p.discount != null && p.discount > 0 ? p.discount : undefined;
          const salePrice = discountPercent
            ? Math.round(p.price * (100 - discountPercent) / 100)
            : p.price;
          const originalPrice = discountPercent ? p.price : (p.old_price ?? p.original_price ?? undefined);
          return {
            id: p.id,
            name: p.name,
            price: salePrice,
            originalPrice: originalPrice ?? undefined,
            discount: discountPercent,
            image: p.image,
          };
        }));
      } catch (error) {
        console.error('Failed to fetch pre-order products', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#F5F0FF] to-white h-[600px] flex items-center justify-center">
         <Loader2 className="size-10 animate-spin" style={{ color: ACCENT }} />
      </section>
    );
  }

  return (
    <section id="preorder" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#F5F0FF] to-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section — зөвхөн урьдчилсан захиалга */}
        <div className="mb-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
          >
            <Package className="size-3" />
            <span>Урьдчилсан захиалга</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-[1.1] mb-4"
          >
            Урьдчилсан захиалга
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600 text-lg leading-relaxed max-w-2xl"
          >
            Захиалгаар болон урьдчилан авах боломжтой шашны бэлгэдлийн бүтээгдэхүүнүүд. Дэлгэрэнгүй мэдээллийг бүтээгдэхүүн дээр дарж үзнэ үү.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, idx) => (
            <Link key={product.id} href={`/products/${product.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-violet-50 cursor-pointer flex flex-col h-full hover:shadow-violet-100/50"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-violet-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1.5 w-fit" style={{ color: ACCENT }}>
                    <Package className="size-3" />
                    Урьдчилсан захиалга
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-gray-900 leading-tight mb-2 transition-colors group-hover:text-violet-600">
                  {product.name}
                </h3>
                <div className="flex flex-wrap items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold" style={{ color: ACCENT }}>
                    {product.price.toLocaleString()}₮
                  </span>
                  {product.discount != null && product.discount > 0 && product.originalPrice != null && (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()}₮
                      </span>
                      <span className="text-xs font-bold text-white px-2 py-0.5 rounded" style={{ backgroundColor: ACCENT }}>
                        -{product.discount}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
