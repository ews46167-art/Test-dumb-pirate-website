import { motion } from "motion/react";
import { Anchor, Skull, Map, Compass, Coins, Ship, Wind, Waves, Sword, Shield } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen pirate-gradient overflow-hidden selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Skull className="w-8 h-8 gold-text" />
          <span className="text-xl font-bold tracking-tighter uppercase italic">Pirate's Cove</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium opacity-70">
          <a href="#" className="hover:text-gold transition-colors">The Fleet</a>
          <a href="#" className="hover:text-gold transition-colors">Treasure Maps</a>
          <a href="#" className="hover:text-gold transition-colors">The Tavern</a>
          <a href="#" className="hover:text-gold transition-colors">Bounties</a>
        </div>
        <button className="px-6 py-2 border border-gold/30 rounded-full text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300">
          Join the Crew
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-8 italic">
              SAIL THE <br />
              <span className="gold-text">UNCHARTERED</span> <br />
              WATERS
            </h1>
            <p className="text-lg opacity-60 max-w-md mb-10 leading-relaxed">
              Welcome to the digital sanctuary for the boldest scoundrels of the seven seas. 
              Trade your loot, find your crew, and chart a course for glory.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Set Sail Now
              </button>
              <button className="px-8 py-4 border border-white/20 uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors">
                View Bounties
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full" />
            <div className="relative w-full h-full border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
              <Compass className="w-32 h-32 gold-text opacity-20" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_#D4AF37]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Ship className="w-48 h-48 gold-text" />
            </div>
          </motion.div>
        </div>

        {/* Stats / Features */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Anchor, label: "Ships in Fleet", value: "4,200" },
            { icon: Coins, label: "Gold Doubloons", value: "1.2M" },
            { icon: Map, label: "Hidden Isles", value: "842" },
            { icon: Sword, label: "Active Bounties", value: "156" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass-card p-8 group hover:border-gold/30 transition-colors"
            >
              <stat.icon className="w-6 h-6 mb-4 opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all" />
              <div className="text-3xl font-bold mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <section className="mt-40 relative py-20 px-12 glass-card overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-gold/5 blur-[100px] rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic leading-tight">
                THE TIDE IS RISING. <br />
                <span className="gold-text">DON'T BE LEFT ASHORE.</span>
              </h2>
              <p className="opacity-60 mb-8">
                Join 50,000+ captains already navigating the digital frontier. 
                Get exclusive access to the Black Market and the Captain's Table.
              </p>
              <div className="flex items-center gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your scroll (email)..." 
                  className="bg-white/5 border border-white/10 px-6 py-4 rounded-sm flex-1 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button className="bg-gold text-black px-8 py-4 font-bold uppercase tracking-widest rounded-sm">
                  Enlist
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-32 h-32 glass-card flex items-center justify-center">
                <Wind className="w-12 h-12 opacity-20" />
              </div>
              <div className="w-32 h-32 glass-card flex items-center justify-center translate-y-8">
                <Waves className="w-12 h-12 opacity-20" />
              </div>
              <div className="w-32 h-32 glass-card flex items-center justify-center -translate-y-4">
                <Shield className="w-12 h-12 opacity-20" />
              </div>
              <div className="w-32 h-32 glass-card flex items-center justify-center translate-y-4">
                <Sword className="w-12 h-12 opacity-20" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-8 opacity-40">
          <a href="#" className="hover:text-gold transition-colors">Discord</a>
          <a href="#" className="hover:text-gold transition-colors">Twitter</a>
          <a href="#" className="hover:text-gold transition-colors">GitHub</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">
          &copy; 2026 Pirate's Cove. No rights reserved. Take what you can, give nothing back.
        </p>
      </footer>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
