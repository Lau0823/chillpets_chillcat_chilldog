"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 100000 ? 0 : 20000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white/90 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 🛍️ Cart Section */}
        <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-900 flex items-center gap-2">
             Tu carrito
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-lg">Tu carrito está vacío 😿</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-6 gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-2xl shadow-md"
                  />

                  <div className="flex-1 sm:px-4 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">${item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-lg hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-lg hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>

                  <p className="w-24 text-right font-semibold text-gray-900">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition text-lg"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 💳 Summary Section */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-fit sticky top-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Resumen</h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span className="font-medium">
                {shipping === 0 ? "Gratis 🚚" : `$${shipping.toLocaleString()}`}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-4">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="block w-full mt-8 bg-black text-white text-center py-3.5 rounded-2xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all shadow-md"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}
