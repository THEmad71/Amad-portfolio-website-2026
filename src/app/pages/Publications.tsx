import { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { FilterChips } from '../components/ui/FilterChips';
import { PublicationItem } from '../components/PublicationItem';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { Brain, Microscope, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const publications = [
  {
    title: 'Comparing Deep Learning Models for the Recognition of Leaf Diseases in Cucurbit Crops',
    authors: 'Amad uddin, Research Team',
    venue: 'Journal of Agricultural Technology',
    year: '2025',
    description: 'Comprehensive analysis of CNN, ResNet, and Vision Transformer architectures for automated disease detection in cucurbit crops.',
    tags: ['Deep Learning', 'Agriculture', 'Computer Vision', 'Disease Detection'],
    type: 'journal' as const,
    status: 'Accepted (Pending Publication)',
    paperUrl: '#',
    pdfUrl: '#',
    doiUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Smart Agriculture: Cucurbit Leaf Disease Detection Using Swin Transformer',
    authors: 'Amad uddin, Collaborators',
    venue: 'International Conference on Smart Agriculture',
    year: '2025',
    description: 'Novel application of Swin Transformer architecture achieving 96.8% accuracy in real-time crop disease identification.',
    tags: ['Swin Transformer', 'Smart Agriculture', 'Deep Learning', 'Crop Health'],
    type: 'conference' as const,
    status: 'Accepted (Pending Publication)',
    paperUrl: '#',
    pdfUrl: '#',
    doiUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'ML-based Sustainability Study on Jute & Tea Production',
    authors: 'Amad uddin, Research Team',
    venue: 'Journal of Sustainable Agriculture',
    year: '2024',
    description: 'Machine learning approach to optimize resource allocation and predict yield patterns for sustainable jute and tea cultivation.',
    tags: ['Machine Learning', 'Sustainability', 'Agriculture', 'Data Analysis'],
    type: 'journal' as const,
    status: 'Published',
    paperUrl: '#',
    pdfUrl: '#',
    doiUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Sustainable Launch Approaches for Small Satellites',
    authors: 'Amad uddin, Aerospace Team',
    venue: 'Aerospace Engineering Conference',
    year: '2024',
    description: 'Research on cost-effective and environmentally sustainable launch methodologies for small satellite deployment.',
    tags: ['Aerospace', 'Sustainability', 'Small Satellites', 'Engineering'],
    type: 'conference' as const,
    status: 'Published',
    paperUrl: '#',
    pdfUrl: '#',
    doiUrl: '#',
  },
];

const researchInterests = [
  { icon: Microscope, label: 'Medical Imaging & Disease Detection' },
  { icon: Brain, label: 'Vision Transformers & Deep Learning' },
  { icon: Cpu, label: 'Explainable AI & Model Interpretability' },
];

export function Publications() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredPublications = activeFilter === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen">
      <TopBar title="Publications" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Publications Section */}
        <div className="lg:col-span-2">
          <AnimatedSection>
            <Card className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Research Papers</h2>
                <span className="text-sm text-gray-500">{filteredPublications.length} papers</span>
              </div>
              <FilterChips
                options={['All', 'Conference', 'Journal', 'Preprint']}
                active={activeFilter}
                onChange={setActiveFilter}
              />
            </Card>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {filteredPublications.map((pub) => (
              <motion.div key={pub.title} variants={itemVariants}>
                <PublicationItem {...pub} />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Research Highlights Sidebar */}
        <div className="space-y-6">
          <AnimatedSection delay={0.2}>
            <Card>
              <h3 className="text-xl font-semibold text-white mb-6">Research Highlights</h3>
              <div className="space-y-4">
                {researchInterests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div key={interest.label} className="flex items-start gap-3">
                      <div className="p-2 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] mt-1">
                        <Icon className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{interest.label}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Python & PyTorch</span>
                    <span className="text-xs text-gray-500">Expert</span>
                  </div>
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">TensorFlow & Keras</span>
                    <span className="text-xs text-gray-500">Advanced</span>
                  </div>
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Data Analysis</span>
                    <span className="text-xs text-gray-500">Expert</span>
                  </div>
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Model Evaluation</span>
                    <span className="text-xs text-gray-500">Advanced</span>
                  </div>
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card>
              <h3 className="text-xl font-semibold text-white mb-4">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                <Tag variant="accent">Computer Vision</Tag>
                <Tag variant="accent">Deep Learning</Tag>
                <Tag variant="success">Healthcare AI</Tag>
                <Tag variant="accent">Agriculture Tech</Tag>
                <Tag variant="success">XAI</Tag>
                <Tag variant="accent">Transformers</Tag>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}