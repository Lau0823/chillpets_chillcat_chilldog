export default function GatoPage() {
    return (
        <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Mosaico de imágenes con mejor visibilidad */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 w-full h-full gap-1">
                <img src="/gatico1.jpg" className="w-full h-[50vh] object-cover opacity-80 brightness-90" alt="Gatico 1" />
                <img src="/gatico 5.jpg" className="w-full h-[50vh] object-cover opacity-80 brightness-90" alt="Gatico 5" />
                <img src="/gatico 4.jpg" className="w-full h-[50vh] object-cover opacity-80 brightness-90" alt="Gatico 4" />
                <img src="/gatico 3.jpg" className="w-full h-[50vh] object-cover opacity-80 brightness-90" alt="Gatico 3" />
            </div>

            {/* Contenido centrado con mejor contraste */}
            <div className="relative z-10 bg-black bg-opacity-60 p-8 rounded-lg text-center shadow-lg">
                <h1 className="text-4xl font-bold"> Página de Gatos</h1>
                <p className="text-lg mt-4">Aquí encontrarás todo sobre gatos. </p>
            </div>
        </main>
    );
}

