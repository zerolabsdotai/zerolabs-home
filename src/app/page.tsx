import FeaturePills from "./components/FeaturePills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductPreview from "./components/ProductPreview";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1430] via-[#0a0f1f] to-[#04060f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/35 via-blue-600/30 to-indigo-700/35 blur-3xl" />
        <div className="absolute -bottom-52 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-700/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute top-1/4 right-[-7rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-sky-500/25 to-indigo-600/25 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-10 sm:pt-12">
          <Navbar />
          <div className="mt-10 space-y-16 sm:mt-12">
            <Hero />
            <FeaturePills />
            <ProductPreview />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
