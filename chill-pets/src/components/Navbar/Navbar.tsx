export default function Navbar() {
    return (
      <nav className="bg-white text-black p-4 ">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center p-4">
          <img
  src="/logo (3).png" // Asegúrate de que la ruta sea correcta
  alt="ChillPets Logo"
  className="h-20 w-15 mr-3"
/>
          
          </div>
  
          {/* Enlaces de navegación */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="#perros"
                className="hover:text-gray-300 transition duration-300"
              >
                Perros
              </a>
            </li>
            <li>
              <a
                href="#gatos"
                className="hover:text-gray-300 transition duration-300"
              >
                Gatos
              </a>
            </li>
            <li>
              <a
                href="#promociones"
                className="hover:text-gray-300 transition duration-300"
              >
                Promociones
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-gray-300 transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
  
          {/* Botones de Login y Register */}
          <div className="flex space-x-4">
            <a
              href="/login"
              className="bg-yellow-400 hover:bg-lime-500 text-white py-2 px-4 rounded transition duration-300"
            >
              Login
            </a>
            <a
              href="/register"
              className="border border-white hover:bg-white hover:text-yellow-400 py-2 px-4 rounded transition duration-300"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    );
  }
  