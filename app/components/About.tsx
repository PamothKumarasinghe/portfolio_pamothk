'use client';

import { motion } from 'motion/react';
import { Code2, Gamepad2, Layers } from 'lucide-react';


export function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Backend Engineering',
      description: 'Developing secure, efficient, and production-ready APIs using Node.js, Express.js, FastAPI, and Java Spring Boot.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Full Stack Development',
      description: 'Building complete applications with database design, authentication systems, RESTful APIs, and cloud-ready deployments.'
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences while exploring system design and software architecture.'
    }
  ];

  const keywords = [
    'Backend Engineer',
    'Full Stack Developer',
    'Node.js Developer',
    'FastAPI Developer',
    'Spring Boot Developer',
    'University of Moratuwa',
    'Sri Lanka Software Engineer',
    'Express.js Developer',
    'RESTful API Design',
    'System Architecture',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-gray-400 mb-4 text-4xl font-bold"
            whileInView={{ x: [0] }}
          >
            About Me
          </motion.h2>
          <div className="text-white max-w-4xl mb-8 text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              I am <strong>Pamoth Kumarasinghe</strong>, a Computer Science and Engineering undergraduate at the <strong>University of Moratuwa</strong>, 
              specializing in backend engineering and full stack software development. I am passionate about designing and building scalable, 
              high-performance software systems and modern web applications.
            </p>
            <p>
              My core expertise lies in <strong>backend development</strong> using <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>FastAPI</strong>, 
              and <strong>Java Spring Boot</strong>, where I develop secure, efficient, and production-ready APIs and services. I have strong experience in 
              building complete full stack applications, handling database design, authentication systems, RESTful API architecture, and cloud-ready deployments.
            </p>
            <p>
              Beyond web development, I am also interested in <strong>game development</strong>, <strong>system design</strong>, and <strong>software architecture</strong>, 
              constantly exploring new technologies and best practices to improve performance, scalability, and user experience.
            </p>
            <p>
              I am driven by a deep passion for technology and a commitment to continuous learning. I enjoy transforming complex ideas into practical, 
              impactful digital solutions that solve real-world problems. My goal is to contribute to innovative software projects and grow as a 
              backend and systems engineer while building reliable and meaningful software.
            </p>
          </div>

          {/* Keywords Section for SEO */}
          <motion.div 
            className="mb-16 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wider">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <motion.span
                  key={keyword}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                  className="px-3 py-1.5 text-sm bg-white/5 text-gray-400 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                >
                  {keyword}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="p-6 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all rounded-lg group backdrop-blur-sm"
              >
                <motion.div 
                  className="text-blue-400 mb-4 inline-block"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-white mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}