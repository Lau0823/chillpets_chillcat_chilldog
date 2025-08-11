import Banner from "@/components/Banner/Banner";
import Carrusel from "@/components/Carrusel/Carrusel";
import Cards from "@/components/cards/Cards";
import HeartCard from "@/components/heartCard/heartCard";
import { CgCardSpades } from "react-icons/cg";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-stone-100 flex items-center justify-center m-4 p- mt-8 ">
        <Cards />
      </main>

      <Carrusel />
    </>
  );
}
