
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../ui/Logo';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="mb-6">
              <Logo size="md" className="mb-4" />
            </div>
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
            <h4 className="font-semibold mb-4 text-green-400">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">{t('services')}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-green-400 transition-colors">{t('projects')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">{t('about')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">{t('contact')}</Link></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-green-400">قانونية</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors">{t('privacy')}</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors">{t('terms')}</Link></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {t('companyName')}. {t('allRightsReserved')}
          </p>
          <motion.a 
            href="https://www.ebtkar.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 text-sm transition-colors mt-4 md:mt-0"
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
