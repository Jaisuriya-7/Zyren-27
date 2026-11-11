import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, CheckCircle, CreditCard, Lock, AlertTriangle, Info, Save, ChevronDown, Check } from 'lucide-react';
import { allEvents } from '../data/eventsData';
import { validateRegistrationForm, saveDraftRegistration, loadDraftRegistration } from '../services/registrationService';
import { RAZORPAY_CONFIG, isRazorpayConfigured } from '../services/razorpayService';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function RegistrationModal({ initialEvent, onClose }) {
  const [selectedEventId, setSelectedEventId] = useState(initialEvent ? initialEvent.id : allEvents[0].id);
  const selectedEvent = allEvents.find((e) => e.id === selectedEventId) || allEvents[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    teamName: '',
    teamMembers: ['']
  });

  const [errors, setErrors] = useState({});
  const [draftSaved, setDraftSaved] = useState(false);

  // Load existing draft if present
  useEffect(() => {
    const draft = loadDraftRegistration();
    if (draft) {
      setFormData((prev) => ({
        ...prev,
        ...draft
      }));
    }
  }, []);

  // Update selected event if initialEvent changes
  useEffect(() => {
    if (initialEvent) {
      setSelectedEventId(initialEvent.id);
    }
  }, [initialEvent]);

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playTelemetryBeep();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setDraftSaved(false);
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleMemberChange = (index, value) => {
    const nextMembers = [...formData.teamMembers];
    nextMembers[index] = value;
    setFormData((prev) => ({ ...prev, teamMembers: nextMembers }));
    setDraftSaved(false);
  };

  const addMemberField = () => {
    if (formData.teamMembers.length < (selectedEvent.maxTeamSize - 1)) {
      setFormData((prev) => ({
        ...prev,
        teamMembers: [...prev.teamMembers, '']
      }));
    }
  };

  const removeMemberField = (index) => {
    if (formData.teamMembers.length > 1) {
      const nextMembers = formData.teamMembers.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, teamMembers: nextMembers }));
    }
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    playTelemetryBeep();
    const validation = validateRegistrationForm(formData, selectedEvent);
    setErrors(validation.errors);
    
    // Always save draft locally
    saveDraftRegistration({ ...formData, selectedEventId });
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 4000);
  };

  const razorpayReady = isRazorpayConfigured();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D0D0D] border-2 border-[#242424] shadow-[0_20px_60px_rgba(0,0,0,0.95)] chamfer-corner my-auto overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Racing Red Stripe */}
        <div className="h-1.5 w-full bg-[#E10600]"></div>

        {/* Modal Header */}
        <div className="bg-[#141414] px-6 py-4 border-b border-[#222] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#E10600]"></span>
            <div>
              <h3 className="font-racing text-2xl sm:text-3xl text-white uppercase tracking-wider leading-none">
                EVENT REGISTRATION PADDOCK
              </h3>
              <p className="font-tech text-[10px] text-[#D4AF37] uppercase tracking-widest mt-0.5">
                ZYREN'27 OFFICIAL ENTRY FORM
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playTelemetryBeep();
              onClose();
            }}
            className="p-1.5 text-gray-400 hover:text-white bg-[#1E1E1E] hover:bg-[#E10600] border border-[#333] transition-colors chamfer-corner-sm"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form Container */}
        <form onSubmit={handleSaveDraft} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Selected Event Card Summary & Selector */}
          <div className="p-4 bg-[#141414] border border-[#222] chamfer-corner-sm">
            <label className="block text-[10px] font-tech text-gray-400 uppercase tracking-widest mb-1.5">
              CHOSEN EVENT CATEGORY
            </label>
            <div className="relative">
              <select
                value={selectedEventId}
                onChange={(e) => {
                  setSelectedEventId(e.target.value);
                  setErrors({});
                }}
                className="w-full bg-[#0D0D0D] border border-[#333] hover:border-[#D4AF37] focus:border-[#E10600] text-white font-display text-sm font-semibold tracking-wider px-3.5 py-2.5 outline-none appearance-none cursor-pointer"
              >
                <optgroup label="DAY 01 — TECHNICAL GRAND PRIX">
                  {allEvents.filter(e => e.day === 'DAY 01').map(e => (
                    <option key={e.id} value={e.id}>
                      {e.name} ({e.code}) — {e.feeDisplay}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="DAY 02 — CULTURAL GRAND PRIX">
                  {allEvents.filter(e => e.day === 'DAY 02').map(e => (
                    <option key={e.id} value={e.id}>
                      {e.name} ({e.code}) — {e.feeDisplay}
                    </option>
                  ))}
                </optgroup>
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            {/* Quick Event Summary Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-[#202020] text-xs">
              <div>
                <span className="text-[10px] font-tech text-gray-500 block">DAY</span>
                <span className="font-display font-bold text-white">{selectedEvent.day}</span>
              </div>
              <div>
                <span className="text-[10px] font-tech text-gray-500 block">VENUE</span>
                <span className="font-display font-bold text-white truncate block">{selectedEvent.venue}</span>
              </div>
              <div>
                <span className="text-[10px] font-tech text-gray-500 block">TEAM SIZE</span>
                <span className="font-display font-bold text-white">{selectedEvent.teamSize}</span>
              </div>
              <div>
                <span className="text-[10px] font-tech text-gray-500 block">ENTRY FEE</span>
                <span className="font-tech text-sm font-bold text-[#D4AF37]">{selectedEvent.feeDisplay}</span>
              </div>
            </div>
          </div>

          {/* Participant Details */}
          <div className="space-y-4">
            <h4 className="font-tech text-xs text-[#E10600] uppercase tracking-[0.25em] font-bold border-b border-[#222] pb-1">
              PRIMARY PARTICIPANT INFORMATION
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-tech text-gray-400 uppercase tracking-wider mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="e.g. Lewis Hamilton"
                  className={`w-full bg-[#121212] border ${
                    errors.fullName ? 'border-[#E10600]' : 'border-[#262626]'
                  } focus:border-[#E10600] px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-[#E10600] mt-1 font-tech">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-tech text-gray-400 uppercase tracking-wider mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="e.g. driver@zyren27.com"
                  className={`w-full bg-[#121212] border ${
                    errors.email ? 'border-[#E10600]' : 'border-[#262626]'
                  } focus:border-[#E10600] px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="text-[11px] text-[#E10600] mt-1 font-tech">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] font-tech text-gray-400 uppercase tracking-wider mb-1">
                  MOBILE NUMBER (10 DIGITS) *
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="9876543210"
                  className={`w-full bg-[#121212] border ${
                    errors.phone ? 'border-[#E10600]' : 'border-[#262626]'
                  } focus:border-[#E10600] px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-[#E10600] mt-1 font-tech">{errors.phone}</p>
                )}
              </div>

              {/* College */}
              <div>
                <label className="block text-[11px] font-tech text-gray-400 uppercase tracking-wider mb-1">
                  COLLEGE / INSTITUTION NAME *
                </label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => handleChange('college', e.target.value)}
                  placeholder="e.g. Institute of Technology"
                  className={`w-full bg-[#121212] border ${
                    errors.college ? 'border-[#E10600]' : 'border-[#262626]'
                  } focus:border-[#E10600] px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors`}
                />
                {errors.college && (
                  <p className="text-[11px] text-[#E10600] mt-1 font-tech">{errors.college}</p>
                )}
              </div>
            </div>
          </div>

          {/* Conditional Team Details if event is a team event */}
          {selectedEvent.minTeamSize > 1 && (
            <div className="space-y-4 pt-2">
              <h4 className="font-tech text-xs text-[#D4AF37] uppercase tracking-[0.25em] font-bold border-b border-[#222] pb-1">
                TEAM / CREW INFORMATION (REQUIRED FOR {selectedEvent.name})
              </h4>

              <div>
                <label className="block text-[11px] font-tech text-gray-400 uppercase tracking-wider mb-1">
                  TEAM / ROSTER NAME *
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => handleChange('teamName', e.target.value)}
                  placeholder="e.g. Scuderia Apex"
                  className={`w-full bg-[#121212] border ${
                    errors.teamName ? 'border-[#E10600]' : 'border-[#262626]'
                  } focus:border-[#E10600] px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none`}
                />
                {errors.teamName && (
                  <p className="text-[11px] text-[#E10600] mt-1 font-tech">{errors.teamName}</p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-tech text-gray-400 uppercase tracking-wider mb-1">
                  ADDITIONAL TEAM MEMBERS (MIN: {selectedEvent.minTeamSize - 1}, MAX: {selectedEvent.maxTeamSize - 1})
                </label>
                <div className="space-y-2">
                  {formData.teamMembers.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={member}
                        onChange={(e) => handleMemberChange(idx, e.target.value)}
                        placeholder={`Teammate #${idx + 2} Full Name`}
                        className="flex-1 bg-[#121212] border border-[#262626] focus:border-[#D4AF37] px-3.5 py-2 text-sm text-white placeholder-gray-600 outline-none"
                      />
                      {formData.teamMembers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMemberField(idx)}
                          className="px-2.5 py-2 bg-[#222] hover:bg-[#E10600] text-gray-400 hover:text-white text-xs font-tech transition-colors"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {formData.teamMembers.length < (selectedEvent.maxTeamSize - 1) && (
                  <button
                    type="button"
                    onClick={addMemberField}
                    className="mt-2 text-xs font-tech text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                  >
                    + ADD ANOTHER TEAM MEMBER
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 
            RAZORPAY BRANDED PAYMENT SECTION
            Per specification:
            - Branded as RAZORPAY.
            - Do not integrate a fake payment gateway.
            - Do not use dummy payment-success screens.
            - Do not pretend a payment has happened.
            - Clean placeholder: 'Secure payment integration coming soon.'
            - Final payment action remains disabled / clearly marked as unavailable.
          */}
          <div className="p-5 bg-[#08121E]/60 border-2 border-[#0C3259] chamfer-corner-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#0C3259]/80 pb-3">
              <div className="flex items-center gap-3">
                {/* Razorpay Brand Style Badge */}
                <div className="px-3 py-1 bg-[#0284C7] text-white font-tech text-xs font-extrabold tracking-widest uppercase rounded-sm flex items-center gap-1.5 shadow-sm">
                  <CreditCard size={14} />
                  <span>RAZORPAY</span>
                </div>
                <span className="text-xs font-tech text-gray-300 font-bold uppercase tracking-wider">
                  PAYMENT GATEWAY PORTAL
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-tech text-[#38BDF8]">
                <Lock size={12} />
                <span>256-BIT ENCRYPTION</span>
              </div>
            </div>

            {/* Official Placeholder Notice */}
            <div className="flex items-start gap-3 bg-[#0A1A2B]/80 p-3.5 border border-[#164E63]">
              <Info size={18} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-tech text-sm font-bold text-white uppercase tracking-wider">
                  Secure payment integration coming soon.
                </p>
                <p className="font-body text-xs text-gray-300 mt-1 leading-relaxed">
                  The official Razorpay Checkout SDK integration is currently in scheduled deployment. Live API keys and merchant checkout will be configured before registrations open publicly.
                </p>
                <p className="font-tech text-[11px] text-[#38BDF8] mt-2 font-semibold">
                  STATUS: PRE-INTEGRATION PLACEHOLDER • NO CHARGES APPLIED
                </p>
              </div>
            </div>

            {/* Fee Calculation Display */}
            <div className="flex items-center justify-between p-3 bg-[#0C1E32] border border-[#164E63]/50">
              <span className="font-tech text-xs text-gray-300 uppercase">
                TOTAL REGISTRATION FEE PAYABLE:
              </span>
              <span className="font-tech text-xl font-black text-[#F5D061]">
                ₹{selectedEvent.fee} INR
              </span>
            </div>

          </div>

          {/* Draft Notification Toast */}
          {draftSaved && (
            <div className="p-3 bg-[#112415] border border-[#22C55E] text-[#86EFAC] text-xs font-tech flex items-center gap-2">
              <Check size={16} />
              <span>
                REGISTRATION DRAFT SAVED! Your participant details have been stored locally in browser storage.
              </span>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Draft Save Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#252525] text-gray-300 border border-[#333] font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 chamfer-corner-sm"
            >
              <Save size={14} className="text-[#D4AF37]" />
              <span>SAVE FORM AS DRAFT</span>
            </button>

            {/* 
              Final Payment Button:
              Disabled and clearly marked as unavailable until payment integration is configured.
            */}
            <button
              type="button"
              disabled={true}
              title="Payment gateway integration coming soon"
              className="w-full sm:w-auto px-7 py-3 bg-[#1F1F1F] text-gray-500 border border-[#333] font-display text-xs font-bold uppercase tracking-[0.2em] cursor-not-allowed chamfer-corner-sm flex items-center justify-center gap-2 opacity-80"
            >
              <Lock size={14} />
              <span>PAYMENT COMING SOON (₹{selectedEvent.fee})</span>
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

