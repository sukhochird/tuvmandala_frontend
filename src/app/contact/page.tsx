'use client';

import Link from 'next/link';
import { Phone, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

const FACEBOOK_GROUP = 'https://www.facebook.com/groups/2086319425140158';
const FACEBOOK_PAGE = 'https://www.facebook.com/profile.php?id=61571665965452';
const PAGE_TITLE = 'Tuv Mandala - Төв Мандала - шашны бэлгэдлийн онлайн дэлгүүр';
const PHONE = '9862-9992';
const PHONE_TEL = '98629992';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Холбоо барих
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <Link href="/" className="hover:text-accent">Нүүр</Link>
            <span>/</span>
            <span>Холбоо барих</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-12 md:mt-20">
        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          <motion.a
            href={FACEBOOK_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300"
          >
            <div className="p-4 rounded-full bg-[#1877F2]/10 text-[#1877F2] mb-4">
              <Facebook className="size-8" />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Facebook Group</h3>
            <p className="text-sm text-gray-600">Бидний группд нэгдээрэй</p>
          </motion.a>

          <motion.a
            href={FACEBOOK_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300"
          >
            <div className="p-4 rounded-full bg-[#1877F2]/10 text-[#1877F2] mb-4">
              <Facebook className="size-8" />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Page</h3>
            <p className="text-sm text-gray-600">{PAGE_TITLE}</p>
          </motion.a>

          <motion.a
            href={`tel:${PHONE_TEL}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300"
          >
            <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
              <Phone className="size-8" />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Утас</h3>
            <p className="text-lg font-medium text-accent">{PHONE}</p>
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Шашны бэлгэдлийн ач холбогдлыг таниулж, сүсэг бишрэлийг нэмэгдүүлэх зорилготой. Чанартай шашны эд хэрэгслийг боломжийн үнээр урьдчилан болон захиалгаар авч, хүргэж өгнө. Асуудал, санал байвал Group эсвэл Page-аар бидэнтэй холбогдоно уу.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
