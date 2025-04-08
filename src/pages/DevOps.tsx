
import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Code, Terminal, ArrowRight, CheckCircle, CircuitBoard } from 'lucide-react';

const DevOps = () => {
  const devopsServices = [
    {
      icon: <Terminal className="w-12 h-12 text-cyber-blue mb-4" />,
      title: "DevOps Fundamentals",
      description: "Learn the core principles and practices of DevOps methodologies and culture."
    },
    {
      icon: <Code className="w-12 h-12 text-cyber-purple mb-4" />,
      title: "CI/CD Pipeline Setup",
      description: "Master continuous integration and deployment with hands-on training in modern tools."
    },
    {
      icon: <Server className="w-12 h-12 text-cyber-teal mb-4" />,
      title: "Infrastructure as Code",
      description: "Learn to automate infrastructure provisioning using Terraform, Ansible, and other IaC tools."
    },
    {
      icon: <CircuitBoard className="w-12 h-12 text-cyber-blue mb-4" />,
      title: "Container Orchestration",
      description: "Gain expertise in Docker, Kubernetes, and container orchestration techniques."
    }
  ];

  const benefits = [
    "Accelerate software delivery lifecycle",
    "Reduce development and deployment time",
    "Improve collaboration between development and operations teams",
    "Enhance security through DevSecOps practices",
    "Automate repetitive tasks and infrastructure management",
    "Scale resources efficiently in cloud environments"
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DevOps <span className="text-cyber-blue">Coaching</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Master the art of DevOps with our specialized coaching programs. Learn from industry experts
              how to implement efficient CI/CD pipelines, infrastructure as code, and modern deployment strategies.
            </p>
            <div className="cyber-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyber-teal">
                DevOps + Cybersecurity = DevSecOps
              </h2>
              <p className="text-gray-300">
                Our unique approach combines DevOps practices with cybersecurity principles, 
                creating a robust DevSecOps framework that ensures your software delivery 
                pipeline is both efficient and secure.
              </p>
            </div>
            <Link to="/contact" className="cyber-button">
              Enroll Now <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our DevOps <span className="text-cyber-blue">Coaching Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive training programs to help you master DevOps tools and methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devopsServices.map((service, index) => (
              <div key={index} className="cyber-card group hover:translate-y-[-5px] transition-transform duration-300">
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="cyber-card neon-border-purple">
              <h2 className="text-2xl font-bold mb-6 text-cyber-purple">
                Benefits of DevOps Coaching
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-baseline">
                    <CheckCircle className="text-cyber-purple w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cyber-card neon-border-teal">
              <h2 className="text-2xl font-bold mb-4 text-cyber-teal">
                From Zero to DevOps Hero
              </h2>
              <p className="text-gray-300 mb-6">
                Whether you're new to DevOps or looking to enhance your skills, our coaching programs
                are designed to meet you where you are and help you grow into a DevOps expert.
              </p>
              <div className="terminal-box">
                <div className="terminal-heading text-cyber-teal">Program Structure</div>
                <p className="text-cyber-teal">{">"} Hands-on workshops and exercises</p>
                <p className="text-cyber-teal">{">"} Real-world case studies and projects</p>
                <p className="text-cyber-teal">{">"} One-on-one mentoring sessions</p>
                <p className="text-cyber-teal">{">"} Certification preparation<span className="animate-pulse">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to accelerate your DevOps journey?
              </h2>
              <p className="text-gray-300">
                Contact us today to learn more about our DevOps coaching programs.
              </p>
            </div>
            <div>
              <Link to="/contact" className="cyber-button whitespace-nowrap">
                Contact Us <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;
