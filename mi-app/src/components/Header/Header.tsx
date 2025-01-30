import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-yellow-400 text-white text-sm py-2 px-4 flex justify-between items-center">
      <div>
        <p className="font-semibold">
          🛍️ Compras seguras online | 💵 Pago contra entrega | 📞 Llámanos al{" "}
          <span className="text-black">322 330 5610</span>
        </p>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/chillpets_chillcat_chilldog/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl hover:text-black transition-colors" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-xl hover:text-black transition-colors" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-xl hover:text-black transition-colors" />
        </a>
      </div>
    </div>
  );
}
