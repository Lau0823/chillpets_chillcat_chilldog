import { ShoppingCart } from "lucide-react";

export default function TestIcon() {
  return (
    <div className="flex items-center gap-2">
      <ShoppingCart className="w-6 h-6 text-pink-500" />
      <span>Comprar</span>
    </div>
  );
}
