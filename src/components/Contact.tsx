import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Madrid, España',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+34 604 36 74 83',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'josephsamanna@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

        </motion.div>

        <div className="grid grid-cols-1">
          {/* Contact Information */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-2xl mx-auto w-full"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Información de Contacto
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                No dudes en contactarme para discutir oportunidades de colaboración, 
                proyectos freelance o simplemente para conversar sobre tecnología.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, info }) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;