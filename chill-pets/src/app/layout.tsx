import '../../src/app/globals.css';
import { Permanent_Marker } from 'next/font/google'; // Importar Permanent Marker
import Navbar from '../components/Navbar/Navbar';

// Configura la fuente Permanent Marker
const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400', // Solo un peso disponible para esta fuente
  variable: '--font-permanent-marker', // Variable CSS para Tailwind
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
      <body className={`${permanentMarker.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          {/* Barra de navegación */}
          <Navbar />

          {/* Contenido de la página */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
