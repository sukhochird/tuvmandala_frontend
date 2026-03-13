import type { Metadata } from 'next';
import { ClientLayout } from '@/app/components/ClientLayout';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Tuv Mandala - Төв Мандала | Шашны бэлгэдлийн онлайн дэлгүүр',
  description: 'Шашны бэлгэдлийн ач холбогдлыг таниулж, сүсэг бишрэлийг нэмэгдүүлэх. Чанартай шашны эд хэрэгслийг боломжийн үнээр урьдчилан болон захиалгаар авч, хүргэж өгнө.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
