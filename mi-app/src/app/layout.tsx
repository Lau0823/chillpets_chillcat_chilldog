import '../../src/app/globals.css';
import { Nunito } from 'next/font/google';
import Navbar from '../components/NavBar/Navbar';
import Header from '../components/Header/Header'; // Importa el Header

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
      <body className={nunito.variable}>
        {/* Header con información */}
        <Header />

        {/* Navbar */}
        
          <Navbar />
        

        {/* Contenido principal */}
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
