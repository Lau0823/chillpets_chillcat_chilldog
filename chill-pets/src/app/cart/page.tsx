"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 100000 ? 0 : 20000;
  const total = subtotal + shipping;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty 🛍️</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 px-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <p className="w-20 text-right font-semibold">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="block w-full mt-6 bg-purple-600 text-white text-center py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
