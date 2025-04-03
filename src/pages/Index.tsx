
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import Hero3D from '@/components/Hero3D';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { ArrowRight } from 'lucide-react';

// Portfolio items
const featuredProjects = [
  {
    id: 1,
    title: 'Vertex Tower',
    description: 'Commercial skyscraper with sustainable design principles',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    category: 'Commercial',
  },
  {
    id: 2,
    title: 'Solstice Residences',
    description: 'Luxury residential complex with integrated smart home technology',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    category: 'Residential',
  },
  {
    id: 3,
    title: 'Nexus Museum',
    description: 'Cultural landmark with dynamic exhibition spaces',
    image: 'https://images.unsplash.com/photo-1580650958482-fbc4e4a323bc?q=80&w=1600&auto=format&fit=crop',
    category: 'Cultural',
  },
];

// Services
const services = [
  {
    title: 'Architectural Design',
    description: 'Innovative architectural solutions tailored to your vision and needs.',
    icon: (
      <svg className="w-10 h-10 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Interior Design',
    description: 'Creating spaces that harmonize aesthetics with functionality.',
    icon: (
      <svg className="w-10 h-10 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Urban Planning',
    description: 'Strategic planning for sustainable and livable urban environments.',
    icon: (
      <svg className="w-10 h-10 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: '3D Visualization',
    description: 'Photorealistic renderings and immersive virtual experiences.',
    icon: (
      <svg className="w-10 h-10 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <Section fullHeight className="bg-tetrik-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-tetrik-accent/5 to-transparent z-0" />
        <div className="grid md:grid-cols-2 gap-8 h-full">
          <div className="flex flex-col justify-center z-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Shaping the Future of
              <span className="block text-gradient bg-gradient-to-r from-white to-tetrik-accent bg-clip-text text-transparent">
                Architecture
              </span>
            </h1>
            <p className="mt-6 text-lg text-tetrik-silver max-w-lg">
              We design innovative spaces that transform how people live, work, and interact with their environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-tetrik-accent text-tetrik-black font-medium rounded-md hover:bg-tetrik-accent/90 transition-colors"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-tetrik-silver text-white font-medium rounded-md hover:border-tetrik-accent hover:text-tetrik-accent transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-full z-10 animate-fade-in">
            <Hero3D />
          </div>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section className="bg-tetrik-dark">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6 heading-underline">
              Award-winning <br />Architecture Studio
            </h2>
            <p className="text-tetrik-silver mb-6">
              At Tetrik, we blend innovative design with functional excellence to create spaces that inspire and endure. Our team of award-winning architects and designers brings decades of experience and a passion for pushing boundaries.
            </p>
            <p className="text-tetrik-silver mb-8">
              Founded in 2010, we've established ourselves as leaders in sustainable architecture, urban design, and interior transformation across international markets.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-tetrik-accent hover:underline group"
            >
              Learn more about our studio
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1643272415997-a4a7a86269e7?q=80&w=1200&auto=format&fit=crop"
                alt="Tetrik Architecture Studio"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 hidden md:block">
              <div className="w-full h-full bg-tetrik-accent/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-tetrik-accent/20">
                <p className="text-white text-center">
                  <span className="block text-3xl font-display font-bold">25+</span>
                  <span className="text-sm">International Awards</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Preview */}
      <Section className="bg-tetrik-black">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 heading-underline">
              Featured Projects
            </h2>
            <p className="text-tetrik-silver max-w-lg">
              Explore our award-winning portfolio spanning residential, commercial, and cultural projects around the world.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center text-tetrik-accent hover:underline group"
          >
            View all projects
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <BentoGrid>
          {featuredProjects.map((project) => (
            <BentoGridItem
              key={project.id}
              className="relative overflow-hidden group"
              header={
                <div className="absolute inset-0 z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tetrik-black via-transparent to-transparent" />
                </div>
              }
            >
              <div className="mt-auto relative z-20 pt-36">
                <span className="text-xs font-medium text-tetrik-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-white mt-2">{project.title}</h3>
                <p className="text-tetrik-silver text-sm mt-2">{project.description}</p>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </Section>

      {/* Services Section */}
      <Section className="bg-tetrik-dark">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 text-center heading-underline">
          Our Services
        </h2>
        <p className="text-tetrik-silver max-w-2xl mx-auto text-center mb-12">
          We offer comprehensive architectural and design services tailored to your specific needs and vision.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-6 bg-tetrik-gray rounded-lg hover:bg-gradient-to-br from-tetrik-gray to-tetrik-dark border border-tetrik-glass transition-all group hover:shadow-[0_0_30px_rgba(0,230,202,0.1)] hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
              <p className="text-tetrik-silver text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-tetrik-black bg-gradient-to-br from-tetrik-black via-tetrik-dark to-tetrik-black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-tetrik-silver text-lg mb-8">
            Let's collaborate to bring your architectural vision to life. Our team is ready to turn your ideas into reality.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-tetrik-accent text-tetrik-black font-medium rounded-md hover:bg-tetrik-accent/90 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Index;
