
import React from 'react';
import Section from '@/components/Section';

const teamMembers = [
  {
    name: 'Alex Morgan',
    position: 'Principal Architect & Founder',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop',
    bio: 'Award-winning architect with over 20 years of experience designing innovative spaces across the globe.',
  },
  {
    name: 'Sarah Chen',
    position: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
    bio: 'Specializes in sustainable design solutions and has led projects in over 15 countries.',
  },
  {
    name: 'Marcus Johnson',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop',
    bio: 'Engineering expert who bridges creative vision with structural integrity and technical excellence.',
  },
  {
    name: 'Elena Rodriguez',
    position: 'Interior Design Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    bio: 'Creates immersive interior experiences with a focus on human-centered design and luxury finishes.',
  },
];

const achievements = [
  { number: '200+', title: 'Projects Completed' },
  { number: '35+', title: 'International Awards' },
  { number: '18', title: 'Countries' },
  { number: '12+', title: 'Years of Excellence' },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-tetrik-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,230,202,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About Tetrik</h1>
          <p className="text-xl text-tetrik-silver">
            We are a team of visionary architects and designers dedicated to creating spaces that inspire and endure.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="bg-tetrik-dark">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6 heading-underline">
              Our Story
            </h2>
            <p className="text-tetrik-silver mb-4">
              Founded in 2010 by Alex Morgan, Tetrik began as a small studio with a bold vision: to create architectural designs that push boundaries while respecting context and environment.
            </p>
            <p className="text-tetrik-silver mb-4">
              Over the years, we've grown into an international practice with offices in New York, London, and Tokyo, but our philosophy remains unchanged. We believe in architecture that responds to human needs, enhances communities, and embraces sustainability.
            </p>
            <p className="text-tetrik-silver">
              Today, Tetrik is recognized as a leader in innovative design, known for our distinctive approach that balances aesthetic excellence with functional integrity. Our diverse portfolio spans residential towers, cultural institutions, commercial developments, and public spaces.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop" 
                alt="Tetrik Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3">
              <div className="w-full h-full glass-card p-6 flex flex-col justify-center">
                <p className="text-white text-lg font-display font-medium mb-2">
                  "Architecture is not just about building. It's about creating spaces that enhance human experience."
                </p>
                <p className="text-tetrik-accent">— Alex Morgan, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section className="bg-tetrik-black">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6 text-center heading-underline">
          Our Values
        </h2>
        <p className="text-tetrik-silver max-w-2xl mx-auto text-center mb-12">
          These core principles guide everything we do at Tetrik, from concept development to project delivery.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-tetrik-dark rounded-lg border border-tetrik-glass hover:border-tetrik-accent/20 transition-all group">
            <div className="w-14 h-14 rounded-full bg-tetrik-accent/10 flex items-center justify-center mb-6 group-hover:bg-tetrik-accent/20 transition-colors">
              <svg className="w-6 h-6 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Innovation</h3>
            <p className="text-tetrik-silver">
              We constantly push the boundaries of design, embracing new technologies and approaches to create architecture that is both visionary and practical.
            </p>
          </div>
          
          <div className="p-8 bg-tetrik-dark rounded-lg border border-tetrik-glass hover:border-tetrik-accent/20 transition-all group">
            <div className="w-14 h-14 rounded-full bg-tetrik-accent/10 flex items-center justify-center mb-6 group-hover:bg-tetrik-accent/20 transition-colors">
              <svg className="w-6 h-6 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Sustainability</h3>
            <p className="text-tetrik-silver">
              Environmental responsibility is integral to our practice. We design buildings that minimize ecological impact and maximize energy efficiency.
            </p>
          </div>
          
          <div className="p-8 bg-tetrik-dark rounded-lg border border-tetrik-glass hover:border-tetrik-accent/20 transition-all group">
            <div className="w-14 h-14 rounded-full bg-tetrik-accent/10 flex items-center justify-center mb-6 group-hover:bg-tetrik-accent/20 transition-colors">
              <svg className="w-6 h-6 text-tetrik-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Collaboration</h3>
            <p className="text-tetrik-silver">
              We believe the best designs emerge from a collaborative process that includes clients, communities, and multidisciplinary experts.
            </p>
          </div>
        </div>
      </Section>

      {/* Achievements */}
      <Section className="bg-tetrik-dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div key={item.title} className="text-center p-6">
              <p className="text-4xl md:text-5xl font-display font-bold text-tetrik-accent mb-2">
                {item.number}
              </p>
              <p className="text-tetrik-silver">{item.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-tetrik-black">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6 text-center heading-underline">
          Meet Our Team
        </h2>
        <p className="text-tetrik-silver max-w-2xl mx-auto text-center mb-12">
          Our talented team of architects and designers brings diverse perspectives and expertise to every project.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-tetrik-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-tetrik-accent text-sm mb-2">{member.position}</p>
              <p className="text-tetrik-silver text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
