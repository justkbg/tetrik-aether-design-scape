
import React, { useState } from 'react';
import Section from '@/components/Section';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    }, 1500);
  };

  const offices = [
    {
      city: 'New York',
      address: '123 Design Avenue, New York, NY 10001',
      phone: '+1 (212) 555-1234',
      email: 'nyc@tetrikdesign.com',
    },
    {
      city: 'London',
      address: '45 Architecture Street, London, EC1A 1BB',
      phone: '+44 (0)20 7123 4567',
      email: 'london@tetrikdesign.com',
    },
    {
      city: 'Tokyo',
      address: '2-1-1 Design District, Shibuya, Tokyo 150-0002',
      phone: '+81 3-1234-5678',
      email: 'tokyo@tetrikdesign.com',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-tetrik-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,230,202,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-tetrik-silver">
            Ready to start your project? Reach out to discuss how we can bring your vision to life.
          </p>
        </div>
      </Section>

      {/* Contact Form and Offices */}
      <Section className="bg-tetrik-dark">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-tetrik-black p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-tetrik-silver mb-2">
                  Full Name <span className="text-tetrik-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tetrik-dark border border-tetrik-gray rounded-md text-white focus:outline-none focus:border-tetrik-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm text-tetrik-silver mb-2">
                    Email <span className="text-tetrik-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-tetrik-dark border border-tetrik-gray rounded-md text-white focus:outline-none focus:border-tetrik-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-tetrik-silver mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-tetrik-dark border border-tetrik-gray rounded-md text-white focus:outline-none focus:border-tetrik-accent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm text-tetrik-silver mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-tetrik-dark border border-tetrik-gray rounded-md text-white focus:outline-none focus:border-tetrik-accent transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Urban">Urban Planning</option>
                  <option value="Interior">Interior Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-tetrik-silver mb-2">
                  Your Message <span className="text-tetrik-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-tetrik-dark border border-tetrik-gray rounded-md text-white focus:outline-none focus:border-tetrik-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-tetrik-accent text-tetrik-black font-medium rounded-md hover:bg-tetrik-accent/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Offices */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-6">
              Our Offices
            </h2>
            <div className="space-y-8">
              {offices.map((office) => (
                <div key={office.city} className="p-6 bg-tetrik-black rounded-lg hover:border hover:border-tetrik-accent/20 transition-all">
                  <h3 className="text-xl font-medium text-white mb-2">{office.city}</h3>
                  <address className="not-italic text-tetrik-silver text-sm space-y-2">
                    <p>{office.address}</p>
                    <p>
                      <a href={`tel:${office.phone}`} className="hover:text-tetrik-accent transition-colors">
                        {office.phone}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${office.email}`} className="hover:text-tetrik-accent transition-colors">
                        {office.email}
                      </a>
                    </p>
                  </address>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-tetrik-accent/10 backdrop-blur-sm rounded-lg border border-tetrik-accent/20">
              <h3 className="text-xl font-medium text-white mb-3">Career Opportunities</h3>
              <p className="text-tetrik-silver mb-4">
                Interested in joining our team? We're always looking for talented individuals to help us shape the future of architecture.
              </p>
              <a 
                href="mailto:careers@tetrikdesign.com" 
                className="inline-flex items-center text-tetrik-accent hover:underline"
              >
                Send your portfolio to careers@tetrikdesign.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-tetrik-black" withContainer={false}>
        <div className="h-[400px] w-full bg-tetrik-gray relative overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.909815262252!2d-73.98262570284317!3d40.7614664135501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6aa300ba8339d!2sThe%20Museum%20of%20Modern%20Art!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Tetrik Office Location"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Contact;
