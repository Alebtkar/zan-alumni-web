
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import GradientCard from '../components/ui/GradientCard';
import { mockProjects } from '../data/mockData';

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? mockProjects 
    : mockProjects.filter(project => project.type === filter);

  const filters = [
    { key: 'all', label: 'الكل' },
    { key: 'residential', label: 'سكني' },
    { key: 'commercial', label: 'تجاري' },
    { key: 'industrial', label: 'صناعي' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('projects')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف مجموعة من أهم مشاريعنا المنجزة والجاري تنفيذها
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.key}
              variant={filter === filterOption.key ? "default" : "outline"}
              onClick={() => setFilter(filterOption.key)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link key={project.id} to={`/projects/${project.slug}`}>
              <GradientCard>
                <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : project.status === 'ongoing'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status === 'completed' ? 'مكتمل' : project.status === 'ongoing' ? 'جاري' : 'مخطط'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {project.type === 'residential' ? 'سكني' : project.type === 'commercial' ? 'تجاري' : 'صناعي'}
                      </span>
                      {project.location && (
                        <span className="text-sm text-gray-500">{project.location}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Timeline Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">المراحل الرئيسية:</h4>
                      <div className="space-y-1">
                        {project.timeline.slice(0, 2).map((milestone) => (
                          <div key={milestone.id} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            <span>{milestone.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Review */}
                    {project.clientReview && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-gray-600 italic">"{project.clientReview.comment}"</p>
                        <p className="text-sm font-medium text-gray-800 mt-1">- {project.clientReview.name}</p>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-green-600 hover:text-green-700 font-medium">
                        عرض التفاصيل
                      </span>
                      <span className="text-sm text-gray-500">{project.createdAt}</span>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد مشاريع تطابق الفلتر المحدد</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
