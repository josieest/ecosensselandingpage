import { useState } from 'react';
import { RegistrationModal } from './RegistrationModal';

export function PartnerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const benefits = [
    {
      icon: "🔒",
      title: "Preferred Pricing — Locked For Life",
      description: "Pilot partners receive permanently discounted rates, locked in before commercial launch. As ecosensse scales nationally, your cost never changes."
    },
    {
      icon: "🧭",
      title: "Shape the Product Roadmap",
      description: "Your operational reality directly influences what gets built. Pilot partners have a seat at the table — not just access to the platform, but influence over its future."
    },
    {
      icon: "📊",
      title: "Generate Evidence That Matters",
      description: "Your data and outcomes contribute to published clinical research and NHS submissions — raising your agency's credibility with commissioners and regulators."
    },
    {
      icon: "🏆",
      title: "First-Mover Advantage in Your Region",
      description: "Be the care agency in your area already operating at the intelligence level your competitors won't reach for years. That gap compounds over time."
    },
    {
      icon: "👥",
      title: "Direct Access to the Founding Team",
      description: "Not a support ticket. A relationship. Pilot partners work directly with ecosensse's founders throughout the validation period — full responsiveness, full transparency."
    },
    {
      icon: "🌍",
      title: "Recognised as a Pioneer in UK Care",
      description: "Founding partners are acknowledged in our public launch, investor materials, and NHS submissions as organisations that chose to lead rather than follow."
    }
  ];

  const timeline = [
    {
      icon: "🔬",
      date: "Now — Q4 2026",
      title: "Expression of Interest Open",
      description: "Register your interest. We'll keep you informed as we approach the pilot launch and give you priority access when applications open."
    },
    {
      icon: "🤝",
      date: "Q1 2027",
      title: "Pilot Partner Selection",
      description: "A small cohort of founding partners selected. Onboarding, setup and co-design sessions begin with direct access to the ecosensse founding team."
    },
    {
      icon: "🚀",
      date: "Mid 2027",
      title: "Pilot Validation Launches",
      description: "Live deployment with real clients. Partners actively shape the product, generate clinical evidence, and build the data layer that powers national outcomes."
    }
  ];

  return (
    <section 
      id="partner" 
      className="bg-[#0D1F38] relative overflow-hidden py-24"
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
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(13,31,56,0.72) 100%)'
        }}
      />

      {/* Decorative circles */}
      <div 
        className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,115,119,0.25) 0%, transparent 65%)' }}
      />
      <div 
        className="absolute -bottom-[80px] left-[10%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(176,122,16,0.15) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-10 relative z-20">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-white">
            Our Partners
          </h2>
        </div>

        {/* TOP SECTION - Timeline */}
        <div className="mb-[72px]">
          
          <div className="max-w-3xl mx-auto">
            <p className="text-[15px] font-semibold tracking-[0.18em] uppercase text-[#14A7AC] mb-3.5 text-center">
              Pilot Programme
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center max-w-[480px] mx-auto">
              Be part of something that changes UK care.
            </h3>
            <p className="text-[15px] text-white/60 leading-[1.75] max-w-[660px] mx-auto text-center mb-12">
              We are selectively inviting a small number of forward-thinking care agencies and NHS-aligned organisations to join our founding pilot cohort — shaping the platform that will define proactive elderly care in the UK.
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-5 relative">
                  {/* Connecting line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-[-24px] w-[2px] bg-white/10" />
                  )}

                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full bg-[rgba(13,115,119,0.3)] border-2 border-[#14A7AC] flex items-center justify-center text-base flex-shrink-0 mb-6 relative z-10">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 pb-6">
                    <p className="text-[15px] font-bold tracking-[0.12em] uppercase text-[#14A7AC] mb-1.5">
                      {item.date}
                    </p>
                    <p className="text-[15px] font-bold text-white mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-[15px] text-white/50 leading-[1.6] text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <p className="text-[15px] font-semibold tracking-[0.16em] uppercase text-white/40">
              What pilot partners gain
            </p>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/[0.09] rounded-[14px] px-5.5 py-6 transition-all duration-200 hover:bg-white/[0.09] hover:border-[rgba(13,167,172,0.4)]"
              >
                <span className="text-2xl block mb-3">
                  {benefit.icon}
                </span>
                <p className="text-[15px] font-bold text-white mb-1.5 leading-[1.3]">
                  {benefit.title}
                </p>
                <p className="text-[15px] text-white/50 leading-[1.65] text-justify">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-14 bg-white/5 border border-white/10 rounded-[20px] px-14 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h3 className="text-[22px] font-extrabold text-white mb-2.5 leading-[1.25]">
              Ready to help shape the future of UK elderly care?
            </h3>
            <p className="text-sm text-white/55 leading-[1.65] max-w-[520px] text-justify">
              We're not looking for everyone — we're looking for the right partners. If your organisation is forward-thinking, operationally ambitious, and genuinely committed to better outcomes for elderly individuals, we'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 flex-shrink-0">
            <button className="py-3.5 px-8 bg-[#0D7377] text-white rounded-[10px] text-sm font-bold whitespace-nowrap transition-colors duration-200 hover:bg-[#14A7AC]" onClick={() => setIsModalOpen(true)}>
              Register Your Interest
            </button>
            <p className="text-[15px] text-white/35 text-center mt-0.5">
              Limited to 10 founding partners
            </p>
          </div>
        </div>

      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}