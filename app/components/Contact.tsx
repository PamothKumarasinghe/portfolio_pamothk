'use client';

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Download, ArrowRight, Heart } from 'lucide-react';

export function Contact() {
  const socials = [
    { icon: <Mail size={24} />, label: 'Email', href: 'mailto:prkumarasinghe@gmail.com' },
    { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/PamothKumarasinghe' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pamoth-kumarasinghe-3a00b4346/' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            className="text-gray-400 mb-4 text-4xl font-bold"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the platforms below.
          </p>

          {/* Download CV Card with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="max-w-md mx-auto mb-12"
            whileHover={{ scale: 1.05 }}
          >
            <motion.a
              href="/230354T_CV.pdf"
              download="230354T_CV.pdf"
              className="block p-6 border border-white/20 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all group rounded-lg backdrop-blur-sm"
              whileHover={{ 
                boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)'
              }}
            >
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download size={32} className="text-pink-400 group-hover:text-pink-300 transition-colors" />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-white group-hover:text-pink-300 transition-colors mb-1 font-semibold">
                    Download My CV
                  </h3>
                  <p className="text-gray-400 text-sm">
                    View my complete resume and experience
                  </p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
                }}
                className="flex items-center gap-3 px-6 py-4 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all rounded-lg group backdrop-blur-sm"
              >
                <motion.span 
                  className="text-gray-400 group-hover:text-purple-300 transition-colors"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {social.icon}
                </motion.span>
                <span className="text-gray-400 group-hover:text-purple-300 transition-colors font-medium">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-12 border-t border-white/5"
          >
            <motion.p 
              className="text-gray-500 flex items-center justify-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              &copy; {new Date().getFullYear()} Pamoth Kumarasinghe. All rights reserved.
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
              >
                <Heart size={16} className="text-pink-500 fill-pink-500" />
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}