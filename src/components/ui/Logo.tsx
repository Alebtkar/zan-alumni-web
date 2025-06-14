
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center space-x-2 rtl:space-x-reverse ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg"></div>
        <div className="relative z-10 text-white font-bold text-lg">
          ZN
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-green-700">ZAN</span>
        <span className="text-sm text-green-600 leading-tight">ALUMINUM & GLASS</span>
      </div>
    </div>
  );
};

export default Logo;
