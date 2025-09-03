import '../../src/app/globals.css';
import { Nunito } from 'next/font/google';
import Navbar from '../components/NavBar/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer/Footer';


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'CHILL PETS',
  description: 'Productos de calidad para perros y gatos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className=  {nunito.variable}>
      

        {/* Navbar */}
        
          <Navbar />
        

        {/* Contenido principal */}
        <main className="bg-stone-100 min-h-screen flex flex-col">{children}</main>

        <Footer />
      </body>

    </html>
  );
}
