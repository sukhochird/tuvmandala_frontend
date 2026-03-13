import { motion } from "motion/react";

export function IntroSection() {
  return (
    <section className="bg-white pt-2 pb-6 md:pt-4 md:pb-8 relative z-5">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--foreground)_20%,var(--accent)_50%,var(--foreground)_80%)] bg-[length:200%_auto] mb-4 md:mb-6"
            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Tuv Mandala - Шашны бэлгэдлийн дэлгүүр
          </motion.h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-loose">
            Шашны бэлгэдлийн ач холбогдлыг таниулж, сүсэг бишрэлийг нэмэгдүүлэх зорилготой. Чанартай шашны эд хэрэгслийг боломжийн үнээр урьдчилан болон захиалгаар авч, хүргэж өгнө.
          </p>
        </motion.div>
      </div>
    </section>
  );
}