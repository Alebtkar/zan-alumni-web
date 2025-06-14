
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './card';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GradientCard: React.FC<GradientCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      <Card className={`bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
};

export default GradientCard;
