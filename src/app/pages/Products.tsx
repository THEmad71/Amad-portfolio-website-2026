import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import groceriesAppImage from '../../assets/Products/groceries-app.png';

const products = [
  {
    title: 'MedScan AI',
    description: 'AI-powered medical image analysis platform for early disease detection',
    status: 'In Development',
    tags: ['Healthcare', 'AI', 'Web App'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'AgriVision',
    description: 'Mobile app for detecting plant diseases using computer vision',
    status: 'Beta',
    tags: ['Agriculture', 'Mobile', 'ML'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'DesignKit Pro',
    description: 'Comprehensive design system and component library for modern interfaces',
    status: 'Active',
    tags: ['Design System', 'React', 'Figma'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
];

export function Products() {
  return (
    <div className="min-h-screen">
      <TopBar title="Products" />

      <AnimatedSection>
        <Card className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Building Solutions</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Side projects and products I'm working on to solve real-world problems. Each product combines 
            thoughtful design with cutting-edge technology.
          </p>
        </Card>
      </AnimatedSection>

      {/* New Products Section */}
      <AnimatedSection delay={0.1}>
        <h3 className="text-4xl font-bold text-white mb-8">New Products</h3>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Groceries App - Featured */}
        <motion.div variants={itemVariants} className="lg:row-span-1">
          <Card hover glow className="h-full group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl overflow-hidden mb-6 border border-[#2a2a2a]"
            >
              <img
                src={groceriesAppImage}
                alt="Groceries App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Groceries App</h3>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-xl"
              >
                <span className="text-sm font-semibold text-green-400">FREE</span>
              </motion.div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Upgrade your grocery business with the Sohojbazar E-commerce Website Template. Designed for 
              modern grocery stores and online retailers, this template brings convenience and style together.
            </p>

            <div className="flex gap-3 mb-6">
              <Button variant="primary" size="md" className="flex-1">
                
                <a
                  href="https://wa.me/8801994423188"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Work Together
                </a>
              </Button>
              <Button variant="secondary" size="md">
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag variant="success">E-commerce</Tag>
              <Tag variant="success">Mobile</Tag>
              <Tag variant="success">Free</Tag>
            </div>
          </Card>
        </motion.div>

        {/* Dashboard Product */}
        <motion.div variants={itemVariants} className="lg:row-span-1">
          <Card hover glow className="h-full group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl overflow-hidden mb-6 border border-[#2a2a2a]"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Sohojbazar Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Sohojbazar - Groceries dashboard</h3>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-xl"
              >
                <span className="text-sm font-semibold text-blue-400">$59</span>
              </motion.div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Unlock the full potential of your grocery business with the Sohojbazar Dashboard. Designed to 
              empower sellers and streamline operations, this comprehensive admin panel puts control at your fingertips.
            </p>

            <div className="flex gap-3 mb-6">
              <Button variant="primary" size="md" className="flex-1">
                
                                <a
                  href="https://wa.me/8801994423188"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Work Together
                </a>
              </Button>
              <Button variant="secondary" size="md">
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag variant="accent">Dashboard</Tag>
              <Tag variant="accent">Admin</Tag>
              <Tag variant="accent">Premium</Tag>
            </div>
          </Card>
        </motion.div>
      </StaggerContainer>

      {/* Other Products
      <AnimatedSection delay={0.2}>
        <h3 className="text-3xl font-bold text-white mb-8">More Projects</h3>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div key={product.title} variants={itemVariants}>
            <Card hover glow className="flex flex-col h-full group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-6 rounded-2xl overflow-hidden border border-[#2a2a2a]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={product.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={product.link}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-2 h-2 rounded-full ${
                      product.status === 'Active'
                        ? 'bg-green-500'
                        : product.status === 'Beta'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                    }`}
                  />
                  <span className="text-xs text-gray-500">{product.status}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Tag key={tag} size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer> */}

      {/* CTA Section */}
      <AnimatedSection delay={0.4}>
        <Card className="mt-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto py-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Want a custom solution?</h3>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed px-4">
              Let's collaborate on your next project. I can help you build a product from scratch or improve your existing solution.
            </p>
            <Button variant="primary" size="lg">
              <Sparkles className="w-5 h-5" />
              <a
                  href="https://wa.me/8801994423188"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Work Together
                </a>

            </Button>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
}