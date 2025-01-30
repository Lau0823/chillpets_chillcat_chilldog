import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className="bg-white  p-4">
      <h1 className="font-marker text-4xl text-black text-center ">
        ¡Bienvenido a ChillPets!
      </h1>
      <p className="text-xl m-2 text-center ">Lo mejor para tu peludito aqui .</p>
      <Banner />
    </div>
  );
}
