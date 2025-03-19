import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carrusel/Carrusel";

export default function Home() {
  return (
    <div className="bg-white  p-4">
      <h1 className="font-marker text-4xl text-black text-center ">
        ¡Bienvenido a ChillPets!
      </h1>
     
      <main className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6"></h1>
      <Carousel />
    </main>
    </div>
    
  );
}
