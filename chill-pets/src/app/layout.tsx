import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/NavBar/NavBar";
import Filters from "@/components/filters/Filters";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chill Pets",
  description: "E-commerce para tus mascotas 🐾",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen pt-20 ">
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="flex-3">
              {/* Banner o secciones que deben ocupar toda la pantalla */}
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
