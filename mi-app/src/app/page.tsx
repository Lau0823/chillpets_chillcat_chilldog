import Banner from "@/components/Banner/Banner";
import Carrusel from "@/components/Carrusel/Carrusel";
import BackgroundPets from "@/components/backgroundPets/BackgroundPets";
import Cards from "@/components/cards/Cards";
import HeartCard from "@/components/heartCard/heartCard";
import { CgCardSpades } from "react-icons/cg";

export default function Home() {
  return (
    <> 
   


     
      <main className="min-h-screen bg-stone-100 flex items-center justify-center mt-16 ">
         <BackgroundPets />
        <Cards />
      </main>

      <Carrusel />
    </>
  );
}
