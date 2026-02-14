export function PlatformSection() {
  return (
    <section id="platform" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-10">
        
        {/* HEADER */}
        <div className="animate-fadeUp text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Our Platform
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            ecosensse connects the entire UK care circle — integrating data from wearables and care records, 
            adapting to each individual, analysing patterns in real time, and recommending the right action before crisis strikes.
          </p>
        </div>

        {/* 1. WORKFLOW */}
        <div className="mt-[72px] bg-white rounded-3xl py-12 px-8 border border-[#E2E8F0] shadow-sm">
          <div className="flex items-center gap-2.5 mb-12">
            <p className="text-[15px] font-semibold tracking-[0.16em] uppercase text-[#64748B]">
              How it works — the full intelligence loop
            </p>
            <div className="flex-1 h-[1px] bg-[#CBD5E1]"></div>
          </div>
          
          <div className="relative grid grid-cols-6 gap-6 max-lg:grid-cols-3 max-lg:gap-8 max-sm:grid-cols-2">
            {/* Connecting line */}
            <div className="absolute top-11 left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-[#0D7377] via-[#1B7A4A] to-[#B07A10] z-0 max-lg:hidden"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10 px-3">
              <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-4xl mb-5 border-4 border-white shadow-[0_6px_24px_rgba(0,0,0,0.15)] bg-[#0D7377] text-white transition-transform duration-250 hover:scale-110">
                ⌚
              </div>
              <p className="text-sm font-bold text-[#0A2342] leading-[1.35] mb-2">
                Wearable<br />Monitors
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.6] font-normal">
                Continuous vital &amp; activity data from device
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10 px-3">
              <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-4xl mb-5 border-4 border-white shadow-[0_6px_24px_rgba(0,0,0,0.15)] bg-[#0A5C8A] text-white transition-transform duration-250 hover:scale-110">
                🧠
              </div>
              <p className="text-sm font-bold text-[#0A2342] leading-[1.35] mb-2">
                AI Analyses<br />Patterns
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.6] font-normal">
                Adaptive engine detects anomalies &amp; risks
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10 px-3">
              <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-4xl mb-5 border-4 border-white shadow-[0_6px_24px_rgba(0,0,0,0.15)] bg-[#0A2342] text-white transition-transform duration-250 hover:scale-110">
                🚨
              </div>
              <p className="text-sm font-bold text-[#0A2342] leading-[1.35] mb-2">
                Risk Flag<br />Raised
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.6] font-normal">
                Agency dashboard alerts care manager instantly
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10 px-3">
              <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-4xl mb-5 border-4 border-white shadow-[0_6px_24px_rgba(0,0,0,0.15)] bg-[#1B7A4A] text-white transition-transform duration-250 hover:scale-110">
                📲
              </div>
              <p className="text-sm font-bold text-[#0A2342] leading-[1.35] mb-2">
                Family<br />Notified
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.6] font-normal">
                Real-time alert sent via family app
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center relative z-10 px-3">
              <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-4xl mb-5 border-4 border-white shadow-[0_6px_24px_rgba(0,0,0,0.15)] bg-[#28A05A] text-white transition-transform duration-250 hover:scale-110">
                ✅
              </div>
              <p className="text-sm font-bold text-[#0A2342] leading-[1.35] mb-2">
                Action<br />Recommended
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.6] font-normal">
                Personalised next-best-action suggested
              </p>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center relative z-10 px-3">
              <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-4xl mb-5 border-4 border-white shadow-[0_6px_24px_rgba(0,0,0,0.15)] bg-[#B07A10] text-white transition-transform duration-250 hover:scale-110">
                📊
              </div>
              <p className="text-sm font-bold text-[#0A2342] leading-[1.35] mb-2">
                Outcome<br />Logged
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.6] font-normal">
                Data enriches national care intelligence layer
              </p>
            </div>
          </div>
        </div>

        {/* 2. WHO IT SERVES */}
        <div className="mt-20">
          <div className="flex items-center gap-2.5 mb-8">
            <p className="text-[15px] font-semibold tracking-[0.16em] uppercase text-[#64748B]">
              Built for every stakeholder in the care circle
            </p>
            <div className="flex-1 h-[1px] bg-[#CBD5E1]"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {/* Card 1 - Care Agencies */}
            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,35,66,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#0D7377]">
              <span className="text-[28px] mb-3.5 block">🏥</span>
              <p className="text-[15px] font-semibold tracking-[0.12em] uppercase text-[#64748B] mb-2">
                Care Agencies
              </p>
              <p className="text-base font-bold text-[#0A2342] mb-3 leading-[1.3]">
                Monitor every client. Miss nothing.
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.65] font-light">
                Real-time dashboards, automated risk alerts, and mobile carer tools that cut response times and reduce liability.
              </p>
            </div>

            {/* Card 2 - Families */}
            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,35,66,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#1B7A4A]">
              <span className="text-[28px] mb-3.5 block">👨‍👩‍👧</span>
              <p className="text-[15px] font-semibold tracking-[0.12em] uppercase text-[#64748B] mb-2">
                Families
              </p>
              <p className="text-base font-bold text-[#0A2342] mb-3 leading-[1.3]">
                Stay close, even from a distance.
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.65] font-light">
                Live wellness updates, instant alerts, and personalised care recommendations — so families stay informed without the anxiety.
              </p>
            </div>

            {/* Card 3 - Elderly Individuals */}
            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,35,66,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#0A2342]">
              <span className="text-[28px] mb-3.5 block">🧓</span>
              <p className="text-[15px] font-semibold tracking-[0.12em] uppercase text-[#64748B] mb-2">
                Elderly Individuals
              </p>
              <p className="text-base font-bold text-[#0A2342] mb-3 leading-[1.3]">
                Safe, independent, supported.
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.65] font-light">
                Discreet wearable monitoring that enables independent living with a proactive safety net — without intrusion.
              </p>
            </div>

            {/* Card 4 - NHS */}
            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,35,66,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#B07A10]">
              <span className="text-[28px] mb-3.5 block">🏛️</span>
              <p className="text-[15px] font-semibold tracking-[0.12em] uppercase text-[#64748B] mb-2">
                NHS &amp; Commissioners
              </p>
              <p className="text-base font-bold text-[#0A2342] mb-3 leading-[1.3]">
                Population data that prevents, not reacts.
              </p>
              <p className="text-[15px] text-[#64748B] leading-[1.65] font-light">
                Aggregated wellness trends, bed-blocking reduction insights, and preventative health intelligence at regional and national level.
              </p>
            </div>
          </div>
        </div>

        {/* 3. INTELLIGENCE LAYER */}
        <div 
          className="mt-20 bg-[#0D1F38] rounded-3xl py-14 px-[60px] relative overflow-hidden max-md:py-10 max-md:px-8"
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
              `,
              borderRadius: '24px'
            }}
          />

          {/* Vignette overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(13,31,56,0.72) 100%)',
              borderRadius: '24px'
            }}
          />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-35 pointer-events-none" 
               style={{ background: 'radial-gradient(circle, rgba(13,115,119,0.35) 0%, transparent 70%)' }}></div>
          <div className="absolute -bottom-[60px] left-[20%] w-60 h-60 rounded-full opacity-20 pointer-events-none"
               style={{ background: 'radial-gradient(circle, rgba(176,122,16,0.2) 0%, transparent 70%)' }}></div>
          
          <div className="grid grid-cols-2 gap-[60px] items-center relative z-10 max-md:grid-cols-1 max-md:gap-9">
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <p className="text-[15px] font-semibold tracking-[0.16em] uppercase text-[#14A7AC]">
                  The intelligence layer
                </p>
                <div className="flex-1 h-[1px] bg-white/15"></div>
              </div>
              <h3 className="font-extrabold text-[30px] text-white leading-[1.2] mb-4">
                A platform that<br />
                <em className="not-italic text-[#14A7AC]">learns as it grows.</em>
              </h3>
              <p className="text-[14.5px] text-white/65 leading-[1.75] font-light">
                ecosensse doesn't just collect data — it builds an adaptive intelligence model for each individual. 
                The more it monitors, the more accurately it predicts. Every interaction, every outcome, every intervention 
                makes the system smarter for everyone in the network.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
              {/* Pillar 1 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-xl p-5 transition-all duration-200 hover:bg-white/[0.12]">
                <span className="text-[22px] mb-2.5 block">🔗</span>
                <p className="text-[15px] font-semibold text-white mb-1.5">Integrates</p>
                <p className="text-[15px] text-white/50 leading-[1.55] font-light">
                  Wearables, care records, family inputs and NHS data unified in one platform
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-xl p-5 transition-all duration-200 hover:bg-white/[0.12]">
                <span className="text-[22px] mb-2.5 block">🔄</span>
                <p className="text-[15px] font-semibold text-white mb-1.5">Adapts</p>
                <p className="text-[15px] text-white/50 leading-[1.55] font-light">
                  Individual baselines continuously refined — no two care profiles are the same
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-xl p-5 transition-all duration-200 hover:bg-white/[0.12]">
                <span className="text-[22px] mb-2.5 block">📈</span>
                <p className="text-[15px] font-semibold text-white mb-1.5">Analyses</p>
                <p className="text-[15px] text-white/50 leading-[1.55] font-light">
                  Predictive risk scoring detects deterioration days before a crisis occurs
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-xl p-5 transition-all duration-200 hover:bg-white/[0.12]">
                <span className="text-[22px] mb-2.5 block">💡</span>
                <p className="text-[15px] font-semibold text-white mb-1.5">Recommends</p>
                <p className="text-[15px] text-white/50 leading-[1.55] font-light">
                  Actionable, personalised guidance for carers, families and clinicians
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. INTEGRATION */}
        <div className="mt-20 grid grid-cols-2 gap-12 items-start max-md:grid-cols-1">
          <div>
            <p className="text-[15px] font-semibold tracking-[0.18em] uppercase text-[#0D7377] mb-3.5">
              Compatibility
            </p>
            <h3 className="font-extrabold text-[28px] text-[#0A2342] leading-[1.15] mb-4">
              Works with<br />what you already use.
            </h3>
            <p className="text-[14px] text-[#64748B] leading-[1.7] font-normal">
              ecosensse is built to integrate seamlessly with existing care infrastructure — no rip-and-replace, no disruption.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {/* Integration 1 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E2E8F0] transition-colors duration-200 hover:border-[#0D7377]">
              <div className="w-9 h-9 bg-[#F0F4F8] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                ⌚
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#0A2342] mb-1">Major Wearable Brands</p>
                <p className="text-[15px] text-[#64748B] leading-[1.5] font-light">
                  Compatible with Apple Watch, Fitbit, Garmin and specialist medical-grade wearables
                </p>
              </div>
            </div>

            {/* Integration 2 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E2E8F0] transition-colors duration-200 hover:border-[#0D7377]">
              <div className="w-9 h-9 bg-[#F0F4F8] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                🗂️
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#0A2342] mb-1">Care Management Systems</p>
                <p className="text-[15px] text-[#64748B] leading-[1.5] font-light">
                  API-first architecture integrates with leading UK care management platforms
                </p>
              </div>
            </div>

            {/* Integration 3 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E2E8F0] transition-colors duration-200 hover:border-[#0D7377]">
              <div className="w-9 h-9 bg-[#F0F4F8] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                🏛️
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#0A2342] mb-1">NHS ICBS &amp; Digital Infrastructure</p>
                <p className="text-[15px] text-[#64748B] leading-[1.5] font-light">
                  Designed for future NHS integration — aligned with NHS data standards from day one
                </p>
              </div>
            </div>

            {/* Integration 4 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E2E8F0] transition-colors duration-200 hover:border-[#0D7377]">
              <div className="w-9 h-9 bg-[#F0F4F8] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                📱
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#0A2342] mb-1">iOS &amp; Android</p>
                <p className="text-[15px] text-[#64748B] leading-[1.5] font-light">
                  Native mobile apps for carers and families on all major devices
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}