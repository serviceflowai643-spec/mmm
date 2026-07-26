import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, TEAM, BUSINESS_INFO } from '../data/shopData';
import { Calendar as CalendarIcon, Clock, User, CheckCircle, ArrowRight, ArrowLeft, ExternalLink, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingSectionProps {
  initialServiceId?: string;
  initialBarberId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialServiceId,
  initialBarberId
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedBarber, setSelectedBarber] = useState<string>(initialBarberId || 'any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync initial values when props change
  useEffect(() => {
    if (initialServiceId) setSelectedService(initialServiceId);
    if (initialBarberId) setSelectedBarber(initialBarberId);
  }, [initialServiceId, initialBarberId]);

  // Generate next 7 days for date picker
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays
      if (d.getDay() !== 0) {
        dates.push({
          fullDate: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-GB', { weekday: 'short' }),
          dayNum: d.getDate(),
          monthName: d.toLocaleDateString('en-GB', { month: 'short' }),
        });
      }
    }
    return dates;
  };

  const availableDates = generateDates();

  const availableTimeSlots = [
    '09:30 AM', '10:15 AM', '11:00 AM', '11:45 AM',
    '01:00 PM', '02:00 PM', '03:15 PM', '04:00 PM', '05:00 PM', '06:15 PM'
  ];

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const currentBarberObj = TEAM.find((b) => b.id === selectedBarber);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Fire celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C9A227', '#E6C865', '#FFFFFF']
    });
  };

  return (
    <section className="relative py-24 bg-[#0d0d0d] text-[#FAFAFA] overflow-hidden" id="booking">
      
      {/* Background Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box with Gold Border Glow */}
        <div className="glass-card-gold gold-border-glow rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#C9A227]/40 text-xs text-[#C9A227] font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Appointment Booking</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
              Your Next Great Haircut <span className="text-gold-gradient">Starts Here</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#CFCFCF] font-light">
              Reserve your seat at 107 Roundhay Rd, Harehills, Leeds with our expert barbers.
            </p>

            {/* Direct Booksy Link Option */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#C9A227] hover:underline"
                id="booksy-external-link"
              >
                <span>Prefer to book directly on Booksy?</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Stepper Progress Bar (If not submitted) */}
          {!isSubmitted && (
            <div className="flex items-center justify-between max-w-xl mx-auto mb-10 border-b border-white/10 pb-6">
              {[
                { num: 1, label: 'Service' },
                { num: 2, label: 'Barber' },
                { num: 3, label: 'Date & Time' },
                { num: 4, label: 'Details' }
              ].map((s) => (
                <button
                  key={s.num}
                  onClick={() => s.num < step && setStep(s.num)}
                  className={`flex items-center space-x-2 text-xs uppercase tracking-wider font-bold transition-all ${
                    step === s.num
                      ? 'text-[#C9A227]'
                      : step > s.num
                      ? 'text-white'
                      : 'text-white/30'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                    step === s.num
                      ? 'bg-[#C9A227] text-[#090909]'
                      : step > s.num
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/40'
                  }`}>
                    {s.num}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Form Content */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
                id="booking-confirmation-view"
              >
                <div className="w-20 h-20 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center text-[#C9A227] mx-auto shadow-[0_0_30px_rgba(201,162,39,0.4)]">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                    Appointment Reserved!
                  </h3>
                  <p className="text-sm text-[#CFCFCF]">
                    Thank you, <span className="font-semibold text-white">{clientName}</span>. Your appointment has been successfully scheduled.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#090909] border border-white/10 text-left space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#CFCFCF]">Service:</span>
                    <span className="text-[#C9A227] font-bold">{currentServiceObj.title} ({currentServiceObj.price})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#CFCFCF]">Barber:</span>
                    <span className="text-white">{currentBarberObj ? currentBarberObj.name : 'Any Master Barber'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#CFCFCF]">Date & Time:</span>
                    <span className="text-white">{selectedDate || 'Upcoming Date'} at {selectedTime || 'Selected Time'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CFCFCF]">Location:</span>
                    <span className="text-white">107 Roundhay Rd, Harehills, Leeds LS8 5AJ</span>
                  </div>
                </div>

                <p className="text-xs text-[#CFCFCF]/80 max-w-md mx-auto">
                  A confirmation email has been dispatched to <span className="text-white font-mono">{clientEmail}</span>. We look forward to welcoming you for artisan coffee and a precision cut!
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#171717] border border-white/20 text-white hover:border-[#C9A227]"
                  >
                    Book Another Service
                  </button>

                  <a
                    href={BUSINESS_INFO.booksyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C9A227] text-[#090909] shadow-lg flex items-center space-x-2"
                  >
                    <span>View on Booksy</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* STEP 1: Select Service */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-center font-cinzel text-xl font-bold text-white mb-4">
                      Step 1: Choose Your Service
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
                      {SERVICES.map((s) => (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedService === s.id
                              ? 'bg-[#C9A227]/15 border-[#C9A227] shadow-[0_0_15px_rgba(201,162,39,0.2)]'
                              : 'bg-[#090909]/60 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-sm text-white">{s.title}</h4>
                            <span className="font-cinzel text-sm font-bold text-[#C9A227]">{s.price}</span>
                          </div>
                          <p className="text-xs text-[#CFCFCF] line-clamp-2">{s.description}</p>
                          <div className="mt-2 text-[10px] text-[#C9A227] font-mono flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{s.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        onClick={() => setStep(2)}
                        className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] flex items-center space-x-2"
                      >
                        <span>Next: Select Barber</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Select Barber */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-center font-cinzel text-xl font-bold text-white mb-4">
                      Step 2: Choose Your Barber
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div
                        onClick={() => setSelectedBarber('any')}
                        className={`p-4 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-2 ${
                          selectedBarber === 'any'
                            ? 'bg-[#C9A227]/15 border-[#C9A227] shadow-lg'
                            : 'bg-[#090909]/60 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center text-[#C9A227] border border-[#C9A227]/40">
                          <User className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-sm text-white">Any Available Barber</h4>
                        <p className="text-[10px] text-[#CFCFCF]">First available master barber</p>
                      </div>

                      {TEAM.map((b) => (
                        <div
                          key={b.id}
                          onClick={() => setSelectedBarber(b.id)}
                          className={`p-4 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-2 ${
                            selectedBarber === b.id
                              ? 'bg-[#C9A227]/15 border-[#C9A227] shadow-lg'
                              : 'bg-[#090909]/60 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <img
                            src={b.image}
                            alt={b.name}
                            className="w-12 h-12 rounded-full object-cover border border-[#C9A227]/50"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-white">{b.name}</h4>
                            <p className="text-[10px] text-[#C9A227] uppercase">{b.role.split('&')[0]}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 text-white flex items-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        onClick={() => setStep(3)}
                        className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] flex items-center space-x-2"
                      >
                        <span>Next: Date & Time</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Date & Time */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-center font-cinzel text-xl font-bold text-white mb-4">
                      Step 3: Select Date & Time Slot
                    </h3>

                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#C9A227] font-bold block">Available Dates:</label>
                      <div className="flex space-x-3 overflow-x-auto pb-2">
                        {availableDates.map((d) => (
                          <button
                            key={d.fullDate}
                            onClick={() => setSelectedDate(d.fullDate)}
                            className={`p-3 rounded-xl border text-center shrink-0 w-20 transition-all ${
                              selectedDate === d.fullDate
                                ? 'bg-[#C9A227] text-[#090909] font-bold border-[#C9A227] shadow-md'
                                : 'bg-[#090909] text-white border-white/10 hover:border-white/30'
                            }`}
                          >
                            <span className="block text-[10px] uppercase">{d.dayName}</span>
                            <span className="block text-lg font-bold">{d.dayNum}</span>
                            <span className="block text-[10px] uppercase">{d.monthName}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Picker */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#C9A227] font-bold block">Available Time Slots:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {availableTimeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-2.5 px-3 rounded-lg border text-xs font-mono transition-all ${
                              selectedTime === t
                                ? 'bg-[#C9A227] text-[#090909] font-bold border-[#C9A227]'
                                : 'bg-[#090909] text-[#CFCFCF] border-white/10 hover:border-white/30'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 text-white flex items-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        onClick={() => {
                          if (!selectedDate) setSelectedDate(availableDates[0].fullDate);
                          if (!selectedTime) setSelectedTime(availableTimeSlots[0]);
                          setStep(4);
                        }}
                        className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] flex items-center space-x-2"
                      >
                        <span>Next: Enter Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Client Info Form */}
                {step === 4 && (
                  <motion.form
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h3 className="text-center font-cinzel text-xl font-bold text-white mb-4">
                      Step 4: Confirm Client Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Alexander Wright"
                          className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="e.g. 07700 900123"
                          className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="e.g. alexander@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Special Notes / Preferences</label>
                      <textarea
                        rows={2}
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        placeholder="e.g. Prefer quiet appointment, wedding haircut, or specific product style..."
                        className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 text-white flex items-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] shadow-lg flex items-center space-x-2"
                        id="confirm-booking-btn"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Confirm Appointment</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
