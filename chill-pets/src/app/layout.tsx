import "../../src/app/globals.css";
import { Nunito } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Filters from "@/components/filters/Filters";
import Navbar from "@/components/NavBar/NavBar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "CHILL PETS",
  description: "Productos de calidad para perros y gatos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={nunito.variable}>
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal con layout de filtros + productos */}
        <main className="bg-white min-h-screen  gap-6 ">
          {/* Sidebar de filtros */}
          

          {/* Contenido dinámico (productos, páginas, etc.) */}
          <section className="md:col-span-3">{children}</section>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
