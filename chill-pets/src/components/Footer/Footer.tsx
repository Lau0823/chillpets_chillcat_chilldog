import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Columna 1: Logo + Descripción + Redes */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">CHILL PETS</h2>
          <p className="text-sm mb-4">
            Productos de calidad para perros y gatos. 
            Todo lo que necesitas para consentir a tu mejor amigo.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>

        {/* Columna 2: Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
  <li><a href="#" className="hover:text-white">Inicio</a></li>
  <li><a href="#" className="hover:text-white">Perros</a></li>
  <li><a href="#" className="hover:text-white">Gatos</a></li>
  <li><a href="#" className="hover:text-white">Promociones </a> </li>
  <li><a href="#" className="hover:text-white">Blog </a> </li>
</ul>

        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
         
          <p className="text-sm">Bogotá, Colombia</p>
          <p className="text-sm mt-2">email@chillpets.com</p>
          <p className="text-sm">+57 310 2345742 </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        © 2024 CHILL PETS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
