import Banner from "@/components/Banner/Banner";
import Carrusel from "@/components/Carrusel/Carrusel";
import Carousel from "@/components/Carrusel/Carrusel";
import HeartCard from "@/components/heartCard/heartCard";

export default function Home() {
  return (
    <div className="bg-orange-400">
     
      <main className="min-h-screen bg-orange-400 flex items-center justify-center">
      <HeartCard />
   
      
    </main>
    <div>
      <Carrusel/>
    </div>
    </div>
    
  );
}
