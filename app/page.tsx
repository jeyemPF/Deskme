import Image from "next/image";
import MainLogo from "./ui/main-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <MainLogo/>
        <div className="flex items-center">
         
          <h1 className="ml-2 text-3xl font-bold text-black	">Your Website Title</h1>
        </div>
      </div>
    </main>
  );
}
