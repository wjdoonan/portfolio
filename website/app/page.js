import Image from "next/image";
import Language from "@/components/language";

export default function Home() {
  return (
    <main className="bg-gray-900 snap-y snap-mandatory">
      <header className="snap-always snap-start bgg duration-300 w-full text-center bg-gradient-to-b h-screen from-emerald-950 to-gray-900">
        <h1 id="nameTitle" className="w-fit pt-72 h-screen m-auto text-5xl md:text-9xl bg-gradient-to-br bg-clip-text text-transparent font-bold">WJDOONAN</h1>
      </header>
      <div id="journey" className="h-screen snap-start snap-always">
        <Language text="Python was the first programming language I ever learned. The reason I learned it is because I was trying to make a simulation for my game, but it took me on the journey of a lifetime!" >
          <h1 className="text-emerald-300 text-9xl">Hello</h1>
        </Language>
      </div>
    </main>
  );
}