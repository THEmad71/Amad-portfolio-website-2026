import { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { FilterChips } from '../components/ui/FilterChips';
import { PublicationItem } from '../components/PublicationItem';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { Brain, Microscope, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import paper1 from "../../assets/Publication/paper1.pdf";
import paper2 from "../../assets/Publication/paper2.pdf";
import paper3 from "../../assets/Publication/paper3.pdf";
import paper4 from "../../assets/Publication/paper4.pdf";
import paper5 from "../../assets/Publication/paper5.pdf";
const publications = [
{
  title: 'Comparing Deep Learning Models for the Recognition of Leaf Diseases in Cucurbit Crops',
  authors: 'Amad Uddin Osama, Iftehad Kamal Iftee, Mahmudul Hasan Jobaier, Md Obayed Mashfi',
  venue: '28th International Conference on Computer and Information Technology (ICCIT)',
  year: '2025',
  description: 'Comparative evaluation of CNN, DenseNet-121, MobileNetV2, ResNet-50, Vision Transformer (ViT), and Swin Transformer for multi-class cucurbit leaf disease recognition. Swin Transformer achieved the highest accuracy (94.49%) with strong macro and micro performance.',
  tags: ['Deep Learning', 'Swin Transformer', 'Computer Vision', 'Agriculture', 'Plant Disease Detection'],
  type: 'conference' as const,
  status: 'Accepted (IEEE ICCIT 2025)',
  paperUrl: '#',
  pdfUrl: paper1,
  doiUrl: '#',
  codeUrl: '#',
},
{
  title: 'Smart Agriculture: Cucurbit Leaf Disease Detection Using Swin Transformer',
  authors: 'Iftehad Kamal Iftee, Farhana Ahmed, Mahmudul Hasan Jobaier, Amad Uddin Osama, NorHidayati Abdul Aziz',
  venue: '11th International Conference on Engineering and Emerging Technologies (ICEET)',
  year: '2025',
  description: 'A Swin Transformer-based vision framework for cucurbit leaf disease classification using a newly curated Bangladesh field dataset (12,206 images). Achieved 92.27% overall accuracy with strong class-wise robustness and Grad-CAM interpretability.',
  tags: ['Swin Transformer', 'Vision Transformer', 'Smart Agriculture', 'Deep Learning', 'Image Classification'],
  type: 'conference' as const,
  status: 'Accepted (IEEE ICEET 2025)',
  paperUrl: '#',
  pdfUrl: paper2,
  doiUrl: '#',
  codeUrl: '#',
},
{
  title: 'Explainable ML for Flood Prediction in Bangladesh',
  authors: 'Obayed Mashfi, Tahsin Shikder, Kawcen Tamim, Nazmus Sakib MD Adil, Amad Uddin Osama',
  venue: '28th International Conference on Computer and Information Technology (ICCIT)',
  year: '2025',
  description: 'An explainable machine learning framework for continuous flood intensity prediction using multiyear meteorological and geospatial data. Gradient Boosting achieved R² = 0.964 with SHAP and LIME-based interpretability.',
  tags: ['Machine Learning', 'Flood Prediction', 'Explainable AI', 'SHAP', 'Regression'],
  type: 'conference' as const,
  status: 'Accepted (IEEE ICCIT 2025)',
  paperUrl: '#',
  pdfUrl: paper3,
  doiUrl: '#',
  codeUrl: '#',
},
{
  title: 'Empowering Developing Nations: Sustainable Launch Approaches and Emerging Technologies for Small Satellites',
  authors: 'A.M Asik Ifthaker Hamim, Abdullah Al Abrar Chowdhury, Sazzad Hossen Chowdhury, Amad Uddin Osama, Anik Chowdhury, Mohammed Moin Uddin, Rashedul Arefin Ifty',
  venue: '4th International Conference on Electrical, Computer and Communication Engineering (ECCE)',
  year: '2025',
  description: 'Explores sustainable launch strategies, satellite constellations, immersive mission visualization, and lunar resource utilization for small satellite missions, focusing on accessibility for developing nations.',
  tags: ['Small Satellites', 'Space Technology', 'Sustainability', 'Satellite Constellations', 'Aerospace'],
  type: 'conference' as const,
  status: 'Accepted (IEEE ECCE 2025)',
  paperUrl: '#',
  pdfUrl: paper4,
  doiUrl: '#',
  codeUrl: '#',
},
{
  title: 'The Future Sustainability of Jute and Tea Production in Bangladesh Under Changing Climate Conditions Using Machine Learning Models',
  authors: 'Maruf Hasnain, Jannatul Nayeem, Mahmudul Hasan Jobaier, Md. Ishraq Uddin Sikder, Amad Uddin Osama',
  venue: 'International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)',
  year: '2025',
  description: 'A machine learning-based predictive framework analyzing the long-term sustainability of jute and tea production in Bangladesh under changing climate conditions. The study evaluates climate variables and regression models to assess yield stability and future risk trends.',
  tags: ['Machine Learning', 'Climate Change', 'Agriculture', 'Sustainability', 'Regression Modeling'],
  type: 'conference' as const,
  status: 'Accepted (QPAIN 2025)',
  paperUrl: 'https://www.researchgate.net/publication/395991212_The_Future_Sustainability_of_Jute_and_Tea_Production_in_Bangladesh_Under_Changing_Climate_Conditions_Using_Machine_Learning_Models',
  pdfUrl: paper5,
  doiUrl: '#',
  codeUrl: '#',
}
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