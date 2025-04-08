
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
  Globe,
  Terminal,
  CircuitBoard
} from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';

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
      icon: <Terminal className="w-12 h-12 text-cyber-teal mb-4" />,
      title: "DevOps Coaching",
      description: "Learn DevOps practices, CI/CD pipelines, and infrastructure as code from industry experts."
    },
    {
      icon: <Eye className="w-12 h-12 text-cyber-blue mb-4" />,
      title: "Dark Web Monitoring",
      description: "Stay ahead of threats with continuous surveillance of the dark web for your credentials."
    },
    {
      icon: <Database className="w-12 h-12 text-cyber-purple mb-4" />,
      title: "SOC Setup",
      description: "Establish a state-of-the-art Security Operations Center tailored to your needs."
    },
    {
      icon: <CircuitBoard className="w-12 h-12 text-cyber-teal mb-4" />,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with our specialized security solutions and configurations."
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
      quote: "Zero Trust Bastion transformed our security posture. Their team's expertise and dedication is unmatched in the industry.",
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
        {/* 3D Background */}
        <HeroCanvas />
        
        {/* Background pattern with cybersecurity-themed overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundBlendMode: 'overlay',
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a8ff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239b30ff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
            `
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
                <span className="text-cyber-blue">Digital World</span>
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
                    {">"} Threat monitoring active<span className="animate-pulse">_</span>
                  </p>
                  <p className="text-cyber-blue">
                    {">"} Protection level: Maximum
                  </p>
                  <p className="text-cyber-purple">
                    {">"} Zero Trust: Engaged
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="cyber-card overflow-hidden h-full flex items-center justify-center p-0 neon-border">
                <div className="absolute inset-0 z-0 bg-cyber-gradient opacity-40"></div>
                <div className="relative z-10 p-8">
                  <Server className="w-32 h-32 mx-auto text-cyber-blue mb-6" />
                  <h2 className="text-2xl font-bold text-center mb-2 text-cyber-blue">
                    Advanced Protection
                  </h2>
                  <p className="text-center text-gray-300">
                    Enterprise-grade security solutions for modern threats
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 cyber-card neon-border-purple flex items-center justify-center">
                <Lock className="w-10 h-10 text-cyber-purple" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 cyber-card neon-border-teal flex items-center justify-center">
                <Code className="w-10 h-10 text-cyber-teal" />
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
                <h3 className={`text-3xl font-bold mb-2 ${stat.color}`}>
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
              Our <span className="text-cyber-blue">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions and DevOps coaching 
              tailored to protect your business from ever-evolving digital threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card group hover:translate-y-[-5px] transition-transform duration-300">
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
                  Built by <span className="text-cyber-purple">Experts</span>. 
                  Trusted by <span className="text-cyber-purple">Enterprises</span>.
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded by Mehul Dubey and Chandresh Kumar Karn, Zero Trust Bastion combines decades of 
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
              <h2 className="text-2xl font-bold mb-4 text-cyber-teal">
                Empowering Minds, Securing Futures
              </h2>
              <p className="text-gray-300 mb-6">
                Our mission is to create a safer digital world through excellence in cybersecurity
                education and services. We believe in empowering organizations and individuals with
                the knowledge and tools to protect themselves in an increasingly complex threat landscape.
              </p>
              <div className="terminal-box">
                <div className="terminal-heading text-cyber-teal">Mission Status</div>
                <p className="text-cyber-teal">{">"} Training the next generation of security experts</p>
                <p className="text-cyber-teal">{">"} Protecting critical infrastructure</p>
                <p className="text-cyber-teal">{">"} Advancing cybersecurity practices<span className="animate-pulse">_</span></p>
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
              Client <span className="text-cyber-blue">Testimonials</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See what our clients have to say about our cybersecurity services and training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hover:translate-y-[-5px] transition-transform duration-300">
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
