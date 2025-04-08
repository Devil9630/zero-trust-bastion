
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'Select a service',
    company: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'Select a service',
        company: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-cyber-blue" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6 text-cyber-purple" />,
      title: "Email",
      details: "contact@cybershield.com",
      action: "mailto:contact@cybershield.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-cyber-teal" />,
      title: "Office Location",
      details: "123 Cyber Street, Security Building, Tech City, 12345",
      action: "https://maps.google.com"
    }
  ];

  const consultationBenefits = [
    "Personalized security assessment",
    "Expert recommendations",
    "Risk mitigation strategies",
    "Training and awareness recommendations",
    "No obligation next steps"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="neon-text">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our cybersecurity experts to discuss your security needs, 
              training requirements, or to schedule a consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <div className="cyber-card mb-8">
                <h2 className="text-2xl font-bold mb-6 neon-text">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                        <a 
                          href={item.action} 
                          className="text-gray-300 hover:text-cyber-blue transition-colors"
                          target={item.title === "Office Location" ? "_blank" : undefined}
                          rel={item.title === "Office Location" ? "noopener noreferrer" : undefined}
                        >
                          {item.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cyber-card neon-border-purple">
                <h2 className="text-2xl font-bold mb-6 neon-text-purple">Free Consultation</h2>
                <p className="text-gray-300 mb-4">
                  Schedule a free 30-minute consultation with our cybersecurity experts.
                </p>
                <ul className="space-y-2 mb-6">
                  {consultationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyber-purple mr-2 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="cyber-button-purple w-full flex justify-center items-center"
                  onClick={() => toast.info("Consultation request processing", {
                    description: "Please complete the contact form with your details."
                  })}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Now
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="cyber-card neon-border h-full">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-6 h-6 mr-3 text-cyber-blue" />
                  <h2 className="text-2xl font-bold neon-text">Send Us a Message</h2>
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-cyber-blue/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-cyber-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="cyber-button"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-300 mb-2">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                      >
                        <option value="Select a service" disabled>Select a service</option>
                        <option value="Penetration Testing">Penetration Testing</option>
                        <option value="Corporate Training">Corporate Training</option>
                        <option value="Compliance Consultancy">Compliance Consultancy</option>
                        <option value="SOC Setup">SOC Setup</option>
                        <option value="Dark Web Monitoring">Dark Web Monitoring</option>
                        <option value="Other">Other Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-cyber-dark/60 border border-cyber-blue/30 rounded-md px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50 resize-none"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="cyber-button w-full flex justify-center items-center"
                      >
                        {loading ? (
                          <>Processing<span className="animate-pulse">...</span></>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="neon-text">Questions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-3">How long does a typical security assessment take?</h3>
              <p className="text-gray-300">
                The duration varies based on the scope and complexity of your infrastructure. 
                Most assessments take 2-4 weeks, including planning, testing, and reporting phases.
              </p>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-3">Do you offer remote training options?</h3>
              <p className="text-gray-300">
                Yes, we offer flexible training delivery including fully remote, on-site, and hybrid options 
                to accommodate your team's needs and preferences.
              </p>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-3">What certifications do your trainers hold?</h3>
              <p className="text-gray-300">
                Our instructors hold various industry certifications including CISSP, CEH, OSCP, CISM, 
                and other specialized credentials relevant to their teaching domains.
              </p>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-3">Can you help with regulatory compliance?</h3>
              <p className="text-gray-300">
                Absolutely. We provide comprehensive compliance consultancy for various frameworks 
                including ISO 27001, GDPR, HIPAA, PCI DSS, and other industry-specific regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border-teal flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Explore our cybersecurity services
              </h2>
              <p className="text-gray-300">
                Learn more about how we can help protect your organization from cyber threats.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/services" className="cyber-button-teal">
                View Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
