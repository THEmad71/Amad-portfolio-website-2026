import { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const subject = encodeURIComponent(
    `Portfolio Contact from ${formData.name}`
  );

  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n\n` +
    `Message:\n${formData.message}`
  );

  window.location.href =
    `mailto:amaduddinosama@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'amaduddinosama@gmail.com', link: 'mailto:amaduddinosama@gmail.com' },
    { icon: MessageSquare, label: 'LinkedIn', value: 'www.linkedin.com/in/amad-uddin-osama', link: 'https://www.linkedin.com/in/amad-uddin-osama/' },
    { icon: MapPin, label: 'Location', value: 'Chiitagong, Bangladesh', link: null },
  ];

  return (
    <div className="min-h-screen">
      <TopBar title="Get In Touch" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Form */}
        <AnimatedSection>
          <Card>
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </AnimatedSection>

        {/* Contact Information */}
        <StaggerContainer className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card>
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1a1a1a] transition-all">
                      <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
                        <Icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={info.label} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-400">Available for freelance work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-400">Open to research collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-400">Accepting new projects</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm always interested in hearing about new projects, research opportunities, or just having a chat about design and technology.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Response time: Usually within 24 hours
              </p>
            </Card>
          </motion.div>
        </StaggerContainer>
      </div>
    </div>
  );
}