'use client';

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';

export function Contact() {
  const socials = [
    { icon: <Mail size={24} />, label: 'Email', href: 'mailto:pamoth@example.com' },
    { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/PamothKumarasinghe' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pamoth-kumarasinghe-3a00b4346/' },
    { icon: <Twitter size={24} />, label: 'Twitter', href: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-gray-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the platforms below.
          </p>
                    {/* Download CV Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="max-w-md mx-auto mb-12"
          >
            <a
              href="/230354T_CV.pdf"
              download="230354T_CV.pdf"
              className="block p-6 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center justify-center gap-4">
                <Download size={32} className="text-gray-400 group-hover:text-white transition-colors" />
                <div className="text-left">
                  <h3 className="text-white group-hover:text-white/90 transition-colors mb-1">
                    Download My CV
                  </h3>
                  <p className="text-gray-400 text-sm">
                    View my complete resume and experience
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="flex items-center gap-3 px-6 py-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {social.icon}
                </span>
                <span className="text-gray-400 group-hover:text-white transition-colors">
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
            <p className="text-gray-500">
              &copy; 2025 Pamoth Kumarasinghe. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}