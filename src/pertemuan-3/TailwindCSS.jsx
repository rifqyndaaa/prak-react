export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <FlexboxGrid />
      
      {/* HERO SECTION - Membuatnya terasa seperti website sungguhan */}
      <div className="bg-white pt-20 pb-16 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 tracking-tighter leading-none">
            Belajar Tailwind CSS 4
          </h1>
          <p className="mt-6 text-xl text-zinc-600 max-w-2xl mx-auto">
            Pelajari Tailwind dengan tampilan modern, elegan, dan profesional. 
            Clean design yang siap production.
          </p>
          <button className="mt-10 bg-zinc-900 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-amber-700 transition-all duration-300 text-lg shadow-lg">
            Mulai Belajar Sekarang
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        {/* Interactive Demo */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-amber-700"></div>
            <p className="uppercase tracking-widest text-sm font-semibold text-amber-700">Interactive Component</p>
          </div>
          <div className="p-12 bg-white rounded-3xl shadow-xl border border-zinc-100">
            <p className="text-amber-700/70 text-sm tracking-widest mb-4">TRY THIS BUTTON</p>
            <button className="bg-zinc-900 hover:bg-amber-700 text-white font-semibold px-12 py-5 rounded-2xl text-lg transition-all active:scale-95 shadow-md">
              Click Me
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-12">
            
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6 px-1">BOX MODEL & SPACING</h2>
              <Spacing />
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6 px-1">TYPOGRAPHY & COLORS</h2>
              <Typography />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-12">
            
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6 px-1">SHAPES & INTERACTIONS</h2>
              <BorderRadius />
              <div className="mt-8">
                <ShadowEffects />
              </div>
            </div>

            <BackgroundColors />
          </div>
        </div>
      </div>

      {/* FOOTER - Supaya terasa lebih seperti website */}
      <footer className="bg-zinc-900 text-zinc-400 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl font-semibold">LuxeStudio</h2>
          <p className="mt-3">Contoh website elegan dengan Tailwind CSS 4</p>
          <p className="text-xs mt-10 opacity-50">© 2026 Demo Website • Dibuat untuk belajar Tailwind</p>
        </div>
      </footer>
    </div>
  )
}

/* ==================== KOMPONEN YANG DITINGKATKAN ==================== */

function Spacing() {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-lg border border-zinc-100">
      <h2 className="text-3xl font-semibold text-zinc-900">Card Title</h2>
      <p className="mt-6 text-zinc-600 leading-relaxed text-[17px]">
        Ini adalah contoh penggunaan padding dan margin di Tailwind. 
        Desain bersih dengan jarak yang pas memberikan kesan profesional dan mahal.
      </p>
    </div>
  )
}

function Typography() {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-lg border border-zinc-100">
      <h1 className="text-5xl font-bold text-zinc-900 tracking-tight">
        Tailwind Typography
      </h1>
      <p className="text-zinc-600 text-xl mt-6 leading-relaxed">
        Belajar Tailwind sangat menyenangkan dan cepat. 
        Utilitas kelas membuat desain website terlihat jauh lebih premium.
      </p>
    </div>
  )
}

function BorderRadius() {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg border border-zinc-100 flex flex-wrap gap-5">
      <button className="border border-zinc-300 hover:border-zinc-400 px-8 py-3.5 rounded-xl hover:bg-zinc-50 transition-all font-medium">
        Small Radius
      </button>
      <button className="border border-zinc-300 hover:border-zinc-400 px-8 py-3.5 rounded-2xl hover:bg-zinc-50 transition-all font-medium">
        Large Radius
      </button>
      <button className="border border-zinc-300 hover:border-zinc-400 px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-all font-medium">
        Full Rounded
      </button>
    </div>
  )
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white p-12 rounded-3xl shadow-xl">
      <h3 className="text-3xl font-semibold">Beautiful Colors</h3>
      <p className="mt-4 text-amber-100 text-lg">
        Kombinasi warna netral dan aksen emas menciptakan kesan elegan dan timeless.
      </p>
    </div>
  )
}

function FlexboxGrid() {
  return (
    <nav className="bg-white border-b border-zinc-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-900">
          LUXE<span className="text-amber-700">STUDIO</span>
        </h1>
        
        <ul className="flex items-center gap-10 font-medium text-zinc-700">
          <li><a href="#" className="hover:text-amber-700 transition">Home</a></li>
          <li><a href="#" className="hover:text-amber-700 transition">Components</a></li>
          <li><a href="#" className="hover:text-amber-700 transition">Examples</a></li>
          <li><a href="#" className="hover:text-amber-700 transition">Contact</a></li>
        </ul>
        
        <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  )
}

function ShadowEffects() {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-lg border border-zinc-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
      <h3 className="text-3xl font-semibold text-zinc-900 group-hover:text-amber-700 transition">Hover Effect</h3>
      <p className="text-zinc-600 mt-4">
        Gerakan halus dan bayangan lembut yang membuat komponen terasa hidup dan mahal.
      </p>
    </div>
  )
}