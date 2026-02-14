import { useState, useEffect } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [checkedTiers, setCheckedTiers] = useState<string[]>([]);
  const [pilotInterest, setPilotInterest] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setShowSuccess(false);
      setErrorMsg('');
      setCheckedTiers([]);
      setPilotInterest(false);
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const toggleTier = (tier: string) => {
    setCheckedTiers(prev => 
      prev.includes(tier) 
        ? prev.filter(t => t !== tier)
        : [...prev, tier]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    // Validate at least one tier selected
    if (checkedTiers.length === 0) {
      setErrorMsg('Please select at least one plan you\'re interested in.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    
    // Add checked tiers
    formData.delete('tier');
    checkedTiers.forEach(tier => {
      formData.append('tier', tier);
    });

    // Add pilot interest
    if (pilotInterest) {
      formData.set('pilot_interest', 'Yes — interested in pilot programme');
    }

    setIsSubmitting(true);

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again or email josie.estadilla@ecosenssehealth.co.uk directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        
        .modal-overlay-active { opacity: 1; visibility: visible; }
        .modal-scale-in { transform: translateY(0) scale(1); }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        
        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .badge-dot {
          animation: pulse 2s ease infinite;
        }
        
        .success-icon {
          animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>
      
      <div 
        className={`fixed inset-0 z-[1000] flex items-center justify-center p-5 transition-all duration-300 ${isOpen ? 'modal-overlay-active' : 'opacity-0 invisible'}`}
        style={{
          background: 'rgba(6,15,30,0.85)',
          backdropFilter: 'blur(8px)'
        }}
        onClick={handleOverlayClick}
      >
        <div 
          className={`bg-white rounded-3xl w-full max-w-[620px] max-h-[90vh] overflow-y-auto relative transition-transform duration-[350ms] ${isOpen ? 'modal-scale-in' : 'translate-y-6 scale-[0.97]'}`}
          style={{
            boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* HEADER */}
          <div className="relative overflow-hidden rounded-t-3xl" style={{
            background: 'linear-gradient(135deg, #0A2342 0%, #0D2E57 100%)',
            padding: '36px 40px 32px'
          }}>
            {/* Grid pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(13,192,198,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(13,192,198,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />
            
            {/* Glow effect */}
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full" style={{
              background: 'radial-gradient(circle, rgba(13,192,198,0.15) 0%, transparent 70%)'
            }} />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200 z-10"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-[7px] px-3 py-[5px] rounded-full mb-4 relative z-[1]" style={{
              background: 'rgba(13,192,198,0.15)',
              border: '1px solid rgba(13,192,198,0.3)'
            }}>
              <div className="badge-dot w-1.5 h-1.5 rounded-full" style={{ background: '#14C0C6' }} />
              <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase" style={{ color: '#14C0C6' }}>
                Pilot Programme · Mid 2027
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-black leading-[1.2] mb-2.5 text-white relative z-[1]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pilot Partner<br />
              <em className="italic" style={{ color: '#14C0C6' }}>Registration</em>
            </h2>

            {/* Subtitle */}
            <p className="text-[13.5px] text-white/55 leading-[1.65] relative z-[1]">
              Join a select cohort of forward-thinking organisations shaping the future of UK elderly care. Complete this form and we'll be in touch within 48 hours.
            </p>

            {/* Spots pill */}
            <div className="inline-flex items-center gap-1.5 mt-3.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold relative z-[1]" style={{
              background: 'rgba(232,160,32,0.15)',
              border: '1px solid rgba(232,160,32,0.3)',
              color: '#E8A020'
            }}>
              ⚡ Limited to 10 founding partners — <strong className="ml-1">spaces filling fast</strong>
            </div>
          </div>

          {/* BODY */}
          <div className="p-10" style={{ display: showSuccess ? 'none' : 'block' }}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[#1E293B] tracking-[0.02em]">
                    Full Name <span className="text-[#DC2626] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Jane Smith"
                    required
                    className="w-full px-3.5 py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[13.5px] text-[#1E293B] outline-none transition-all duration-200 focus:border-[#0D7377] focus:shadow-[0_0_0_3px_rgba(13,115,119,0.1)] placeholder:text-[#94A3B8] placeholder:font-light"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#1E293B] tracking-[0.02em]">
                    Email Address <span className="text-[#DC2626] ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@yourorganisation.co.uk"
                    required
                    className="w-full px-3.5 py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[13.5px] text-[#1E293B] outline-none transition-all duration-200 focus:border-[#0D7377] focus:shadow-[0_0_0_3px_rgba(13,115,119,0.1)] placeholder:text-[#94A3B8] placeholder:font-light"
                  />
                </div>

                {/* Organisation */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="organisation" className="text-xs font-semibold text-[#1E293B] tracking-[0.02em]">
                    Organisation / Agency Name <span className="text-[#DC2626] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    placeholder="e.g. Sunrise Care Agency"
                    required
                    className="w-full px-3.5 py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[13.5px] text-[#1E293B] outline-none transition-all duration-200 focus:border-[#0D7377] focus:shadow-[0_0_0_3px_rgba(13,115,119,0.1)] placeholder:text-[#94A3B8] placeholder:font-light"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-[#1E293B] tracking-[0.02em]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +44 7700 900000"
                    className="w-full px-3.5 py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[13.5px] text-[#1E293B] outline-none transition-all duration-200 focus:border-[#0D7377] focus:shadow-[0_0_0_3px_rgba(13,115,119,0.1)] placeholder:text-[#94A3B8] placeholder:font-light"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1.5 col-span-2">
                  <label htmlFor="role" className="text-xs font-semibold text-[#1E293B] tracking-[0.02em]">
                    Your Role / Job Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    placeholder="e.g. Operations Manager, Director of Care"
                    className="w-full px-3.5 py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[13.5px] text-[#1E293B] outline-none transition-all duration-200 focus:border-[#0D7377] focus:shadow-[0_0_0_3px_rgba(13,115,119,0.1)] placeholder:text-[#94A3B8] placeholder:font-light"
                  />
                </div>
              </div>

              {/* TIER INTEREST */}
              <span className="text-xs font-semibold text-[#1E293B] mb-2.5 block">
                Which plan interests you? <span className="text-[#DC2626]">*</span>
              </span>
              <div className="flex flex-col gap-2 mb-4">
                {[
                  { value: 'B2B — Agency Care (£45/month per client)', title: 'Agency Care — B2B', desc: 'Full agency dashboard, carer app & risk alerts', price: '£45/mo per client' },
                  { value: 'B2B2C — Connected Care (£45 agency + £15 family)', title: 'Connected Care — B2B2C', desc: 'Agency + family working together on one platform', price: '£45 + £15/mo' },
                  { value: 'B2C — Family Care (£15/month)', title: 'Family Care — B2C', desc: 'For families monitoring an elderly relative independently', price: '£15/mo' }
                ].map((tier) => (
                  <label
                    key={tier.value}
                    className={`flex items-center gap-2.5 p-2.5 px-3.5 border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 select-none ${
                      checkedTiers.includes(tier.value)
                        ? 'border-[#0D7377] bg-[#F0FAFA]'
                        : 'border-[#E2E8F0] hover:border-[#0D7377] hover:bg-[#F0FAFA]'
                    }`}
                    onClick={() => toggleTier(tier.value)}
                  >
                    <input
                      type="checkbox"
                      checked={checkedTiers.includes(tier.value)}
                      onChange={() => {}}
                      className="w-4 h-4 border-[1.5px] border-[#CBD5E1] rounded cursor-pointer flex-shrink-0 accent-[#0D7377]"
                    />
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold text-[#0A2342] mb-0.5">{tier.title}</p>
                      <p className="text-[11px] text-[#64748B] leading-[1.4]">{tier.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#0D7377] whitespace-nowrap">{tier.price}</span>
                  </label>
                ))}
              </div>

              {/* PILOT TOGGLE */}
              <div
                className="flex items-center justify-between p-3.5 px-4 rounded-xl mb-4 cursor-pointer transition-all duration-200 hover:border-[#0D7377]"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,115,119,0.06), rgba(13,192,198,0.04))',
                  border: '1.5px solid rgba(13,115,119,0.2)'
                }}
                onClick={() => setPilotInterest(!pilotInterest)}
              >
                <div>
                  <h4 className="text-[13px] font-bold text-[#0A2342] mb-[3px]">
                    🚀 Interested in joining the Pilot Programme?
                  </h4>
                  <p className="text-[11.5px] text-[#64748B] leading-[1.4]">
                    Get preferred pricing locked in for life + direct access to our founding team
                  </p>
                </div>
                <div className="relative w-11 h-6 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={pilotInterest}
                    onChange={(e) => setPilotInterest(e.target.checked)}
                    className="opacity-0 w-0 h-0"
                  />
                  <div className={`absolute inset-0 rounded-full transition-all duration-200 cursor-pointer ${pilotInterest ? 'bg-[#0D7377]' : 'bg-[#CBD5E1]'}`}>
                    <div className={`absolute w-[18px] h-[18px] top-[3px] left-[3px] bg-white rounded-full transition-transform duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.2)] ${pilotInterest ? 'translate-x-5' : ''}`} />
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#1E293B] tracking-[0.02em]">
                  Anything you'd like us to know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your organisation, the number of clients you support, or any questions you have about ecosensse..."
                  className="w-full px-3.5 py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[13.5px] text-[#1E293B] outline-none transition-all duration-200 focus:border-[#0D7377] focus:shadow-[0_0_0_3px_rgba(13,115,119,0.1)] placeholder:text-[#94A3B8] placeholder:font-light resize-y min-h-[90px] leading-[1.6]"
                />
              </div>

              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="New Pilot Partner Registration — ecosenssehealth" />
              <input type="hidden" name="_replyto" value="" />

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-[15px] bg-[#0A2342] text-white rounded-xl text-[15px] font-bold flex items-center justify-center gap-2.5 mt-5 transition-all duration-[250ms] hover:bg-[#0D7377] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,115,119,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{isSubmitting ? 'Sending...' : 'Register My Interest'}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>

              {/* Error message */}
              {errorMsg && (
                <div className="mt-3 p-2.5 px-3.5 bg-[#FEF2F2] border border-[#FECACA] rounded-lg text-[12.5px] text-[#DC2626]">
                  {errorMsg}
                </div>
              )}

              <p className="text-center text-[11.5px] text-[#64748B] mt-3 leading-[1.5]">
                By submitting this form you agree to be contacted by the ecosensse team.<br />
                We will never share your details with third parties.
              </p>
            </form>
          </div>

          {/* SUCCESS STATE */}
          {showSuccess && (
            <div className="text-center p-12 px-8">
              <div className="success-icon w-[72px] h-[72px] rounded-full flex items-center justify-center text-[32px] mx-auto mb-6 shadow-[0_8px_24px_rgba(13,115,119,0.3)]" style={{
                background: 'linear-gradient(135deg, #0D7377, #14C0C6)'
              }}>
                ✓
              </div>
              <h3 className="text-2xl font-black text-[#0A2342] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                You're on the list.
              </h3>
              <p className="text-sm text-[#64748B] leading-[1.7] max-w-md mx-auto mb-6">
                Thank you for registering your interest in the ecosensse pilot programme.
                <strong className="text-[#0A2342] font-semibold"> Josie will be in touch within 48 hours</strong> to discuss next steps.
                We look forward to building the future of UK elderly care together.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-[#0A2342] text-white rounded-[10px] text-sm font-semibold transition-colors duration-200 hover:bg-[#0D7377]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
