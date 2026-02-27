import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1430] via-[#0a0f1f] to-[#04060f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-600/25 to-indigo-700/30 blur-3xl" />
        <div className="absolute -bottom-56 left-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-blue-700/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 pt-12 sm:pt-16">
          <Navbar />
          <div className="mt-12 space-y-16 sm:mt-16">
            <Hero />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
