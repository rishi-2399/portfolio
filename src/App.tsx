
import emailjs from "emailjs-com";
import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Linkedin, 
  Github,  
  Download, 
  Mail, 
  MapPin, 
  Send,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Cloud,
  Cog,
  Wrench,
  FolderGit2,
  ExternalLink,
} from 'lucide-react';

function App() {
  
  const [activeSection, setActiveSection] = useState('intro');
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = ['experience', 'skills', 'projects', 'contact'];

  const handleDownloadResume = () => {
    // Replace this URL with your actual resume PDF URL
    const resumeUrl = 'https://drive.google.com/file/d/1eB8m1lvs6wz3gvE2rSgkp9kiuZ-JclsP/view?usp=drive_link';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rishikesh-Kshirsagar-Resume.pdf'; // This will be the downloaded file name
    link.target = '_blank'; // Open in new tab if download doesn't start automatically
    
    // Append to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_ua42uwk', // Replace with your EmailJS service ID
        'template_e37thp8', // Replace with your EmailJS template ID
        templateParams,
        'BSDEaiUT6Eib7qJU0' // Replace with your EmailJS public key
      );

      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 hover-scale">
  <img
    src="/public/image 2.jpg" // Replace with your actual logo path
    alt="Logo"
    className="w-8 h-8 object-contain" // Adjust size as needed
  />
  <div>
    <h1 className="text-xl font-bold">Rishikesh Kshirsagar</h1>
    <p className="text-sm text-gray-400">FULL STACK ENGINEER</p>
  </div>
</div>
          
          <nav>
            <ul className="flex space-x-8">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      setActiveSection(section);
                      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`capitalize hover-scale ${
                      activeSection === section
                        ? 'text-blue-500 border-b-2 border-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Combined Intro/About Section */}
        <section id="intro" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-12 items-center">
              <div className="w-1/3">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform-gpu transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  <div className="profile-image-container mb-6">
                    <img
                      src="/public/intro_image.jpg"
                      alt="Profile"
                      className="w-full aspect-square rounded-full object-cover shadow-lg"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-center mb-1 animate-fade-in-up">
                    Rishikesh Kshirsagar
                  </h2>
                  <p className="text-gray-600 text-center mb-6 animate-fade-in-up">
                    Full Stack Engineer
                  </p>
                  
                  <div className="flex justify-center space-x-4 animate-fade-in-up">
                    <a href="https://www.linkedin.com/in/rishikesh-kshirsagar01/" className="text-gray-600 hover:text-blue-500 hover-scale">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/rishi-2399" className="text-gray-600 hover:text-blue-500 hover-scale">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-2/3 space-y-8">
                <div className="animate-fade-in-up">
                  <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Hello
                  </h1>
                  <h2 className="text-3xl text-gray-600 mb-8">
                    I am Rishikesh Kshirsagar...
                  </h2>
                  
                  <div className="prose prose-lg mb-8">
                    <p>
                    Experienced Full Stack Developer with 4+ years in <strong>Java, Python, JavaScript, and Go</strong> proficient in <strong>Spring Boot, React, AWS, and ServiceNow</strong>.
                     Optimized microservices, CI/CD pipelines, and authentication security, reducing costs and improving system efficiency. 
                     Strong background in <strong>AI/ML, Cloud Computing</strong>, and automation, with proven success in scalable software solutions.
                    </p>
                    <p>
                      Throughout my career, I've successfully managed projects ranging from web applications 
                      to mobile apps, always ensuring on-time delivery within budget while maintaining high 
                      quality standards.
                    </p>
                  </div>
                  
                  <button 
                  onClick={handleDownloadResume}
                    className="modern-button px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3
                      shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300"
                  > 
                    <Download size={20} />
                    Download Resume
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-16">
              <Briefcase className="w-10 h-10 text-blue-400" />
              <h2 className="text-4xl font-bold text-center">Experience</h2>
            </div>
            
            {/* Professional Experience */}
            <div className="mb-16 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="text-justify animated-border bg-white/5 backdrop-blur-lg rounded-xl p-8 flex gap-6">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                    <img src="/public/CTSH.png" alt="cogni_img"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">FULL STACK ENGINEER</h4>
                    <p className="text-blue-400">Cognizant • July 2021 - July 2023</p>
                    <p className="mt-2 text-gray-300">
                    ·	Developed and deployed scalable Spring Boot microservices on AWS, boosting application performance by 25% and reducing infrastructure costs by 20% through optimized resource allocation.
                    <p>·	Integrated Kafka producers and consumers, reducing message delivery time by 20% and ensuring message success rate using AWS Lambda for event-driven processing.</p>
                    <p>·	Optimized RESTful API performance by integrating Oracle/PL SQL with Spring Boot, reducing data transfer by 40%, improving front-end efficiency, and cutting API call costs by 20%.</p>
                    <p>·	Automated CI/CD pipelines with Jenkins, Kubernetes, and Docker, achieving 50% faster deployment and increasing system uptime by 20% on AWS EKS with EC2.</p>
                    <p>·	Enhanced authentication security by implementing OAuth and Spring Security, improving authentication speed by 30% and achieving a 95% success rate in secure data access.</p> 
                    <p>·	Coordinated with Machine Learning teams to integrate AI-driven features, optimizing backend services for performance and scalability in production environments</p>
                    </p>
                  </div>
                </div>
                
                <div className="text-justify animated-border bg-white/5 backdrop-blur-lg rounded-xl p-8 flex gap-6">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                    <img src="/public/CTSH.png" alt="cogni_img"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">SOFTWARE ENGINEER INTERN</h4>
                    <p className="text-blue-400">Cognizant • March 2021 - July 2021</p>
                    <p className="mt-2 text-gray-300">
                    ·	Built and optimized 30+ reusable UI components in React, enhancing modularity and maintaining consistent design across the application using React Hooks, Context API, and custom styled components.
                    <p>·	Integrated MySQL with backend services by developing 15+ optimized RESTful API endpoints to perform real-time CRUD operations, reducing data retrieval latency by 30% and ensuring robust, bidirectional data flow between the application and database.</p>
                    <p>·	Developed and executed over 100+ JUnit test cases to validate functionality across various Java-based applications, reducing post-deployment bugs by 35%. Actively participated in Agile ceremonies including sprint planning, daily and stand-ups to ensure CI/CD.</p>
                    <p>·	Integrated ServiceNow with enterprise applications, automated IT Service Management (ITSM) workflows, and assisted in developing custom scripts for process automation.</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-16 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="animated-border bg-white/5 backdrop-blur-lg rounded-xl p-8 flex gap-6">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                  <img src="/public/UTA_logomark.png" alt="uta-logo" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Master's in Computer Science</h4>
                  <p className="text-blue-400">University of Texas at Arlington • August 2023 - May 2025</p>
                  <p className="mt-2 text-gray-300">
                    Focused on advanced project management methodologies and leadership strategies.
                    Graduated with honors and led multiple successful team projects.
                  </p>
                </div>
              </div>
              <p></p>
              <div className="animated-border bg-white/5 backdrop-blur-lg rounded-xl p-8 flex gap-6">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                  <img src="/public/sppu_logo.png" alt="sppu-logo" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Bachelor's of Engineering in Computer</h4>
                  <p className="text-blue-400">Pune University • August 2017 - July 2021</p>
                  <p className="mt-2 text-gray-300">
                    Focused on advanced project management methodologies and leadership strategies.
                    Graduated with honors and led multiple successful team projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="certificate-card bg-white/5 backdrop-blur-lg rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold">ServiceNow Certified Application Developer(CAD)</h4>
                    <p className="text-blue-400">ServiceNow Inc.</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="/public/Snow_logo.png" alt="snow-logo" />
                  </div>
                </div>
                
                <div className="certificate-card bg-white/5 backdrop-blur-lg rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold">Certified ServiceNow Admin(CSA)</h4>
                    <p className="text-blue-400">ServiceNow Inc.</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <img src="/public/Snow_logo.png" alt="snow-logo" />
                  </div>
                </div>
                <div className="certificate-card bg-white/5 backdrop-blur-lg rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold">AWS Educate Introduction to Cloud 101</h4>
                    <p className="text-blue-400">Amazon Web Services(AWS)</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <img src="/public/aws-color.png" alt="aws-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`section py-20 bg-gradient-to-br from-gray-50 to-blue-50 ${visibleSections.includes('skills') ? 'visible' : ''}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <Code className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-center">Skills</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="bg-white rounded-xl p-8 shadow-lg transform-gpu transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white shadow-md p-1.5 rounded-lg">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Python</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Java</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="cpp-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">C++</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="c-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">C</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">JavaScript</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="go-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Go</p>
                  </div>
                </div>
              </div>

              {/* Web Technologies */}
              <div className="bg-white rounded-xl p-8 shadow-lg transform-gpu transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white shadow-md p-1.5 rounded-lg">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Web Technologies</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">React</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Node.js</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">TypeScript</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vue-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Vue.js</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angular-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Angular</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjs-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Next.js</p>
                  </div>
                </div>
              </div>

              {/* AWS Services */}
              <div className="bg-white rounded-xl p-8 shadow-lg transform-gpu transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white shadow-md p-1.5 rounded-lg">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">AWS Services</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="/public/aws-ec2-svgrepo-com.png" alt="aws-ec2-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">EC2</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="/public/aws-s3-svgrepo-com.png" alt="aws-s3-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">S3</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="/public/aws-lambda-svgrepo-com.png" alt="aws-lambda-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Lambda</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="/public/aws-rds-svgrepo-com.png" alt="aws-rds-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">RDS</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="/public/aws-dynamodb-svgrepo-com.png" alt="aws-dynamodb-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">DynamoDB</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="/public/aws-cloudfront-svgrepo-com.png" alt="aws-cloudfront-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">CloudFront</p>
                  </div>
                </div>
              </div>

              {/* DevOps Tools */}
              <div className="bg-white rounded-xl p-8 shadow-lg transform-gpu transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white shadow-md p-1.5 rounded-lg">
                    <Cog className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">DevOps Tools</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="docker-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Docker</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="kubernetes-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Kubernetes</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="jenkins-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Jenkins</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="ansible-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Ansible</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="terraform-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Terraform</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center w-28">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" alt="prometheus-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Prometheus</p>
                  </div>
                </div>
              </div>

              {/* Other Tools */}
              <div className="bg-white rounded-xl p-8 shadow-lg transform-gpu transition-all duration-300 hover:shadow-xl hover:scale-[1.02] col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white shadow-md p-1.5 rounded-lg">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Other Tools</h3>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Git</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="jira-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Jira</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" alt="confluence-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Confluence</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="slack-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Slack</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">VS Code</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma-logo" className="w-8 h-8"/>
                    </div>
                    <p className="text-sm text-gray-700 font-medium text-center">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`section py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 relative overflow-hidden ${visibleSections.includes('projects') ? 'visible' : ''}`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center justify-center gap-4 mb-16">
              <FolderGit2 className="w-10 h-10 text-blue-300" />
              <h2 className="text-4xl font-bold text-center text-white">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* E-Commerce Platform */}
              <div className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 border border-white/10 hover:border-blue-500/50">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <img 
                    src="/public/AI-finance-assistant.png"
                    alt="AI-finance-assitant"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-green-300 transition-colors">AI–POWERED PERSONAL FINANCE ASSISTANT</h3>
                      <ExternalLink className="text-blue-400 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => window.open("https://github.com/rishi-2399/ai-finance-assistant", "_blank")} />                  
                  </div>
                  
                  <p className="text-gray-300 mb-6 line-clamp-6">
                  Built an AI-powered personal finance assistant using Python, FastAPI, OpenAI, and SQLite, enabling intelligent expense tracking and budgeting recommendations. 
                  <p>Deployed on Render & AWS EC2, implementing CI/CD pipelines with GitHub Actions for automated builds and deployments, reducing manual updates by 70% and improving system efficiency.</p>                   </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'FastAPI', 'OpenAI', 'SQLite'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mobile Banking App */}
              <div className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 border border-white/10 hover:border-blue-500/50">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                  <img 
                    src="/public//ai-emotional.webp"
                    alt="Mobile Banking App"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-green-300 transition-colors">AI/ML CHATBOT FOR EMOTIONAL ASSISTANCE </h3>
                    <ExternalLink className="text-blue-400 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => window.open("https://github.com/rishi-2399/ai-finance-assistant", "_blank")}
/>
                  </div>
                  
                  <p className="text-gray-300 mb-6 line-clamp-6">
                  Designed an AI-powered chatbot using NLP techniques in TensorFlow, enabling empathetic responses for mental health support through LSTM and GRU models. 
                  Preprocessed text in Python with NLTK, using tokenization, lemmatization, and stop-word removal for cleaner data.                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Machine Learning', 'Tensorflow'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`section py-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed ${visibleSections.includes('contact') ? 'visible' : ''}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 transform-gpu transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                    <p className="text-gray-600 mb-8">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="space-y-4">
                      <p className="flex items-center gap-4 text-gray-600">
                        <Mail size={20} className="text-blue-500" />
                        rishikesh.k2399@gmail.com
                      </p>
                      <p className="flex items-center gap-4 text-gray-600">
                        <MapPin size={20} className="text-blue-500" />
                        Dallas, TX
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Connect</h3>
                    <div className="flex space-x-6">
                      <a href="https://www.linkedin.com/in/rishikesh-kshirsagar01/" className="text-gray-600 hover:text-blue-500 transform-gpu transition-all duration-300 hover:scale-110">
                        <Linkedin size={24}/>
                      </a>
                      <a href="https://github.com/rishi-2399" className="text-gray-600 hover:text-blue-500 transform-gpu transition-all duration-300 hover:scale-110">
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg transform-gpu transition-all duration-300 hover:bg-blue-600 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-400">
                © 2025 Rishikesh Kshirsagar. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Mail size={16} />
                  rishikesh.k2399@gmail.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/rishikesh-kshirsagar01/" className="text-gray-400 hover:text-white transform-gpu transition-all duration-300 hover:scale-110">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/rishi-2399" className="text-gray-400 hover:text-white transform-gpu transition-all duration-300 hover:scale-110">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;