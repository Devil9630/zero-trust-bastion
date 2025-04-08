
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  Layers,
  Shield,
  Code,
  Database,
  Server,
  AlertTriangle
} from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courseCategories = [
    { id: 'all', label: 'All Courses' },
    { id: 'corporate', label: 'Corporate Training' },
    { id: 'certification', label: 'Certification Courses' },
    { id: 'specialized', label: 'Specialized Workshops' }
  ];

  const courses = [
    {
      id: 1,
      title: "Certified Ethical Hacking",
      category: "certification",
      level: "Advanced",
      duration: "40 hours",
      icon: <Shield className="w-12 h-12 text-cyber-blue" />,
      description: "Master the art of ethical hacking with hands-on experience in penetration testing methodologies and tools. Learn to think like a hacker to better defend your systems.",
      topics: [
        "Network scanning techniques",
        "System hacking methodologies",
        "Web application attacks",
        "Malware threats and countermeasures",
        "Cloud computing security"
      ],
      upcoming: "May 15, 2025"
    },
    {
      id: 2,
      title: "Corporate Cybersecurity Awareness",
      category: "corporate",
      level: "Beginner",
      duration: "16 hours",
      icon: <Users className="w-12 h-12 text-cyber-purple" />,
      description: "Build a security-conscious workforce with this comprehensive training program designed to educate employees about common cyber threats and best practices.",
      topics: [
        "Social engineering awareness",
        "Password and authentication security",
        "Email and phishing threats",
        "Safe browsing habits",
        "Data protection guidelines"
      ],
      upcoming: "April 20, 2025"
    },
    {
      id: 3,
      title: "Secure Coding Practices",
      category: "specialized",
      level: "Intermediate",
      duration: "24 hours",
      icon: <Code className="w-12 h-12 text-cyber-teal" />,
      description: "Learn to develop secure applications by understanding common vulnerabilities and implementing proper coding practices to prevent security breaches.",
      topics: [
        "OWASP Top 10 vulnerabilities",
        "Input validation techniques",
        "Authentication and authorization",
        "Secure API development",
        "Code review for security"
      ],
      upcoming: "June 5, 2025"
    },
    {
      id: 4,
      title: "Incident Response Masterclass",
      category: "corporate",
      level: "Advanced",
      duration: "32 hours",
      icon: <AlertTriangle className="w-12 h-12 text-cyber-blue" />,
      description: "Develop a comprehensive understanding of incident response procedures to effectively detect, contain, and remediate cybersecurity incidents.",
      topics: [
        "Incident detection and analysis",
        "Containment strategies",
        "Evidence collection and handling",
        "Remediation techniques",
        "Post-incident activities"
      ],
      upcoming: "May 25, 2025"
    },
    {
      id: 5,
      title: "Cloud Security Fundamentals",
      category: "certification",
      level: "Intermediate",
      duration: "24 hours",
      icon: <Database className="w-12 h-12 text-cyber-purple" />,
      description: "Gain essential knowledge and skills to secure cloud environments. Learn about shared responsibility models and cloud-specific security controls.",
      topics: [
        "Cloud security architecture",
        "Identity and access management",
        "Data security in the cloud",
        "Network security for cloud services",
        "Compliance in cloud environments"
      ],
      upcoming: "April 30, 2025"
    },
    {
      id: 6,
      title: "Advanced Security Operations",
      category: "specialized",
      level: "Expert",
      duration: "40 hours",
      icon: <Server className="w-12 h-12 text-cyber-teal" />,
      description: "Master the tools and techniques for operating a Security Operations Center (SOC). Learn threat hunting, security monitoring, and incident handling.",
      topics: [
        "SIEM configuration and management",
        "Threat intelligence integration",
        "Advanced log analysis",
        "Proactive threat hunting",
        "Security automation with SOAR"
      ],
      upcoming: "June 15, 2025"
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  const courseRegistration = {
    steps: [
      {
        title: "Choose Your Course",
        description: "Browse our catalog and select the course that best fits your needs and skill level."
      },
      {
        title: "Contact Our Team",
        description: "Reach out through our contact form or call us to discuss details and confirm availability."
      },
      {
        title: "Receive Course Details",
        description: "We'll send you comprehensive information including schedule, prerequisites, and preparation materials."
      },
      {
        title: "Complete Registration",
        description: "Finalize your registration by completing required forms and payment process."
      }
    ]
  };

  const getColorClass = (level) => {
    switch(level) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':
        return 'bg-orange-500/20 text-orange-400';
      case 'Expert':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-cyber-blue/20 text-cyber-blue';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity <span className="neon-text">Courses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert-led training programs designed to enhance your cybersecurity skills 
              and knowledge for today's digital challenges
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="cyber-button">
                Request Information <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <a href="#courses" className="cyber-button-purple">
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="neon-text">Training Programs</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Comprehensive courses taught by industry experts with real-world cybersecurity experience
            </p>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeTab === category.id
                      ? 'cyber-button'
                      : 'bg-cyber-dark/80 text-gray-300 hover:bg-cyber-dark/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="cyber-card h-full flex flex-col">
                <div className="flex justify-center mb-4">{course.icon}</div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getColorClass(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-300 mb-6">{course.description}</p>
                
                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Key Topics</h4>
                    <ul className="space-y-1">
                      {course.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-cyber-blue/20">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-1 text-cyber-blue" />
                      Next: {course.upcoming}
                    </div>
                    <Link 
                      to="/contact" 
                      className="text-cyber-blue hover:underline text-sm flex items-center"
                    >
                      Inquire <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="neon-text">Training</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Our cybersecurity courses are designed and delivered by industry professionals 
                with extensive real-world experience. We focus on practical, hands-on learning 
                that prepares you for real security challenges.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-cyber-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                    <p className="text-gray-300">
                      Learn from security professionals with years of hands-on experience in the field.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-purple/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-cyber-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Practical Approach</h3>
                    <p className="text-gray-300">
                      Focus on real-world scenarios and hands-on exercises rather than just theory.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-teal/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-cyber-teal" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                    <p className="text-gray-300">
                      Courses aligned with industry certifications and current best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyber-card neon-border-purple">
              <h3 className="text-2xl font-bold mb-6 neon-text-purple">Course Registration Process</h3>
              
              <div className="space-y-6">
                {courseRegistration.steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="cyber-button-purple w-full flex justify-center">
                  Start Registration Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Training <span className="neon-text">Approach</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A blend of theory, practical exercises, and real-world scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <BookOpen className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Learn</h3>
              <p className="text-gray-300">
                Gain essential knowledge through expert instruction and comprehensive materials.
                Our curriculum covers both fundamental concepts and advanced techniques.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <Code className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Practice</h3>
              <p className="text-gray-300">
                Apply your knowledge through hands-on labs, simulations, and exercises.
                Build practical skills in a safe, controlled environment.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <Shield className="w-12 h-12 text-cyber-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Master</h3>
              <p className="text-gray-300">
                Solidify your expertise through real-world scenarios and challenge exercises.
                Develop the confidence to apply your skills in professional settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Training */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border-teal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need Custom <span className="neon-text-teal">Training?</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  We offer tailored training programs designed specifically for your organization's 
                  unique needs and challenges. Our custom courses can be delivered on-site, 
                  remotely, or in a hybrid format.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyber-teal mr-2 mt-0.5" />
                    <span className="text-gray-300">Customized curriculum based on your industry and requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyber-teal mr-2 mt-0.5" />
                    <span className="text-gray-300">Flexible scheduling to accommodate your team's availability</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyber-teal mr-2 mt-0.5" />
                    <span className="text-gray-300">Hands-on exercises with your actual systems and infrastructure</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <Users className="w-20 h-20 text-cyber-teal mx-auto animate-pulse-glow" />
                </div>
                <Link to="/contact" className="cyber-button-teal inline-block">
                  Inquire About Custom Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="cyber-card neon-border flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to enhance your cybersecurity skills?
              </h2>
              <p className="text-gray-300">
                Contact us today to learn more about our course offerings and upcoming sessions.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="cyber-button">
                Contact Us
              </Link>
              <a href="#courses" className="cyber-button-purple">
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
