
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Server, 
  Code, 
  Users, 
  Lock, 
  Database, 
  Eye, 
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react';

const Index = () => {
  const [animateStats, setAnimateStats] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Shield className="w-12 h-12 text-cyber-blue mb-4" />,
      title: "Penetration Testing",
      description: "Identify vulnerabilities before hackers do with our comprehensive penetration testing services."
    },
    {
      icon: <Lock className="w-12 h-12 text-cyber-purple mb-4" />,
      title: "Cybersecurity Training",
      description: "Empower your team with cutting-edge cybersecurity skills and knowledge."
    },
    {
      icon: <Eye className="w-12 h-12 text-cyber-teal mb-4" />,
      title: "Dark Web Monitoring",
      description: "Stay ahead of threats with continuous surveillance of the dark web for your credentials."
    },
    {
      icon: <Database className="w-12 h-12 text-cyber-blue mb-4" />,
      title: "SOC Setup",
      description: "Establish a state-of-the-art Security Operations Center tailored to your needs."
    },
    {
      icon: <Code className="w-12 h-12 text-cyber-purple mb-4" />,
      title: "Red/Blue Teaming",
      description: "Simulate real-world attacks and defense scenarios to strengthen your security posture."
    },
    {
      icon: <Globe className="w-12 h-12 text-cyber-teal mb-4" />,
      title: "Compliance Consulting",
      description: "Navigate complex regulatory requirements with our expert guidance on ISO 27001, GDPR, and more."
    }
  ];

  const stats = [
    { label: "Vulnerabilities Fixed", value: "5000+", color: "text-cyber-blue" },
    { label: "Security Audits", value: "750+", color: "text-cyber-purple" },
    { label: "Professional Courses", value: "50+", color: "text-cyber-teal" },
    { label: "Satisfied Clients", value: "1200+", color: "text-cyber-blue" }
  ];

  const testimonials = [
    {
      quote: "CyberShield transformed our security posture. Their team's expertise and dedication is unmatched in the industry.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp Solutions"
    },
    {
      quote: "The training program was exceptional - practical, hands-on, and immediately applicable to our security challenges.",
      author: "Michael Chen",
      title: "Security Director, Global Finance Inc."
    },
    {
      quote: "Their penetration testing saved us from what could have been a devastating breach. Professional, thorough, and invaluable.",
      author: "Priya Patel",
      title: "CISO, HealthNet Systems"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(135deg, rgba(0, 168, 255, 0.05) 0%, rgba(155, 48, 255, 0.05) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'none\' stroke=\'rgba(0, 168, 255, 0.15)\' stroke-width=\'1\' d=\'M10,10 L90,10 M10,25 L90,25 M10,40 L90,40 M10,55 L90,55 M10,70 L90,70 M10,85 L90,85 M25,10 L25,90 M40,10 L40,90 M55,10 L55,90 M70,10 L70,90 M85,10 L85,90\'/%3E%3C/svg%3E")' 
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="glitch-wrapper">
                  <span className="glitch-text" data-text="Guardians">Guardians</span>
                </span>
                {" "}of the{" "}
                <span className="neon-text">Digital World</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Professional cybersecurity services and training led by experts. 
                Protecting businesses and empowering individuals in an ever-evolving threat landscape.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="cyber-button">
                  Get Free Consultation <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
                <Link to="/services" className="cyber-button-purple">
                  Explore Services
                </Link>
              </div>
              
              <div className="pt-4">
                <div className="terminal-box">
                  <div className="terminal-heading">
                    System Status
                  </div>
                  <p className="text-green-400">
                    {"> "}Threat monitoring active<span className="animate-pulse">_</span>
                  </p>
                  <p className="text-cyber-blue">
                    {"> "}Protection level: Maximum
                  </p>
                  <p className="text-cyber-purple">
                    {"> "}Cybershield: Engaged
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="cyber-card overflow-hidden h-full flex items-center justify-center p-0 neon-border">
                <div className="absolute inset-0 z-0 bg-cyber-gradient"></div>
                <div className="relative z-10 p-8">
                  <Server className="w-32 h-32 mx-auto text-cyber-blue animate-pulse-glow mb-6" />
                  <h2 className="text-2xl font-bold text-center mb-2 neon-text">
                    Advanced Protection
                  </h2>
                  <p className="text-center text-gray-300">
                    Enterprise-grade security solutions for modern threats
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 cyber-card neon-border-purple flex items-center justify-center">
                <Lock className="w-10 h-10 text-cyber-purple animate-pulse-glow" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 cyber-card neon-border-teal flex items-center justify-center">
                <Code className="w-10 h-10 text-cyber-teal animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card">
                <h3 className={`text-3xl font-bold mb-2 ${stat.color} animate-pulse-glow`}>
                  {animateStats ? stat.value : "0+"}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="neon-text">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your business
              from ever-evolving digital threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card group">
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="flex items-center text-cyber-blue group-hover:underline"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="cyber-card neon-border-purple h-full">
                <h2 className="text-3xl font-bold mb-4">
                  Built by <span className="neon-text-purple">Experts</span>. 
                  Trusted by <span className="neon-text-purple">Enterprises</span>.
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded by Mehul Dubey and Chandresh Kumar Karn, CyberShield combines decades of 
                  experience in cybersecurity to deliver best-in-class solutions.
                </p>
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <CheckCircle className="text-cyber-purple w-5 h-5 mr-2" />
                    <span className="text-gray-200">Industry-leading expertise</span>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <CheckCircle className="text-cyber-purple w-5 h-5 mr-2" />
                    <span className="text-gray-200">Cutting-edge methodologies</span>
                  </div>
                  <div className="flex items-baseline">
                    <CheckCircle className="text-cyber-purple w-5 h-5 mr-2" />
                    <span className="text-gray-200">Client-centered approach</span>
                  </div>
                </div>
                <Link to="/about" className="cyber-button-purple">
                  Meet Our Team
                </Link>
              </div>
            </div>
            
            <div className="cyber-card neon-border-teal">
              <h2 className="text-2xl font-bold mb-4 neon-text-teal">
                Empowering Minds, Securing Futures
              </h2>
              <p className="text-gray-300 mb-6">
                Our mission is to create a safer digital world through excellence in cybersecurity
                education and services. We believe in empowering organizations and individuals with
                the knowledge and tools to protect themselves in an increasingly complex threat landscape.
              </p>
              <div className="terminal-box">
                <div className="terminal-heading text-cyber-teal">Mission Status</div>
                <p className="text-cyber-teal">{"> "}Training the next generation of security experts</p>
                <p className="text-cyber-teal">{"> "}Protecting critical infrastructure</p>
                <p className="text-cyber-teal">{"> "}Advancing cybersecurity practices<span className="animate-pulse">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="neon-text">Testimonials</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See what our clients have to say about our cybersecurity services and training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-cyber-blue">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to secure your digital assets?
              </h2>
              <p className="text-gray-300">
                Schedule a free consultation with our cybersecurity experts today.
              </p>
            </div>
            <div>
              <Link to="/contact" className="cyber-button whitespace-nowrap">
                Get Started <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
