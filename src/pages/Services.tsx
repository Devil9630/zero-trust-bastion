
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Lock, 
  Globe, 
  Server, 
  Database, 
  Eye, 
  Code, 
  ArrowRight, 
  CheckCircle,
  Users,
  FileText,
  AlertTriangle
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Shield className="w-12 h-12 text-cyber-blue mb-4" />,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your organization's digital assets from evolving threats.",
      services: [
        { name: "Penetration Testing", icon: <Search className="w-5 h-5 text-cyber-blue mr-2" /> },
        { name: "Vulnerability Assessment", icon: <AlertTriangle className="w-5 h-5 text-cyber-blue mr-2" /> },
        { name: "Dark Web Monitoring", icon: <Eye className="w-5 h-5 text-cyber-blue mr-2" /> },
        { name: "SOC Setup & Management", icon: <Server className="w-5 h-5 text-cyber-blue mr-2" /> },
        { name: "Red & Blue Team Exercises", icon: <Shield className="w-5 h-5 text-cyber-blue mr-2" /> }
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-cyber-purple mb-4" />,
      title: "Cybersecurity Training",
      description: "Expert-led training programs for individuals and organizations to build cyber resilience.",
      services: [
        { name: "Corporate Security Training", icon: <Users className="w-5 h-5 text-cyber-purple mr-2" /> },
        { name: "Professional Certification Courses", icon: <FileText className="w-5 h-5 text-cyber-purple mr-2" /> },
        { name: "Security Awareness Programs", icon: <CheckCircle className="w-5 h-5 text-cyber-purple mr-2" /> },
        { name: "Custom Training Workshops", icon: <Code className="w-5 h-5 text-cyber-purple mr-2" /> }
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-cyber-teal mb-4" />,
      title: "Compliance & Consultancy",
      description: "Expert guidance on regulatory compliance and security best practices.",
      services: [
        { name: "ISO 27001 Compliance", icon: <CheckCircle className="w-5 h-5 text-cyber-teal mr-2" /> },
        { name: "GDPR Consultancy", icon: <Globe className="w-5 h-5 text-cyber-teal mr-2" /> },
        { name: "Security Audits", icon: <Search className="w-5 h-5 text-cyber-teal mr-2" /> },
        { name: "Risk Assessment", icon: <AlertTriangle className="w-5 h-5 text-cyber-teal mr-2" /> },
        { name: "Incident Response Planning", icon: <Shield className="w-5 h-5 text-cyber-teal mr-2" /> }
      ]
    }
  ];

  const featuredServices = [
    {
      icon: <Lock className="w-16 h-16 text-cyber-blue mb-6" />,
      title: "Penetration Testing",
      description: "Our comprehensive penetration testing services identify vulnerabilities in your systems before malicious actors can exploit them. Using industry-leading methodologies and tools, our experts simulate real-world attacks to expose weaknesses in your security infrastructure.",
      benefits: [
        "Identify critical security vulnerabilities",
        "Receive detailed remediation recommendations",
        "Meet compliance requirements",
        "Validate security controls effectiveness",
        "Reduce the risk of successful cyberattacks"
      ],
      color: "blue"
    },
    {
      icon: <Server className="w-16 h-16 text-cyber-purple mb-6" />,
      title: "SOC Setup & Management",
      description: "Establish a robust Security Operations Center with our expert guidance. We design, implement, and optionally manage a customized SOC solution that provides continuous monitoring, detection, and response capabilities tailored to your organization's specific needs.",
      benefits: [
        "24/7 security monitoring and alerting",
        "Rapid threat detection and response",
        "Security incident management",
        "Continuous security improvement",
        "Reduced security operational costs"
      ],
      color: "purple"
    },
    {
      icon: <Globe className="w-16 h-16 text-cyber-teal mb-6" />,
      title: "Compliance Consultancy",
      description: "Navigate complex regulatory requirements with our compliance consultancy services. Our experts provide guidance on achieving and maintaining compliance with relevant standards and regulations, including ISO 27001, GDPR, and industry-specific frameworks.",
      benefits: [
        "Expert guidance on regulatory requirements",
        "Gap analysis and compliance roadmaps",
        "Documentation and policy development",
        "Pre-audit preparation and support",
        "Ongoing compliance management"
      ],
      color: "teal"
    }
  ];

  const approach = [
    {
      title: "Assessment",
      description: "We begin by thoroughly understanding your organization's unique security challenges, infrastructure, and objectives."
    },
    {
      title: "Strategy Development",
      description: "Our experts create a customized security strategy aligned with your business goals and compliance requirements."
    },
    {
      title: "Implementation",
      description: "We deploy appropriate security controls, solutions, and training to bolster your security posture."
    },
    {
      title: "Ongoing Support",
      description: "Our relationship continues with monitoring, periodic reassessment, and adaptation to evolving threats."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="neon-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive cybersecurity solutions designed to protect your 
              organization in an evolving threat landscape
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="cyber-button">
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <Link to="/courses" className="cyber-button-purple">
                View Training Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="neon-text">Expertise</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our range of cybersecurity services designed to safeguard your digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="cyber-card h-full flex flex-col">
                <div className="flex justify-center">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{category.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{category.description}</p>
                <div className="mt-auto">
                  <ul className="space-y-3">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-center">
                        {service.icon}
                        <span>{service.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="neon-text">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our most sought-after cybersecurity solutions
            </p>
          </div>
          
          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <div 
                key={index} 
                className={`cyber-card ${
                  service.color === 'blue' 
                    ? 'neon-border' 
                    : service.color === 'purple' 
                      ? 'neon-border-purple' 
                      : 'neon-border-teal'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    {service.icon}
                    <h3 className={`text-2xl font-bold mb-4 ${
                      service.color === 'blue' 
                        ? 'neon-text' 
                        : service.color === 'purple' 
                          ? 'neon-text-purple' 
                          : 'neon-text-teal'
                    }`}>
                      {service.title}
                    </h3>
                    <Link 
                      to="/contact" 
                      className={`mt-4 ${
                        service.color === 'blue' 
                          ? 'cyber-button' 
                          : service.color === 'purple' 
                            ? 'cyber-button-purple' 
                            : 'cyber-button-teal'
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <h4 className="text-lg font-medium mb-3">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle 
                            className={`w-5 h-5 mr-2 mt-0.5 ${
                              service.color === 'blue' 
                                ? 'text-cyber-blue' 
                                : service.color === 'purple' 
                                  ? 'text-cyber-purple' 
                                  : 'text-cyber-teal'
                            }`} 
                          />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="neon-text">Approach</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proven methodology for delivering effective cybersecurity solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="cyber-card">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-cyber-blue rounded-full mb-4">
                  <span className="text-xl font-bold neon-text">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to strengthen your security posture?
              </h2>
              <p className="text-gray-300">
                Contact our team to discuss your cybersecurity needs and how we can help.
              </p>
            </div>
            <div>
              <Link to="/contact" className="cyber-button">
                Contact Us <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
