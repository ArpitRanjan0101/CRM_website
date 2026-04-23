"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setSuccessMessage("");
      return;
    }

    setStatus("loading");
    setErrors({});
    setSuccessMessage("");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setSuccessMessage("Thanks! Your message has been sent successfully.");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="shell py-12 sm:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <Reveal>
          <div>
            <span className="section-tag">Contact</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Start your Triocord workflow with a polished first conversation
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Share your goals, and we&apos;ll help you shape a reliable document recording process for your team.
            </p>

            <div className="section-frame mt-8 space-y-5 py-6">
              {[
                ["Fast onboarding", "Clean setup guidance for modern teams."],
                ["Responsive experience", "Carefully tuned for desktop and mobile screens."],
                ["Frontend validation", "Required fields, email checks, and success feedback included."],
              ].map(([title, copy]) => (
                <div key={title}>
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-panel p-5 sm:p-6">
            <form className="bg-white/70 p-1 sm:p-2" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="input-field"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    required
                  />
                  {errors.fullName ? (
                    <p id="fullName-error" className="mt-2 text-sm text-rose-500">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input-field"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 text-sm text-rose-500">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input-field"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    required
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="mt-2 text-sm text-rose-500">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="input-field resize-none"
                    placeholder="Tell us a bit about your document workflow."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-2 text-sm text-rose-500">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary min-w-44" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                <div aria-live="polite" className="text-sm">
                  {status === "success" ? <p className="text-emerald-600">{successMessage}</p> : null}
                  {status === "error" && Object.keys(errors).length > 0 ? (
                    <p className="text-rose-500">Please fix the highlighted fields and try again.</p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
