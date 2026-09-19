import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Server, Globe, Award, BookOpen } from 'lucide-react';

const resumeData = {
  name: "Nikhil Kenvetil",
  title: "Senior Software Engineer",
  location: "Plano, TX",
  phone: "+1 (469) 759-3814",
  email: "nikhilkenvetil@gmail.com",
  linkedin: "linkedin.com/in/nikhilkenvetil",
  github: "github.com/nikhilkenvetil",
  
  summary: "Results-driven Senior Software Engineer with over 8 years of experience in designing and implementing scalable software solutions. Proven expertise in Java, Python, AWS, and microservices architecture. Adept at leading cross-functional teams and driving technical innovation to deliver high-quality products.",
  
  skills: [
    {
      category: "Languages",
      icon: <Code size={20} />,
      items: ["Java", "Python", "JavaScript", "SQL", "Bash"]
    },
    {
      category: "Frontend",
      icon: <Globe size={20} />,
      items: ["React", "Angular", "HTML5", "CSS3", "TypeScript"]
    },
    {
      category: "Backend",
      icon: <Server size={20} />,
      items: ["Spring Boot", "Node.js", "Django", "REST APIs", "GraphQL"]
    },
    {
      category: "Databases",
      icon: <Database size={20} />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Award size={20} />,
      items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      category: "Tools & Methodologies",
      icon: <BookOpen size={20} />,
      items: ["Git", "Agile/Scrum", "CI/CD", "Microservices", "TDD"]
    }
  ],
  
  experience: [
    {
      company: "Capital One",
      role: "Senior Software Engineer",
      location: "Plano, TX",
      period: "Jan 2022 – Present",
      achievements: [
        "Led migration of monolithic application to microservices architecture, reducing deployment time by 60%",
        "Designed and implemented real-time fraud detection system processing 1M+ transactions daily",
        "Mentored team of 5 junior developers, conducting code reviews and technical workshops",
        "Optimized database queries resulting in 40% improvement in application performance"
      ]
    },
    {
      company: "AT&T",
      role: "Software Engineer II",
      location: "Dallas, TX",
      period: "Jun 2019 – Dec 2021",
      achievements: [
        "Developed customer portal using React and Spring Boot serving 2M+ users",
        "Implemented CI/CD pipeline reducing release cycle from 2 weeks to 2 days",
        "Built RESTful APIs handling 500K+ requests per day with 99.9% uptime",
        "Collaborated with product team to define technical requirements and roadmap"
      ]
    },
    {
      company: "Verizon",
      role: "Software Engineer",
      location: "Irving, TX",
      period: "Jul 2017 – May 2019",
      achievements: [
        "Created automated testing framework reducing manual testing effort by 70%",
        "Developed network monitoring dashboard using Angular and Python",
        "Integrated third-party payment gateway processing $10M+ monthly transactions",
        "Participated in on-call rotation ensuring 24/7 system availability"
      ]
    },
    {
      company: "Infosys",
      role: "Systems Engineer",
      location: "Pune, India",
      period: "Aug 2015 – Jun 2017",
      achievements: [
        "Built enterprise resource planning module for Fortune 500 client",
        "Developed data migration tools transferring 5TB+ legacy data to cloud",
        "Automated report generation saving 20 hours weekly manual work",
        "Received 'Rising Star' award for outstanding performance in first year"
      ]
    }
  ],
  
  projects: [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#"
    },
    {
      name: "Healthcare Analytics Dashboard",
      description: "HIPAA-compliant analytics platform for patient data visualization",
      tech: ["Angular", "Python", "PostgreSQL", "D3.js"],
      link: "#"
    },
    {
      name: "Smart Home IoT System",
      description: "IoT platform for home automation with mobile app integration",
      tech: ["Java", "AWS IoT", "React Native", "MQTT"],
      link: "#"
    },
    {
      name: "Financial Trading Bot",
      description: "Algorithmic trading system with ML-based prediction models",
      tech: ["Python", "TensorFlow", "Redis", "WebSocket"],
      link: "#"
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Texas at Dallas",
      location: "Richardson, TX",
      year: "2017"
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Visvesvaraya Technological University",
      location: "Belgaum, India",
      year: "2015"
    }
  ],
  
  certifications: [
    "AWS Certified Solutions Architect – Professional",
    "Certified Kubernetes Administrator (CKA)",
    "Oracle Certified Professional: Java SE 11 Developer"
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.15), 0 8px 10px -6px rgba(6, 182, 212, 0.1)",
    transition: {
      duration: 0.3
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-cyan-500/20"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {resumeData.name}
            </h1>
            <p className="text-2xl text-cyan-300 mb-8 font-light">{resumeData.title}</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.a
                href={`mailto:${resumeData.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group"
              >
                <Mail size={16} className="text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300">{resumeData.email}</span>
              </motion.a>
              
              <motion.a
                href={`tel:${resumeData.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group"
              >
                <Phone size={16} className="text-purple-400 group-hover:text-purple-300" />
                <span className="text-gray-300">{resumeData.phone}</span>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-cyan-500/30"
              >
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-gray-300">{resumeData.location}</span>
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <motion.a
                href={`https://${resumeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/60 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-900/30 transition-all duration-300 group"
              >
                <Linkedin size={20} className="text-cyan-400 group-hover:text-cyan-300" />
              </motion.a>
              
              <motion.a
                href={`https://${resumeData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/60 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/30 transition-all duration-300 group"
              >
                <Github size={20} className="text-purple-400 group-hover:text-purple-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Summary Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Professional Summary</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed pl-15 border-l-2 border-cyan-500/30 ml-6"
          >
            {resumeData.summary}
          </motion.p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Technical Skills</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resumeData.skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Work Experience</span>
          </motion.h2>
          
          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                variants={cardVariants}
                whileHover="hover"
                className="relative p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-1">
                      {job.role}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-cyan-400 font-medium">{job.period}</p>
                    <p className="text-gray-400 text-sm">{job.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0"></span>
                      <span className="leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Key Projects</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {resumeData.projects.map((project) => (
              <motion.div
                key={project.name}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-700/50 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/30 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-full text-sm text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Education</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {resumeData.education.map((edu) => (
              <motion.div
                key={edu.school}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-purple-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-lg text-cyan-300 font-medium mb-1">{edu.school}</p>
                <div className="flex justify-between text-gray-400 text-sm mt-3 pt-3 border-t border-gray-700/50">
                  <span>{edu.location}</span>
                  <span className="text-purple-400 font-medium">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {resumeData.certifications.map((cert) => (
              <motion.div
                key={cert}
                variants={cardVariants}
                whileHover="hover"
                className="p-5 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 group flex items-center gap-3"
              >
                <div className="p-2 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-lg">
                  <Award size={20} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm font-medium">
                  {cert}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-800/50 mt-20 py-8 text-center"
      >
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Framer Motion & Tailwind CSS
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
