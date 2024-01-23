import Logo from "@/components/brand/logo";
import { SelectorForm } from "@/components/forms/selectors";
import HouseVisualization from "@/components/viz/house";

export default function Home() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-6">
      <div className="lg:col-span-2 p-8 bg-gray-50 max-h-screen overflow-scroll">
        <Logo width={280} className="mb-8" />

        <SelectorForm />
      </div>
      <div className="lg:col-span-4 lg:h-screen flex flex-col justify-center shadow-xl">
        <HouseVisualization
          className="w-full p-4 py-16"
        />
      </div>
    </main>
  );
}
