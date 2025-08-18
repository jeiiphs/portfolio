import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin,  Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/jeiiphs/elegancia.git', label: 'GitHub', external: true },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joseph-samanna-b76507306/', label: 'LinkedIn', external: true }
  ];

  return (
    <section id="home" className="min-h-[120vh] flex items-center justify-center pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="rounded-full bg-white dark:bg-gray-900 w-full h-full"></div>
              </motion.div>
              <img
                src="https://i.imgur.com/U6wUJIp.jpeg"
                alt="Profile"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-900"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Joseph Samanna
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              Desarrolladora Full Stack
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Apasionada por crear experiencias digitales excepcionales. Especializada en React, 
              Node.js y tecnologías modernas de desarrollo web. Siempre en busca de nuevos desafíos 
              y oportunidades para innovar.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Contactar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <Download size={20} />
              Descargar CV
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label, external }) => 
              external ? (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ) : (
                <Link key={label} to={href}>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.div>
                </Link>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;