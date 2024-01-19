import Logo from "@/components/brand/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-5">
      <div className="col-span-2 p-8">
        <Logo />
      </div>
      <div className="col-span-3 h-screen bg-gray-200"></div>
    </main>
  );
}
