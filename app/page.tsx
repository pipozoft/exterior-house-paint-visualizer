import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-5">
      <div className="col-span-2 p-8">
        <h1 className="text-xl">Exterior House Paint Visualizer</h1>
      </div>
      <div className="col-span-3 h-screen bg-gray-200"></div>
    </main>
  );
}
