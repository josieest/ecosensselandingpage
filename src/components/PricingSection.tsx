export function PricingSection() {
  const plans = [
    {
      audience: "Families · B2C",
      name: "Family Care",
      description: "For families who want to stay proactively close to their elderly relative's wellbeing — independent of a care agency, on their own terms.",
      price: "15",
      period: "/month",
      note: "per family  ·  No setup fee  ·  Cancel anytime",
      color: "#1B7A4A",
      features: [
        "Family app with live wellness dashboard",
        "Wearable monitoring & health tracking",
        "Instant alerts for falls or anomalies",
        "Personalised care recommendations",
        "Activity & sleep pattern insights",
        "Upgradeable to Connected Care at any time"
      ],
      cta: "Start Free Trial",
      ctaStyle: "green"
    },
    {
      audience: "Care Agencies · B2B",
      name: "Agency Care",
      description: "The complete operational platform for care agencies managing elderly clients at scale — real-time monitoring, carer tools, and intelligent risk management in one place.",
      price: "45",
      period: "/month",
      note: "per client  ·  No setup fee  ·  Cancel anytime",
      color: "#0A2342",
      features: [
        "Real-time agency monitoring dashboard",
        "Carer mobile app with live client status",
        "Automated risk alerts & escalation workflows",
        "Wearable device integration",
        "Client health reporting & outcome tracking",
        "Dedicated agency onboarding support"
      ],
      cta: "Request a Demo",
      ctaStyle: "outline"
    },
    {
      audience: "Agencies + Families · B2B2C",
      name: "Connected Care",
      description: "The full circle of care — agency and family working together on one intelligent platform, with shared visibility and coordinated action around each elderly individual.",
      price: "45",
      period: "/month agency",
      priceExtra: { amount: "15", period: "/month family" },
      note: "Each billed independently  ·  No bundling required",
      color: "#0D7377",
      features: [
        "Everything in Agency Care",
        "Family app with live wellness updates",
        "Real-time family notifications & alerts",
        "Personalised care recommendations for families",
        "Shared care timeline between agency & family",
        "Two-way communication between carer & family"
      ],
      cta: "Get Started",
      ctaStyle: "primary",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Simple, transparent pricing.<br />
            <span className="text-[#0D7377]">For every part of the care circle.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you're a care agency, a family, or both — ecosensse has a plan built specifically for how you engage with elderly care.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-[20px] border-[1.5px] overflow-hidden transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(10,35,66,0.12)] relative ${
                plan.popular 
                  ? 'border-[#0D7377] scale-[1.03] shadow-[0_20px_48px_rgba(13,115,119,0.18)]' 
                  : 'border-[#E2E8F0]'
              }`}
            >
              {/* Featured Badge */}
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-[#0D7377] text-white text-[15px] font-bold tracking-[0.1em] uppercase py-1 px-2.5 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Card Header */}
              <div className="px-6 pt-6 pb-5 border-b border-[#F1F5F9]">
                <h3 className="text-[20px] font-extrabold text-[#0A2342] mb-2 text-center">
                  {plan.name}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-[1.6] text-justify">
                  {plan.description}
                </p>
              </div>

              {/* Price Block */}
              <div className="px-6 py-5 border-b border-[#F1F5F9]">
                <div className="flex items-end gap-1 mb-1">
                  <span 
                    className={`text-lg font-bold leading-none pb-1.5 ${
                      plan.popular ? 'text-[#0D7377]' : 'text-[#0A2342]'
                    }`}
                  >
                    £
                  </span>
                  <span 
                    className={`text-[48px] font-extrabold leading-none ${
                      plan.popular ? 'text-[#0D7377]' : 'text-[#0A2342]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[13px] text-[#64748B] pb-2">
                    {plan.period}
                  </span>
                </div>
                {plan.priceExtra && (
                  <div className="flex items-end gap-1 mt-1.5">
                    <span className="text-sm font-bold leading-none pb-1 text-[#0D7377]">
                      + £
                    </span>
                    <span className="text-[36px] font-extrabold leading-none text-[#0D7377]">
                      {plan.priceExtra.amount}
                    </span>
                    <span className="text-[13px] text-[#64748B] pb-1">
                      {plan.priceExtra.period}
                    </span>
                  </div>
                )}
                <p className="text-[13px] text-[#64748B] leading-[1.5] mt-1">
                  {plan.note.split('·').map((part, i) => (
                    <span key={i}>
                      {i > 0 && ' · '}
                      {part.includes('No') ? <strong className="text-[#0A2342] font-semibold">{part.trim()}</strong> : part.trim()}
                    </span>
                  ))}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 py-6 flex flex-col gap-3">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2.5">
                    <div 
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-white text-[9px] mt-0.5 flex-shrink-0"
                      style={{ background: plan.color }}
                    >
                      ✓
                    </div>
                    <span className="text-[13px] text-[#1E293B] leading-[1.5]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[13px] text-[#64748B] leading-[1.7] mt-10">
          All plans include a <strong className="text-[#0A2342]">30-day free trial</strong>. No credit card required to get started.<br />
          Pilot partners joining our <strong className="text-[#0A2342]">2027 validation programme</strong> receive preferred pricing — <a href="#partner" className="text-[#0D7377] no-underline font-semibold">see below ↓</a>
        </p>

      </div>
    </section>
  );
}