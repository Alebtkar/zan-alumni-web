
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import GradientCard from '../components/ui/GradientCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { mockProjects } from '../data/mockData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  const project = mockProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المشروع غير موجود</h1>
          <Link to="/projects">
            <Button>العودة إلى المشاريع</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/projects" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            العودة إلى المشاريع
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Images Carousel */}
          <GradientCard>
            <div className="p-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`${project.title} - صورة ${index + 1}`}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </GradientCard>

          {/* Project Details */}
          <div className="space-y-6">
            <GradientCard>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status === 'completed' ? 'مكتمل' :
                     project.status === 'ongoing' ? 'قيد التنفيذ' : 'مخطط'}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {project.type === 'residential' ? 'سكني' :
                     project.type === 'commercial' ? 'تجاري' : 'صناعي'}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>

                {project.description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {project.location && (
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    {project.location}
                  </div>
                )}
              </div>
            </GradientCard>

            {/* Project Timeline */}
            <GradientCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">المراحل الزمنية</h3>
                <div className="space-y-4">
                  {project.timeline.map((milestone) => (
                    <div key={milestone.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">{milestone.title}</h4>
                        <p className="text-sm text-gray-600">{milestone.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{milestone.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GradientCard>

            {/* Client Review */}
            {project.clientReview && (
              <GradientCard>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">تقييم العميل</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < project.clientReview.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-3">"{project.clientReview.comment}"</p>
                  <p className="font-medium">{project.clientReview.name}</p>
                </div>
              </GradientCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
