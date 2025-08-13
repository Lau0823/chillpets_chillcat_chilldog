'use client';
import Paw from '@/components/icons/Paws';
import Whiskers from '@/components/icons/Whiskers';

export default function BackgroundPets() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
      <Paw className="absolute top-[12%] left-[8%] w-24 h-24 text-orange-300/40 drop-shadow-md animate-float-slow" />
      <Paw className="absolute top-[35%] right-[10%] w-28 h-28 text-pink-300/40 blur-[1px] animate-float-fast" />
      <Paw className="absolute bottom-[14%] left-[18%] w-32 h-32 text-amber-300/40 blur-[1px] animate-float-slow" />
      <Paw className="absolute bottom-[10%] right-[20%] w-40 h-40 text-rose-300/30 blur-[2px] animate-float-fast" />
      <Whiskers className="absolute top-[22%] left-[45%] w-56 h-20 text-orange-400/25 animate-sway" />
      <Whiskers className="absolute bottom-[20%] right-[38%] w-64 h-24 text-pink-400/20 animate-sway" />
    </div>
  );
}
