"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">
            Contact Us
          </h1>
          <p className="text-text/70 text-lg">
            We&apos;d love to hear from you. Please reach out to us at{" "}
            <a
              href="mailto:info@aitoptech.org"
              className="text-primary hover:underline font-semibold"
            >
              info@aitoptech.org
            </a>{" "}
            or use the inquiry form below for a direct response.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-text/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text placeholder:text-text/40"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text placeholder:text-text/40"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Happy Topic"
                  className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text placeholder:text-text/40"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist you?"
                  rows={6}
                  className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-text placeholder:text-text/40"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-[1.02] uppercase tracking-wider text-sm shadow-lg hover:shadow-xl"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Inquiries */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-text/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-text mb-2">
                    General Inquiries
                  </h3>
                  <a
                    href="mailto:info@aitoptech.org"
                    className="text-primary hover:underline font-semibold text-lg"
                  >
                    info@aitoptech.org
                  </a>
                </div>
              </div>
            </div>

            {/* Headquarters */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-text/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="11"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-text mb-2">
                    Headquarters
                  </h3>
                  <p className="text-text/70 leading-relaxed">
                    123 Tech Boulevard
                    <br />
                    Innovation Island, CA 94107
                  </p>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-sm font-bold uppercase tracking-wide text-text mb-4">
                Business Information
              </h3>
              <div className="space-y-2">
                <p className="text-primary font-bold text-lg">
                  Ai Top Technologies LLC
                </p>
                <p className="text-text/60 text-sm uppercase tracking-wide">
                  Registered in Delaware, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}