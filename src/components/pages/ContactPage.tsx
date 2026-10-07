import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-14 sm:py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>CONTACT US</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#0B1A3A] tracking-tight">
            We Would Love to <br />
            <span className="text-blue-600">Hear From You</span>
            <span className="text-amber-500">.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have questions about visiting, membership, counseling, prayer requests, or event venues? Reach out to our pastoral and secretariat office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
              <h3 className="text-xl font-black text-[#0B1A3A]">District Location</h3>
              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Buoho Central Auditorium</p>
                  <p className="text-xs text-slate-500">The Church of Pentecost, Buoho District, Ashanti Region, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Sunday Worship</p>
                  <p className="text-xs text-slate-500">Sunday Service: 9:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0B1A3A] text-white space-y-4">
              <h3 className="text-lg font-bold text-white">Direct Channels</h3>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+233 24 000 0000 / +233 30 000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>secretariat@buohodistrict.cop</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/233240000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 font-bold text-xs uppercase tracking-wider text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-black text-[#0B1A3A]">Send a Message</h3>
                  <p className="text-xs text-slate-500">Fill this form and our secretariat team will get back to you promptly.</p>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ama Darko"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp or Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+233 24 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Message or Inquiry *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we assist or pray with you today?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0B1A3A] hover:bg-[#152B5A] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black text-[#0B1A3A]">Message Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you {name}. Our church pastoral and secretariat team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
