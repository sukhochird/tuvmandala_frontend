'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left gap-4 hover:bg-gray-50/50 transition-colors px-4 rounded-lg"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="shrink-0 text-accent">
          {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 px-4 text-gray-600 leading-relaxed text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Урьдчилсан захиалга гэж юу вэ?",
      answer: "Урьдчилсан захиалга нь дэлгүүрт одоо байхгүй бүтээгдэхүүнийг урьдчилан захиалан, ирэхээр нь хүргүүлж авах боломж юм. Захиалгаар болон урьдчилан авах боломжтой шашны бэлгэдлийн бүтээгдэхүүнүүдийг нүүр хуудсан дээрх «Урьдчилсан захиалга» хэсгээс үзэж захиалах боломжтой."
    },
    {
      question: "Хүргэлт хэр удаан үргэлжлэх вэ?",
      answer: "Захиалга баталгаажсанаас хойш Улаанбаатар хот дотор хүргэлтийн цагийг тохиролцоно. Урьдчилсан захиалгын бараа ирсний дараа таньд мэдэгдэж, хүргэнэ. Хөдөө орон нутаг руу ч хүргэлт хийдэг."
    },
    {
      question: "Төлбөрийн ямар хэлбэрүүд байгаа вэ?",
      answer: "Та QPay, SocialPay, бүх банкны карт болон дансаар шилжүүлэх боломжтой. Захиалгын үед төлбөрийн аргаа сонгоно."
    },
    {
      question: "Холбоо барих ямар арга хэлбэртэй вэ?",
      answer: "Бидэнтэй Facebook Group (https://www.facebook.com/groups/2086319425140158), Page (Tuv Mandala - Төв Мандала) эсвэл утасаар 9862-9992 дугаараар холбогдох боломжтой. Холбоо барих хуудсаас бүх холбоосыг олно."
    },
    {
      question: "Шашны бэлгэдлийн бүтээгдэхүүнийг хэрхэн сонгох вэ?",
      answer: "Бид чанартай шашны эд хэрэгслийг боломжийн үнээр санал болгож байна. Та бүтээгдэхүүний дэлгэрэнгүйг үзэж, асуудалтай бол Group эсвэл утасаар асууж захиалах боломжтой."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="lg:col-span-5">
                <div className="sticky top-24">
                    <div className="inline-flex items-center justify-center size-12 rounded-full bg-accent/10 text-accent mb-6">
                        <HelpCircle className="size-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Түгээмэл асуулт хариулт</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Таны сонирхсон асуултад хариулахад бид бэлэн байна. Хэрэв танд нэмэлт мэдээлэл хэрэгтэй бол бидэнтэй холбогдоорой.
                    </p>
                    <a 
                        href="tel:98629992"
                        className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-black/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Бидэнтэй холбогдох (9862-9992)
                    </a>
                </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7">
                <div className="bg-gray-50 rounded-2xl p-2 md:p-6 border border-gray-100 shadow-sm">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
