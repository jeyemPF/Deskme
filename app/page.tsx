import Image from "next/image";
import MainLogo from "./ui/main-logo";
import Header from "./ui/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white">
      <div className="z-10 max-w- w-full items-center justify-between font-mono text-sm lg:flex bg-yellow-100">
      <Header/>
        <div className="flex items-center">
        </div>
      </div>
    </main>
  );
}
