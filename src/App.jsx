import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Briefcase, Award, Code, GraduationCap, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const resumeData = {
  name: "Nikhil Kenvetil",
  title: "Senior Software Engineer | Full Stack Developer | Cloud Solutions Architect",
  contact: [
    { icon: Mail, text: "nikhil.kenvetil@example.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "San Francisco, CA" },
    { icon: Linkedin, text: "linkedin.com/in/nikhilkenvetil" },
    { icon: Github, text: "github.com/nikhilkenvetil" }
  ],
  summary: "Innovative Senior Software Engineer with 8+ years of experience designing and implementing scalable full-stack solutions. Proven expertise in cloud architecture, microservices, and modern web technologies. Passionate about building high-performance applications that drive business growth and enhance user experience.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      duration: "Jan 2021 - Present | San Francisco, CA",
      points: [
        "Led development of microservices architecture serving 2M+ daily active users, improving system reliability by 40%",
        "Designed and implemented RESTful APIs using Node.js and Python, reducing response times by 35%",
        "Mentored team of 5 junior developers, conducting code reviews and establishing best practices",
        "Architected cloud-native solutions on AWS, reducing infrastructure costs by 25% while improving scalability"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Ltd.",
      duration: "Mar 2018 - Dec 2020 | Seattle, WA",
      points: [
        "Developed responsive web applications using React, TypeScript, and modern CSS frameworks",
        "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%",
        "Collaborated with cross-functional teams to deliver features for enterprise clients",
        "Optimized database queries and indexing strategies, improving application performance by 45%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub",
      duration: "Jun 2016 - Feb 2018 | Austin, TX",
      points: [
        "Built end-to-end web applications using MERN stack (MongoDB, Express, React, Node.js)",
        "Integrated third-party APIs including payment gateways, social media, and analytics tools",
        "Implemented real-time features using WebSocket and Socket.io for collaborative platforms",
        "Contributed to agile development process with bi-weekly sprints and continuous integration"
      ]
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      duration: "Aug 2015 - May 2016 | Denver, CO",
      points: [
        "Developed custom WordPress themes and plugins for diverse client requirements",
        "Created responsive layouts using HTML5, CSS3, and JavaScript frameworks",
        "Maintained and updated existing client websites, ensuring optimal performance",
        "Collaborated with design team to implement pixel-perfect UI/UX designs"
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform Modernization",
      duration: "2023",
      points: [
        "Led migration of monolithic e-commerce platform to microservices architecture",
        "Implemented event-driven architecture using Kafka for real-time inventory management",
        "Reduced page load times by 50% through optimization and CDN implementation",
        "Increased conversion rates by 20% through improved UX and performance"
      ]
    },
    {
      title: "Cloud Infrastructure Automation",
      duration: "2022",
      points: [
        "Designed Infrastructure as Code using Terraform and CloudFormation",
        "Automated deployment processes reducing manual intervention by 80%",
        "Implemented monitoring and alerting systems using Prometheus and Grafana",
        "Achieved 99.9% uptime through proactive monitoring and auto-scaling"
      ]
    },
    {
      title: "Real-time Analytics Dashboard",
      duration: "2021",
      points: [
        "Built real-time data visualization dashboard using React D3.js and WebSocket",
        "Processed streaming data from multiple sources handling 10K+ events per second",
        "Implemented role-based access control and data encryption for security",
        "Enabled business stakeholders to make data-driven decisions with live insights"
      ]
    },
    {
      title: "Mobile-First Responsive Redesign",
      duration: "2020",
      points: [
        "Spearheaded complete redesign of company website with mobile-first approach",
        "Improved mobile performance scores from 45 to 95 on Google Lighthouse",
        "Increased mobile traffic engagement by 65% through optimized UX",
        "Implemented PWA features enabling offline functionality and app-like experience"
      ]
    }
  ],
  skills: [
    {
      category: "Frontend Technologies",
      items: ["React, Vue.js, Angular", "TypeScript, JavaScript (ES6+)", "HTML5, CSS3, Sass, Tailwind", "Next.js, Nuxt.js"]
    },
    {
      category: "Backend Technologies",
      items: ["Node.js, Express, NestJS", "Python, Django, Flask", "Java, Spring Boot", "GraphQL, REST APIs"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL, MySQL, MongoDB", "Redis, Elasticsearch", "DynamoDB, Cosmos DB", "Database Design & Optimization"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, S3, Lambda, RDS)", "Azure, Google Cloud Platform", "Docker, Kubernetes", "CI/CD, Terraform, Jenkins"]
    },
    {
      category: "Tools & Methodologies",
      items: ["Git, GitHub, GitLab", "Agile, Scrum, Kanban", "JIRA, Confluence", "TDD, BDD, Code Review"]
    },
    {
      category: "Other Skills",
      items: ["System Design & Architecture", "Performance Optimization", "Security Best Practices", "Team Leadership & Mentoring"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Texas at Austin",
      details: "Graduated: May 2015 | GPA: 3.8/4.0"
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect - Professional (2023)",
    "Google Cloud Professional Cloud Architect (2022)",
    "Certified Kubernetes Administrator (CKA) (2021)",
    "Microsoft Azure Solutions Architect Expert (2020)"
  ],
  earlierExperience: [
    {
      title: "Web Development Intern",
      company: "Local Tech Startup",
      duration: "Summer 2014",
      points: [
        "Assisted in developing internal tools using PHP and MySQL",
        "Created documentation for API endpoints and development processes",
        "Participated in daily standups and sprint planning meetings"
      ]
    }
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Section = ({ children, className = "" }) => (
  <motion.section
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl mb-6 ${className}`}
  >
    {children}
  </motion.section>
)

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
    {children}
    <motion.div
      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "60px" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </h2>
)

const ContactItem = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05, x: 5 }}
    className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl text-gray-600 cursor-pointer transition-all"
  >
    <Icon className="w-4 h-4 text-purple-600" />
    <span className="text-sm">{text}</span>
  </motion.div>
)

const ExperienceItem = ({ item }) => (
  <motion.div
    variants={itemVariants}
    className="mb-8 pb-8 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0"
  >
    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
    <p className="text-lg text-purple-600 font-medium mt-1">{item.company}</p>
    <p className="text-gray-400 text-sm mt-1 mb-4">{item.duration}</p>
    <ul className="space-y-2">
      {item.points.map((point, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-start gap-3 text-gray-600"
        >
          <ChevronRight className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
          <span>{point}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const SkillCard = ({ category, items }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-purple-500"
  >
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
          <div className="w-2 h-2 bg-purple-500 rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

function App() {
  const { name, title, contact, summary, experience, projects, skills, education, certifications, earlierExperience } = resumeData

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 mb-6 shadow-2xl"
        >
          <motion.h1
            className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {name}
          </motion.h1>
          <p className="text-2xl text-gray-500 mb-6">{title}</p>
          <div className="flex flex-wrap gap-3">
            {contact.map((c, idx) => (
              <ContactItem key={idx} icon={c.icon} text={c.text} />
            ))}
          </div>
        </motion.header>

        {/* Summary */}
        <Section>
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-gray-600 text-lg leading-relaxed">{summary}</p>
        </Section>

        {/* Experience */}
        <Section>
          <SectionTitle>Work Experience</SectionTitle>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {experience.map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          </motion.div>
        </Section>

        {/* Projects */}
        <Section>
          <SectionTitle>Key Projects</SectionTitle>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {projects.map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          </motion.div>
        </Section>

        {/* Skills */}
        <Section>
          <SectionTitle>Technical Skills</SectionTitle>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => (
              <SkillCard key={idx} category={skill.category} items={skill.items} />
            ))}
          </motion.div>
        </Section>

        {/* Education */}
        <Section>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-purple-600 font-medium">{edu.school}</p>
              <p className="text-gray-400 text-sm">{edu.details}</p>
            </motion.div>
          ))}
        </Section>

        {/* Certifications */}
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 text-gray-600"
              >
                <Award className="w-5 h-5 text-purple-500 flex-shrink-0" />
                {cert}
              </motion.li>
            ))}
          </motion.ul>
        </Section>

        {/* Earlier Experience */}
        <Section>
          <SectionTitle>Earlier Experience</SectionTitle>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {earlierExperience.map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          </motion.div>
        </Section>
      </motion.div>
    </div>
  )
}

export default App
