
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">
              {t('companyName')}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('companyDescription')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t('services')}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">{t('projects')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">قانونية</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">{t('privacy')}</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">{t('terms')}</Link></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {t('companyName')}. {t('allRightsReserved')}
          </p>
          <motion.a 
            href="https://www.ebtkar.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            {t('builtBy')}
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
