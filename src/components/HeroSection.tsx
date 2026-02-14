export function HeroSection() {
  return (
    <section 
      className="min-h-[85vh] flex flex-col justify-center relative pt-[100px] pb-16 px-6 md:px-12 overflow-hidden bg-[#0D1F38]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(13,192,198,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(13,192,198,0.1) 1px, transparent 1px),
          radial-gradient(circle, rgba(13,192,198,0.4) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        backgroundPosition: '0 0, 0 0, 0 0'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit traces */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 15%, rgba(13,192,198,0.18) 15%, rgba(13,192,198,0.18) 15.4%, transparent 15.4%),
              linear-gradient(90deg, transparent 55%, rgba(13,192,198,0.12) 55%, rgba(13,192,198,0.12) 55.3%, transparent 55.3%),
              linear-gradient(90deg, transparent 78%, rgba(13,192,198,0.15) 78%, rgba(13,192,198,0.15) 78.3%, transparent 78.3%),
              linear-gradient(180deg, transparent 20%, rgba(13,192,198,0.15) 20%, rgba(13,192,198,0.15) 20.4%, transparent 20.4%),
              linear-gradient(180deg, transparent 60%, rgba(13,192,198,0.12) 60%, rgba(13,192,198,0.12) 60.3%, transparent 60.3%),
              linear-gradient(180deg, transparent 82%, rgba(13,192,198,0.15) 82%, rgba(13,192,198,0.15) 82.3%, transparent 82.3%)
            `
          }}
        />

        {/* Vignette overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(13,31,56,0.72) 100%)'
          }}
        />
        
        {/* Radial glow left */}
        <div 
          className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(13,115,119,0.28) 0%, transparent 65%)'
          }}
        />
        
        {/* Radial glow right */}
        <div 
          className="absolute bottom-0 -right-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(13,46,87,0.6) 0%, transparent 65%)'
          }}
        />
        
        {/* Vertical scan line */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(13,192,198,0.15) 30%, rgba(13,192,198,0.15) 70%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        {/* Main Headline */}
        <h1 className="mb-10">
          <span 
            className="block font-['Playfair_Display'] text-[clamp(32px,4.9vw,66px)] font-black text-white leading-[1.0] tracking-tight opacity-0 animate-fadeUp"
            style={{ animationDelay: '0.25s' }}
          >
            The Cost of Silence is{' '}
            <span className="relative inline-block text-[#E8A020]">
              £2.3 Billion.
              <span 
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#E8A020] opacity-40 rounded-sm"
              />
            </span>
          </span>
        </h1>

        {/* Black Box Statement */}
        <div 
          className="mb-8 py-5 pl-6 border-l-[3px] border-[#0D7377] opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-base font-bold tracking-[0.2em] uppercase text-[#14C0C6] mb-2.5">
            The Black Box of Home Care
          </p>
          <p className="text-[clamp(17px,2vw,21px)] text-[#E8EDF4]/75 leading-[1.7] font-light w-full max-w-full lg:max-w-[100%] xl:max-w-[98%]">
            Every year, <strong className="text-[#E8EDF4] font-semibold">"minor" unmonitored events</strong> — a missed glass of water,
            a slight change in gait, a skipped meal — escalate into major UK hospital admissions.
            Between care visits, nobody is watching. <strong className="text-[#E8EDF4] font-semibold">ecosensse ends the silence.</strong>
          </p>
        </div>

        {/* Solution Line */}
        <div 
          className="flex items-center gap-4 mb-10 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.55s' }}
        >
          <div className="w-10 h-px bg-[#0D7377] flex-shrink-0" />
          <p className="text-[clamp(15px,1.2vw,15px)] text-[#14C0C6] font-medium italic tracking-wide max-w-[480px]">
            Integrating, adapting, analysing and recommending — across the entire UK care circle.
          </p>
        </div>

        {/* CTA Row */}
        <div 
          className="flex items-center gap-5 flex-wrap opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.7s' }}
        >
          <a 
            href="#"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0D7377] text-white rounded-[10px] text-sm font-bold transition-all duration-250 hover:bg-[#14C0C6] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,115,119,0.4)] group"
          >
            Get Started
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-7 py-[15px] bg-transparent text-white/70 rounded-[10px] text-[15px] font-medium border border-white/[0.18] transition-all duration-250 hover:border-white/45 hover:text-white hover:-translate-y-0.5"
          >
            Register Pilot Interest
          </a>
        </div>
      </div>
    </section>
  );
}