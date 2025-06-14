
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from './breadcrumb';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  // Route name mapping for better display
  const routeNameMap: { [key: string]: string } = {
    'services': 'الخدمات',
    'projects': 'المشاريع',
    'news': 'الأخبار',
    'articles': 'المقالات',
    'gallery': 'المعرض',
    'quote': 'طلب عرض سعر',
    'careers': 'الوظائف',
    'testimonials': 'آراء العملاء',
    'dashboard': 'لوحة التحكم',
    'about': 'من نحن',
    'contact': 'اتصل بنا',
    'privacy': 'سياسة الخصوصية',
    'terms': 'الشروط والأحكام'
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center space-x-2 text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Home className="h-4 w-4 ml-2" />
                  الرئيسية
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = routeNameMap[pathname] || pathname;

              return (
                <React.Fragment key={pathname}>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </BreadcrumbSeparator>
                  
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-blue-600 font-medium">
                        {displayName}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link 
                          to={routeTo} 
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {displayName}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
