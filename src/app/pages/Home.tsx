import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { StatCard } from '../components/ui/StatCard';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { FolderOpen, BookOpen, Brain, Mail, Sparkles, ArrowRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import groceriesImage from '../../assets/Grocery/Grocery web.jpg';
import computerClubImage from '../../assets/Computer Club/Computer Club website.jpg';
import cvFile from "../../assets/Cv/Amad Uddin Osama(Ui ux & Research).pdf";

export function Home() {
  const skills = [
    'Product Thinking',
    'UX Research',
    'UI Design',
    'Design Systems',
    'Prototyping',
    'Frontend Development',
    'Machine Learning',
    'Data Analysis',
  ];

  const tools = [
    'Figma',
    'Framer',
    'Notion',
    'React',
    'Tailwind',
    'Python',
    'PyTorch',
    'TensorFlow',
  ];

  return (
    <div className="min-h-screen">
      <TopBar title="Assalamu Alaikum, I'm Amad" />

      {/* Hero Section */}
      <AnimatedSection>
        <Card className="mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Product Designer | AI Research Enthusiast
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed"
            >
              I’m a Computer Science student at the International Islamic University with a strong focus on UI/UX and product design. I create clean, user-friendly interfaces that solve real problems and deliver meaningful user experiences.<br />

              Alongside design, I actively work on AI research and research papers, exploring innovative solutions and contributing to impactful academic work. I’m passionate about combining practical product building with thoughtful research.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Button variant="primary" size="lg">
                <Sparkles className="w-5 h-5" />
                Let's Work Together
              </Button>
              <a href={cvFile} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </div>
        </Card>
      </AnimatedSection>

      {/* Stats */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div variants={itemVariants}>
          <StatCard icon={FolderOpen} label="Projects" value="12+" trend="+3 this year" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard icon={BookOpen} label="Publications" value="3" trend="2 under review" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard icon={Brain} label="ML Projects" value="5+" trend="Active research" />
        </motion.div>
      </StaggerContainer>

      {/* Selected Projects */}
      <AnimatedSection delay={0.2}>
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-white">Selected Project</h3>
            <motion.a
              href="/projects"
              whileHover={{ x: 5 }}
              className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors"
            >
              View all <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <Card hover glow className="overflow-hidden group">
            <div className="flex items-start gap-6 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center border border-green-500/20"
              >
                <FolderOpen className="w-7 h-7 text-green-400" />
              </motion.div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Groceries Website</h4>
                <p className="text-gray-500">2023</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-video bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl overflow-hidden mb-6 border border-[#2a2a2a]"
            >
              <img
                src={groceriesImage}
                alt="Groceries Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              A modern e-commerce platform for fresh groceries with intuitive navigation and seamless checkout experience.
              Built with a focus on accessibility and mobile-first design principles.
              <div className="mt-6">
                <Button asChild variant="secondary" size="sm">
                  <a
                    href="https://www.figma.com/proto/piUb6Iv2Gmkvmvw4YIGEIj/GROCERY-WEB?node-id=1100-485&p=f&viewport=361%2C340%2C0.05&t=ZVRVWFLWB9DjCD2o-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Prototype
                  </a>
                </Button>
              </div>
            </p>
            

            <div className="flex flex-wrap gap-2">
              
              <Tag variant="accent">E-commerce</Tag>
              <Tag variant="accent">UI/UX</Tag>
              <Tag variant="accent">Figma</Tag>
              <Tag variant="accent">Mobile Design</Tag>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Computer Club Project */}
      <AnimatedSection delay={0.3}>
        <Card hover glow className="overflow-hidden group mb-12">
          <div className="flex items-start gap-6 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center border border-purple-500/20"
            >
              <FolderOpen className="w-7 h-7 text-purple-400" />
            </motion.div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Computer club website</h4>
              <p className="text-gray-500">2023</p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl overflow-hidden mb-6 border border-[#2a2a2a]"
          >
            <img
              src={computerClubImage}
              alt="Computer Club Website"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <p className="text-gray-400 mb-6 leading-relaxed">
            The IIUC Computer Club, one of the most active student organizations at the International Islamic University.
            A platform to showcase events, programming contests, and resources for students.
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag variant="accent">Web Design</Tag>
            <Tag variant="accent">Community</Tag>
            <Tag variant="accent">Education</Tag>
            <Tag variant="accent">React</Tag>
          </div>
        </Card>
      </AnimatedSection>

      {/* About & Skills */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card>
            <h3 className="text-2xl font-semibold text-white mb-6">About Me</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a computer science student at the International Islamic University with a passion for creating
              meaningful digital experiences. My work spans from designing intuitive interfaces to developing
              machine learning models for healthcare and agriculture.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe in the power of combining design thinking with technical expertise to solve real-world problems.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Tools</h3>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3 font-medium">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    <Tag>{skill}</Tag>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-3 font-medium">Tools & Technologies</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                  >
                    <Tag variant="accent">{tool}</Tag>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </StaggerContainer>

      {/* CTA Section */}
      <AnimatedSection delay={0.4}>
        <Card className="mt-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto py-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a project in mind?</h3>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed px-4">
              I can help designing a website, designing a new product, improving an existing part of your product,
              or help you to improve your brand identity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                <Sparkles className="w-5 h-5" />
                Let's Work Together
              </Button>
              <Button variant="secondary" size="lg">
                <Mail className="w-5 h-5" />
                E-mail
              </Button>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
}