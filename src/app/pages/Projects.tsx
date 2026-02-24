import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { ExternalLink, Eye } from 'lucide-react';
import { motion } from 'motion/react';

const uiUxProjects = [
  {
    title: 'BoltParts – UAE Client Project',
    description: 'E-commerce platform for automotive parts with advanced filtering and inventory management system.',
    tags: ['E-commerce', 'UI/UX', 'Client Work'],
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop',
  },
  {
    title: 'Groceries Web Design',
    description: 'Modern grocery shopping platform with intuitive navigation and seamless checkout experience.',
    tags: ['Web Design', 'E-commerce', 'Figma'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
  },
  {
    title: 'Groceries Mobile App Design',
    description: 'Mobile-first grocery app design focusing on quick ordering and delivery tracking features.',
    tags: ['Mobile Design', 'UI/UX', 'App'],
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=600&h=400&fit=crop',
  },
  {
    title: 'NASA Space App Challenge – Web Design',
    description: 'Interactive web platform for NASA Space Apps Challenge with data visualization and team collaboration.',
    tags: ['Web Design', 'NASA', 'Challenge'],
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop',
  },
  {
    title: 'FloodAware App Design',
    description: 'Emergency response application for flood monitoring and community alerts with real-time updates.',
    tags: ['Mobile App', 'Social Impact', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop',
  },
  {
    title: 'IIUC Computer Club Website Design',
    description: 'Official website for university computer club showcasing events, contests, and student resources.',
    tags: ['Web Design', 'Education', 'Community'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    title: 'JonSheba App Design',
    description: 'Healthcare service platform connecting patients with medical professionals and care providers.',
    tags: ['Healthcare', 'Mobile App', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
];

const graphicProjects = [
  {
    title: 'Poster Design',
    description: 'Event posters and promotional materials for tech conferences and university programs.',
    tags: ['Graphic Design', 'Branding', 'Print'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  },
  {
    title: 'Hoodie Design',
    description: 'Custom hoodie designs for tech clubs and student organizations with modern graphics.',
    tags: ['Apparel Design', 'Branding', 'Merchandise'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop',
  },
  {
    title: 'Jersey Design',
    description: 'Sports jersey and team apparel designs for university clubs and competitive events.',
    tags: ['Apparel Design', 'Sports', 'Graphics'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
];

const videoProjects = [
  {
    title: 'Computer Club Video Works',
    description: 'Promotional videos, event coverage, and educational content for IIUC Computer Club initiatives.',
    tags: ['Video Production', 'Motion Graphics', 'Content'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
  },
];

export function Projects() {
  return (
    <div className="min-h-screen">
      <TopBar title="Projects" />

      <AnimatedSection>
        <Card className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Creative Portfolio</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A collection of UI/UX design, graphic design, and video production work spanning client projects, 
            academic initiatives, and community contributions.
          </p>
        </Card>
      </AnimatedSection>

      {/* UI/UX Projects */}
      <AnimatedSection delay={0.1}>
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent" />
            <h3 className="text-2xl font-bold text-white">UI/UX Projects</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiUxProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card hover glow className="h-full group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl overflow-hidden mb-6 border border-[#2a2a2a]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Tag key={tag} size="sm" variant="accent">
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  <Button variant="secondary" size="sm" className="w-full">
                    <Eye className="w-4 h-4" />
                    View Case Study
                  </Button>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Graphic Design Projects */}
      <AnimatedSection delay={0.2}>
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent" />
            <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card hover glow className="h-full group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-square bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl overflow-hidden mb-6 border border-[#2a2a2a]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} size="sm" variant="success">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Video Projects */}
      <AnimatedSection delay={0.3}>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent" />
            <h3 className="text-2xl font-bold text-white">Video Production</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#333] to-transparent" />
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-6">
            {videoProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card hover glow className="group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="md:w-96 aspect-video bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl overflow-hidden border border-[#2a2a2a] flex-shrink-0"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                      <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Tag key={tag} variant="accent">
                            {tag}
                          </Tag>
                        ))}
                      </div>

                      <Button variant="secondary" size="md" className="w-full md:w-auto">
                        <ExternalLink className="w-4 h-4" />
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </div>
  );
}
