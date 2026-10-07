import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MapPin, Share2, Heart, ArrowRight, ArrowLeft, CheckCircle2, MessageCircle, Send } from 'lucide-react';

interface ImNewFunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPreference?: 'physical' | 'online' | null;
}

export const ImNewFunnelModal: React.FC<ImNewFunnelModalProps> = ({
  isOpen,
  onClose,
  defaultPreference = null,
}) => {
  const [step, setStep] = useState(1);
  const [attendanceType, setAttendanceType] = useState<'physical' | 'online'>(defaultPreference || 'physical');
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fellowshipInterest, setFellowshipInterest] = useState('Youth Ministry');
  const [journeyStage, setJourneyStage] = useState('First-time visitor to Buoho District');
  const [prayerRequest, setPrayerRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello The Church of Pentecost, Buoho District Pastoral Care,\nMy name is ${fullName || 'a new visitor'}.\nI just completed the onboarding connection form on your website!\nPreference: ${
        attendanceType === 'physical' ? 'Physical Campus (Buoho Central)' : 'Fluenca Christian Social Community'
      }\nMinistry Interest: ${fellowshipInterest}\nStatus: ${journeyStage}\nSon's of God. March Forward!`
    );
    // WhatsApp direct link
    window.open(`https://wa.me/233240000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto my-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-8 text-slate-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute -top-12 -left-12 w-44 h-44 bg-blue-100/70 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-amber-100/60 rounded-full blur-2xl pointer-events-none" />

        {!isSubmitted ? (
          <div>
            {/* Header & Progress Indicator */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Step {step} of 3 • Welcome Onboarding Funnel</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1A3A] tracking-tight">
                Welcome Home to Buoho District
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Let us tailor the perfect church experience for you and get you connected.
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: EXPERIENCE PREFERENCE */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  How would you love to fellowship with us?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Physical Campus */}
                  <div
                    onClick={() => setAttendanceType('physical')}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      attendanceType === 'physical'
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Physical Campus</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Worship with us in person at Buoho Central Auditorium or any of our district assemblies.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 mt-3 block">
                      Sundays 9:00 AM – 12:00 PM
                    </span>
                  </div>

                  {/* Join Fluenca (Church Social Media) */}
                  <div
                    onClick={() => setAttendanceType('online')}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      attendanceType === 'online'
                        ? 'border-purple-600 bg-purple-50/70 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                        <Share2 className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Join Fluenca</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Connect with brethren on Fluenca, our church social media tailored for Christian growth.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-purple-700 mt-3 block">
                      Church Social Network
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    What best describes your current journey?
                  </label>
                  <select
                    value={journeyStage}
                    onChange={(e) => setJourneyStage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="First-time visitor to Buoho District">First-time visitor to Buoho District</option>
                    <option value="Looking for a spiritual home">Looking for a spiritual home</option>
                    <option value="Relocated to Buoho / Kumasi area">Relocated to Buoho / Kumasi area</option>
                    <option value="Student / Young Professional">Student / Young Professional</option>
                    <option value="Believer seeking spiritual growth & discipleship">Believer seeking spiritual growth & discipleship</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* STEP 2: CONTACT DETAILS */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Phone Number * (for instant confirmation & welcome DM)
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="+233 24 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="kwame@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3: FELLOWSHIP INTEREST & PRAYER */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Which Ministry or Fellowship interest you most?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    {[
                      'Youth Ministry',
                      "Women's Ministry",
                      'PEMEM (Men)',
                      'Children Ministry',
                      'Music & Choir',
                      'Prayer & Evangelism',
                    ].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setFellowshipInterest(m)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          fellowshipInterest === m
                            ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                            : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Any prayer request or question for our pastoral team?
                  </label>
                  <textarea
                    rows={3}
                    value={prayerRequest}
                    onChange={(e) => setPrayerRequest(e.target.value)}
                    placeholder="We believe in prayer and would love to stand in faith with you..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting || (step === 2 && !fullName)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#0B1A3A] hover:bg-[#152B5A] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
              >
                <span>{step === 3 ? (isSubmitting ? 'Connecting...' : 'Complete & Connect') : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* CONFIRMATION & WHATSAPP DM FUNNEL STEP */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-5 py-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black text-[#0B1A3A]">
                You're Connected, {fullName || 'Beloved'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for connecting with The Church of Pentecost, Buoho District. Son's of God. March Forward!
              </p>
            </div>

            {/* WhatsApp Direct Connect Action */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-left space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp DM Follow-Up</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Click below to send your details directly to our church pastoral care team on WhatsApp for prompt reception and fellowship updates.
              </p>
              <button
                onClick={handleWhatsAppShare}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect via WhatsApp DM Now</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              Done & Return to Homepage
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
