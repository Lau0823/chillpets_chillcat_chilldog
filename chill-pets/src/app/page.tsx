

import BackgroundPets from "@/components/backgroundPets/BackgroundPets";
import Cards from "@/components/card/Card";

import Filters from "@/components/filters/Filters";




export default function Home() {
  return (
    <> 
   
<BackgroundPets />

     
      <main className="min-h-screen bg-white flex items-center justify-center  ">

          {/* Grid con aside + cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filtros */}
        <aside className="md:col-span-1">
          <Filters />
        </aside>

        {/* Cards */}
        <div className="md:col-span-3">
          <Cards />
        </div>
      </section></main>

    </>
  );
}
