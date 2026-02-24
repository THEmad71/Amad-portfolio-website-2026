import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import webDesignImage from '../../assets/webDesign.png';

const posts = [
  {
    title: 'Tips for Effective Web Design',
    excerpt: 'A website is often the first point of contact between a business and its audience. Learn the essential principles for creating engaging and effective web experiences.',
    date: 'Aug 14, 2023',
    readTime: '5 min read',
    tags: ['Web Design', 'UI/UX', 'Tips'],
    image: webDesignImage,
  },
  {
    title: 'The Intersection of Design and AI',
    excerpt: 'Exploring how artificial intelligence is reshaping the product design landscape and what it means for designers.',
    date: 'February 15, 2026',
    readTime: '5 min read',
    tags: ['Design', 'AI', 'Thoughts'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    title: 'Building Explainable AI Systems',
    excerpt: 'Why interpretability matters in machine learning and how to design AI systems that humans can trust and understand.',
    date: 'February 10, 2026',
    readTime: '8 min read',
    tags: ['ML', 'XAI', 'Research'],
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
  },
  {
    title: 'Design Systems That Scale',
    excerpt: 'Lessons learned from building and maintaining design systems for growing products and teams.',
    date: 'February 5, 2026',
    readTime: '6 min read',
    tags: ['Design Systems', 'UX', 'Process'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
  },
  {
    title: 'Medical AI: Challenges and Opportunities',
    excerpt: 'A deep dive into the unique challenges of developing AI for healthcare and the potential impact on patient care.',
    date: 'January 28, 2026',
    readTime: '10 min read',
    tags: ['Healthcare', 'AI', 'Research'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
];

export function Thoughts() {
  return (
    <div className="min-h-screen">
      <TopBar title="Thoughts & Writing" />

      <AnimatedSection>
        <Card className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Ideas & Reflections</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sharing my thoughts on design, technology, research, and the intersection of creativity and innovation. 
            Occasional musings on building products that matter.
          </p>
        </Card>
      </AnimatedSection>

      <StaggerContainer className="space-y-6">
        {posts.map((post, index) => (
          <motion.div key={post.title} variants={itemVariants}>
            <Card hover className="group overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="md:w-72 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-[#2a2a2a] flex-shrink-0"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.slice(0, 1).map((tag) => (
                      <Tag key={tag} variant="accent" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="ml-auto flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}