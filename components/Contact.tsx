'use client'

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-200 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to start your next adventure? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                {submitMessage}
                <button
                  onClick={resetForm}
                  className="ml-auto text-green-600 hover:text-green-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                {submitMessage}
                <button
                  onClick={resetForm}
                  className="ml-auto text-red-600 hover:text-red-800 font-medium"
                >
                  Try again
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-400'
                    }`}
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-400'
                    }`}
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-400'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-400'
                  }`}
                  placeholder="Tell us about your dream vacation..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isDark
                    ? 'bg-orange-500 hover:bg-orange-600 text-white disabled:bg-gray-600 disabled:cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className={`p-8 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className={`h-6 w-6 mr-4 mt-1 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`} />
                  <div>
                    <div className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Phone
                    </div>
                    <div className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      +252 90 788 9655
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className={`h-6 w-6 mr-4 mt-1 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`} />
                  <div>
                    <div className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email
                    </div>
                    <div className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      info@dalxiistourism.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className={`h-6 w-6 mr-4 mt-1 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`} />
                  <div>
                    <div className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Address
                    </div>
                    <div className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Garowe, Puntland<br />
                      Somalia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 