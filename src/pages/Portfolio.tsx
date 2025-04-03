
import React, { useState } from 'react';
import Section from '@/components/Section';

const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Urban'];

const projects = [
  {
    id: 1,
    title: 'Vertex Tower',
    description: 'A 42-story commercial skyscraper featuring a distinctive angular facade and integrated green spaces.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    category: 'Commercial',
    location: 'Chicago, USA',
    year: '2022',
  },
  {
    id: 2,
    title: 'Solstice Residences',
    description: 'Luxury residential complex with 120 units, incorporating smart home technology and sustainable design principles.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    category: 'Residential',
    location: 'London, UK',
    year: '2023',
  },
  {
    id: 3,
    title: 'Nexus Museum',
    description: 'Contemporary art museum with flexible exhibition spaces and a dramatic central atrium.',
    image: 'https://images.unsplash.com/photo-1580650958482-fbc4e4a323bc?q=80&w=1600&auto=format&fit=crop',
    category: 'Cultural',
    location: 'Tokyo, Japan',
    year: '2021',
  },
  {
    id: 4,
    title: 'Urban Oasis Park',
    description: 'Revitalization of a former industrial site into a public park with interactive water features and native plantings.',
    image: 'https://images.unsplash.com/photo-1620065692439-09a4eba9fd7c?q=80&w=1600&auto=format&fit=crop',
    category: 'Urban',
    location: 'Barcelona, Spain',
    year: '2020',
  },
  {
    id: 5,
    title: 'Crystal Offices',
    description: 'Office complex featuring a transparent facade that optimizes natural light while minimizing energy consumption.',
    image: 'https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=1600&auto=format&fit=crop',
    category: 'Commercial',
    location: 'Singapore',
    year: '2022',
  },
  {
    id: 6,
    title: 'Harmony Villas',
    description: 'Exclusive gated community of 15 luxury villas, each with unique design elements inspired by the surrounding landscape.',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1600&auto=format&fit=crop',
    category: 'Residential',
    location: 'Dubai, UAE',
    year: '2023',
  },
  {
    id: 7,
    title: 'Rhythm Concert Hall',
    description: 'Acoustically optimized performing arts venue with seating for 1,800 and advanced technical capabilities.',
    image: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1600&auto=format&fit=crop',
    category: 'Cultural',
    location: 'Berlin, Germany',
    year: '2021',
  },
  {
    id: 8,
    title: 'Metropolitan Plaza',
    description: 'Mixed-use development combining retail, dining, and public spaces in a pedestrian-friendly urban setting.',
    image: 'https://images.unsplash.com/photo-1611204435053-e911edb778ed?q=80&w=1600&auto=format&fit=crop',
    category: 'Urban',
    location: 'Melbourne, Australia',
    year: '2020',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projectInFocus, setProjectInFocus] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-tetrik-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,230,202,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-tetrik-silver">
            Explore our diverse collection of award-winning architectural projects from around the world.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section className="bg-tetrik-dark py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-tetrik-accent text-tetrik-black'
                  : 'bg-tetrik-gray text-white hover:bg-tetrik-gray/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Project Grid */}
      <Section className="bg-tetrik-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative cursor-pointer"
              onClick={() => setProjectInFocus(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tetrik-black to-transparent opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium text-tetrik-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-white mt-2 group-hover:text-tetrik-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-tetrik-silver text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.location} • {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Project Detail Modal */}
      {projectInFocus !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tetrik-black/90 backdrop-blur-sm">
          <div 
            className="bg-tetrik-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            {projects.find(p => p.id === projectInFocus) && (
              <>
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={projects.find(p => p.id === projectInFocus)?.image}
                    alt={projects.find(p => p.id === projectInFocus)?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-xs font-medium text-tetrik-accent uppercase tracking-wider">
                        {projects.find(p => p.id === projectInFocus)?.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-white mt-1">
                        {projects.find(p => p.id === projectInFocus)?.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setProjectInFocus(null)}
                      className="p-2 text-tetrik-silver hover:text-white transition-colors"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-tetrik-black/50 px-4 py-2 rounded">
                      <p className="text-xs text-tetrik-silver">Location</p>
                      <p className="text-white">{projects.find(p => p.id === projectInFocus)?.location}</p>
                    </div>
                    <div className="bg-tetrik-black/50 px-4 py-2 rounded">
                      <p className="text-xs text-tetrik-silver">Completed</p>
                      <p className="text-white">{projects.find(p => p.id === projectInFocus)?.year}</p>
                    </div>
                  </div>
                  <p className="text-tetrik-silver mb-8">
                    {projects.find(p => p.id === projectInFocus)?.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
