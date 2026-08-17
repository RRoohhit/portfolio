"use client";
import React, { useState, useRef, useEffect } from "react";
import { SITE_URL, CONTACT } from "@/config/site";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Award, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "Full Technical SEO & Web Revamp",
  budget: "$500 - $2,000",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s\-().]{7,18}$/;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const schedule = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) {
      next.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      next.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      next.email = "Email address is required.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim() && !PHONE_PATTERN.test(formData.phone.trim())) {
      next.phone = "Please enter a valid phone / WhatsApp number.";
    }

    if (!formData.message.trim()) {
      next.message = "Please describe your project or include your website URL.";
    } else if (formData.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters.";
    }

    return next;
  };

  const buildMailtoUrl = (data: FormData): string => {
    const subject = encodeURIComponent(`Project Inquiry: ${data.projectType} — Website Project Request`);
    const body = encodeURIComponent(
      [
        "Hi Rohit,",
        "",
        "I found your portfolio and would like to discuss a project with you.",
        "",
        "--- PROJECT INQUIRY ---",
        `Name: ${data.name.trim()}`,
        `Email: ${data.email.trim()}`,
        `Phone / WhatsApp: ${data.phone.trim() || "Not provided"}`,
        `Required Service: ${data.projectType}`,
        `Budget Range: ${data.budget}`,
        "",
        "Project Details / Website URL:",
        data.message.trim(),
        "",
        "---",
        `Sent from your portfolio website (${SITE_URL.replace(/^https?:\/\//, "")})`,
      ].join("\n")
    );
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap: bots fill hidden fields. Silently accept without sending.
    if (honeypot.trim()) {
      setStatus("success");
      schedule(() => setStatus("idle"), 4000);
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    schedule(() => {
      window.location.href = buildMailtoUrl(formData);
      setStatus("success");
      setFormData(INITIAL_FORM);
      setHoneypot("");
      schedule(() => setStatus("idle"), 6000);
    }, 400);
  };

  const setField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-black border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all duration-200 input-glow ${
      hasError ? "border-red-500/70 focus:border-red-400" : "border-zinc-800 focus:border-emerald-400/80"
    }`;

  return (
    <div id="contact-us-section" className="space-y-8">
      
      {/* Top Banner */}
      <Reveal>
      <div className="card-3d-interactive p-6 sm:p-8 space-y-3 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Available for High-Growth SEO & Development Projects</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Scale Your Website Traffic & SERP Dominance
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Need a high-performing Full Stack website, Core Web Vitals optimization, or Rank #1 Search Engine Positioning? Get in touch with Rohit Gupta today.
        </p>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Column: Direct Profile Details */}
        <Reveal direction="right" className="lg:col-span-2">
        <div className="space-y-6">
          <div className="card-3d-interactive p-6 space-y-6 shadow-2xl">
            <h3 className="text-lg font-extrabold text-white">Direct Contact Info</h3>

            <div className="space-y-4 text-xs font-mono">
              <a
                href={CONTACT.phoneHref}
                className="card-3d flex items-center gap-3.5 p-3.5 group"
              >
                <div className="icon-3d w-10 h-10 rounded-xl text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">Direct Phone & WhatsApp</div>
                  <div className="text-white font-bold group-hover:text-emerald-400 transition-colors">{CONTACT.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="card-3d flex items-center gap-3.5 p-3.5 group"
              >
                <div className="icon-3d w-10 h-10 rounded-xl text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-500 uppercase">Email Address</div>
                  <div className="text-white font-bold group-hover:text-blue-400 transition-colors truncate">{CONTACT.email}</div>
                </div>
              </a>

              <div className="card-3d flex items-center gap-3.5 p-3.5">
                <div className="icon-3d w-10 h-10 rounded-xl text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">Primary Location</div>
                  <div className="text-white font-bold">{CONTACT.location}</div>
                  <div className="text-[10px] text-zinc-400">Delhi / Noida Experience</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-emerald flex items-center justify-center gap-2 w-full py-3.5 text-xs font-mono font-black shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Chat Immediately on WhatsApp</span>
            </a>
          </div>

          {/* Quick Resume Card */}
          <div className="card-3d-interactive p-6 space-y-3 shadow-2xl">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Education & Credentials</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              B.Tech Computer Science & Engineering (AKTU University, 2021–2025) • Infosys Java Certified • Cisco Computer Networks Certified.
            </p>
          </div>
        </div>
        </Reveal>

        {/* Right Column: Project Inquiry Form */}
        <Reveal direction="left" delay={0.1} className="lg:col-span-3">
        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit} 
            noValidate 
            className="relative p-6 sm:p-8 card-3d-interactive space-y-4 shadow-2xl overflow-hidden"
          >
            <h3 className="text-lg font-extrabold text-white">Send a Direct Message / Audit Request</h3>

            {status === "sending" && (
              <div className="p-4 rounded-2xl bg-zinc-800 border border-zinc-600 text-zinc-300 text-xs font-mono flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-emerald-400 animate-spin shrink-0" />
                <span>Preparing your email client with the message pre-filled...</span>
              </div>
            )}

            {status === "success" && (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <span>Thank you! Your email draft is ready — just press Send in your email app. Rohit will respond within 2 hours.</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-2xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                <span>Please fix the highlighted fields below and try again.</span>
              </div>
            )}

            {/* Honeypot: hidden from humans via CSS clip and opacity, safe positioning */}
            <div className="opacity-0 pointer-events-none absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
              <label htmlFor="contact-website-field">Leave this field empty</label>
              <input
                id="contact-website-field"
                name="websiteField"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 font-bold mb-1.5">Your Full Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={inputClass(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-[10px] font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 font-bold mb-1.5">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="name@company.com"
                  className={inputClass(errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 text-[10px] font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-mono text-zinc-300 font-bold mb-1.5">Phone / WhatsApp Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="+91 9876543210"
                  className={inputClass(errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1 text-[10px] font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-project-type" className="block text-xs font-mono text-zinc-300 font-bold mb-1.5">Required Service</label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={(e) => setField("projectType", e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400/80 transition-colors"
                >
                  <option>Full Technical SEO & Web Revamp</option>
                  <option>Rank #1 Keyword Search Optimization</option>
                  <option>Next.js / React Web Application Development</option>
                  <option>Core Web Vitals & Speed Optimization</option>
                  <option>Google Ads & Conversion Campaign</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-budget" className="block text-xs font-mono text-zinc-300 font-bold mb-1.5">Estimated Budget</label>
                <select
                  id="contact-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setField("budget", e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400/80 transition-colors"
                >
                  <option>Under $500</option>
                  <option>$500 - $2,000</option>
                  <option>$2,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <div className="flex items-end pb-0.5">
                <p className="text-[10px] font-mono text-zinc-500 leading-relaxed">
                  No payment needed now. This form opens a pre-filled email — review and hit send.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 font-bold">Project Details & Website URL *</label>
                <span className="text-[10px] font-mono text-zinc-500">{formData.message.length} chars</span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder="Share your current website URL, organic goals, or web development scope..."
                className={inputClass(errors.message)}
              />
              {errors.message && (
                <p className="mt-1 text-[10px] font-mono text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-3d-emerald w-full py-3.5 text-xs font-mono font-black disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </>
              )}
            </button>
          </form>
        </div>
        </Reveal>

      </div>

    </div>
  );
};
