import Logo from "@/components/brand/logo";
import {SelectorForm} from "@/components/forms/selector";
import HouseVisualization from "@/components/viz/house";

export default function Home() {
  

  return (
    <main className="min-h-screen grid lg:grid-cols-5">
      <div className="lg:col-span-2 p-8 max-h-screen overflow-scroll">
        <Logo width={280} className="mb-8" />

        <SelectorForm />
      </div>
      <div className="lg:col-span-3 h-screen bg-gray-50 shadow-inner">
        <HouseVisualization
          className="w-full p-4"
        />
      </div>
    </main>
  );
}
