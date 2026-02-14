import ecosystemDiagram from "figma:asset/e179407e8ad0e05f68abc4a440cc86c16146e6c6.png";

export function SolutionSection() {
  return (
    <section 
      id="solution" 
      className="relative overflow-hidden bg-[#0D1F38]"
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
      {/* Circuit traces */}
      <div 
        className="absolute inset-0 pointer-events-none"
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
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(13,31,56,0.72) 100%)'
        }}
      />

      <div className="max-w-[1100px] mx-auto px-10 py-[100px] relative z-20">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#14C0C6] mb-4">
            Our Solution
          </p>
          <h2 className="font-extrabold text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.02em] text-white mb-5">
            The UK care system is fragmented.
            <br />
            <em className="italic text-[#14C0C6]">ecosensse unifies it.</em>
          </h2>
          <p className="text-base text-white/55 leading-[1.75] font-light max-w-[580px] mx-auto">
            Right now, agencies, families, elderly individuals and the NHS all operate in silos —
            each with incomplete information and no shared visibility.
            ecosensse is the <strong className="text-white/85 font-semibold">intelligent connective layer</strong> that brings every
            stakeholder into one unified platform, turning reactive crisis management into
            coordinated, proactive care.
          </p>
        </div>

        {/* DIAGRAM */}
        <div className="max-w-[700px] mx-auto mb-14 relative">
          {/* Glow effect behind diagram */}
          <div 
            className="absolute inset-[-20px] pointer-events-none z-0"
            style={{
              background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(13,192,198,0.1) 0%, transparent 70%)'
            }}
          />
          
          <img 
            src={ecosystemDiagram} 
            alt="ECOSENSSE Ecosystem: The Unified Circle of Care" 
            className="w-full h-auto rounded-[20px] relative z-10"
            style={{
              boxShadow: `
                0 0 0 1px rgba(13,192,198,0.15),
                0 24px 64px rgba(0,0,0,0.45),
                0 0 80px rgba(13,192,198,0.06)
              `
            }}
          />
        </div>

        {/* HANDOFF */}
        <a 
          href="#platform"
          className="flex items-center justify-center gap-3.5 py-5 px-10 bg-white/5 rounded-[14px] border border-white/10 max-w-[600px] mx-auto transition-all duration-200 hover:bg-white/8 hover:border-[rgba(13,192,198,0.35)] no-underline group"
        >
          <p className="text-sm text-white/55 text-center leading-[1.6]">
            Want to understand exactly how it all works together?{' '}
            <span className="text-[#14C0C6] font-bold">See the full platform workflow →</span>
          </p>
          <span className="text-lg text-[#14C0C6] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>
    </section>
  );
}