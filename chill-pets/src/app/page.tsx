

import BackgroundPets from "@/components/backgroundPets/BackgroundPets";
import Cards from "@/components/card/Card";
import CardXl from "@/components/cardXl/cardXl";
import FullScreenProductCard from "@/components/FullScreenProductCard/FullScreenProductCard";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";






export default function Home() {
  return (
    <> 
   
         <BackgroundPets />

     
      <main className="min-h-screen bg-white flex items-center justify-center  ">

          {/* Grid con aside + cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      

        {/* Cards */}
        <div className="md:col-span-6 mx-auto justify-items-center
">
        <ProductCarousel/>
        <FullScreenProductCard/>
          <Cards />
        </div>
      </section></main>

    </>
  );
}
