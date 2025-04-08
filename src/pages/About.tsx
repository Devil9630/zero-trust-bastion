
import React from 'react';
import { 
  Shield, 
  Users, 
  Award, 
  Briefcase, 
  BookOpen,
  Check, 
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const leaders = [
    {
      name: "Mehul Dubey",
      role: "Co-Founder & Chief Security Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80",
      bio: "Mehul Dubey is a renowned cybersecurity expert with over 15 years of experience in security architecture and penetration testing. Prior to founding CyberShield, he led security teams at major tech companies and has spoken at numerous international security conferences.",
      certifications: ["CISSP", "CEH", "OSCP"]
    },
    {
      name: "Chandresh Kumar Karn",
      role: "Co-Founder & Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80",
      bio: "Chandresh Kumar Karn brings 12 years of expertise in advanced threat research and cybersecurity training. With a background in computer science and a passion for education, he has developed innovative training methodologies that bridge the gap between theory and real-world application.",
      certifications: ["CISM", "GIAC", "CompTIA Security+"]
    }
  ];

  const coreValues = [
    {
      icon: <Shield className="w-10 h-10 text-cyber-blue" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our operations and relationships."
    },
    {
      icon: <Award className="w-10 h-10 text-cyber-purple" />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in every service we provide."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-cyber-teal" />,
      title: "Education",
      description: "We believe knowledge sharing is fundamental to creating a secure digital ecosystem."
    },
    {
      icon: <Users className="w-10 h-10 text-cyber-blue" />,
      title: "Collaboration",
      description: "We work closely with clients to develop tailored security solutions."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "CyberShield Founded",
      description: "Mehul Dubey and Chandresh Kumar Karn established CyberShield with a mission to provide expert cybersecurity services."
    },
    {
      year: "2016",
      title: "Launch of Training Program",
      description: "Introduced comprehensive cybersecurity training courses for individuals and corporations."
    },
    {
      year: "2018",
      title: "Expanded Consultancy Services",
      description: "Added specialized compliance and risk assessment services to our portfolio."
    },
    {
      year: "2020",
      title: "Advanced Security Operations",
      description: "Launched our SOC setup and dark web monitoring services."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended our services to international clients and partners."
    }
  ];

  const partners = [
    { name: "Tech Innovations Inc.", logo: <Building2 className="w-12 h-12 text-cyber-blue mx-auto" /> },
    { name: "Global Security Alliance", logo: <Shield className="w-12 h-12 text-cyber-purple mx-auto" /> },
    { name: "Enterprise Solutions", logo: <Briefcase className="w-12 h-12 text-cyber-teal mx-auto" /> },
    { name: "Education Forward", logo: <BookOpen className="w-12 h-12 text-cyber-blue mx-auto" /> }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="neon-text">CyberShield</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Built by experts. Trusted by enterprises. Dedicated to creating a safer digital world.
            </p>
            <div className="cyber-card neon-border-purple">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                Empowering organizations and individuals with cutting-edge cybersecurity knowledge and solutions 
                to confidently navigate the digital landscape and protect what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership <span className="neon-text">Team</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind CyberShield's cybersecurity excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {leaders.map((leader, index) => (
              <div key={index} className="cyber-card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <div className="rounded-md overflow-hidden border-2 border-cyber-blue/30 h-64 md:h-auto">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-1 neon-text">{leader.name}</h3>
                    <p className="text-lg text-gray-300 mb-4">{leader.role}</p>
                    <p className="text-gray-300 mb-4">{leader.bio}</p>
                    <div className="mb-4">
                      <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.certifications.map((cert, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30"
                          >
                            <Check className="w-3 h-3 mr-1" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="neon-text">Values</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide our operations and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="neon-text">Journey</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The evolution of CyberShield and our commitment to excellence
            </p>
          </div>
          
          <div className="relative border-l-2 border-cyber-blue/30 ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
            {timeline.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-4 w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-blue flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse-glow"></div>
                </div>
                <div className="ml-8 md:ml-10">
                  <div className="cyber-card">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-cyber-blue/10 text-cyber-blue rounded-md mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="neon-text">Partners</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver excellence in cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                {partner.logo}
                <h3 className="mt-4 font-medium">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to work with our team of experts?
              </h2>
              <p className="text-gray-300">
                Contact us today to learn how we can help secure your organization.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="cyber-button">
                Contact Us
              </Link>
              <Link to="/services" className="cyber-button-purple">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
