import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { GraduationCap, Briefcase, Award, Users, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import Amadpic from "../../assets/Amad.png";


export function About() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'International Islamic University',
      period: '2021 - Present',
      description: 'Focus on Machine Learning, Computer Vision, and Software Engineering',
    },
  ];

  const professionalExperience = [
    {
      company: 'BoltParts',
      role: 'UI/UX Designer (Freelance)',
      period: '2025',
      location: 'UAE',
      description: [
        'Designed automotive parts & garage service website',
        'Created structured product browsing and service booking experience',
        'Focused on clarity, usability, and conversion flow',
      ],
    },
    {
      company: 'Neurox',
      role: 'UI/UX Designer',
      period: '2025',
      location: 'AI Platform Landing Page',
      description: [
        'Designed modern SaaS landing page for multi-agent AI platform',
        'Built structured layout for AI agents showcase',
        'Focused on premium tech-driven visual identity',
      ],
    },
    {
      company: 'Nearby Shop',
      role: 'UI/UX Designer (Freelance)',
      period: '2025',
      location: 'Saudi Arabia',
      description: [
        'Led complete UX process from research to mid-fidelity prototype',
        'Defined user personas and structured user journeys',
        'Created brand logo and visual identity system',
      ],
    },
    {
      company: 'Feel Science with Sohel Sir\'s Science Chamber',
      role: 'Graphic Designer & Video Editor',
      period: '2022',
      location: null,
      description: [
        'Designed promotional posters and digital assets',
        'Edited educational science content videos',
        'Maintained visual consistency across media platforms',
      ],
    },
  ];

  const experience = [
    {
      title: 'Product Designer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Designing user interfaces and experiences for web and mobile applications',
    },
    {
      title: 'ML Research Assistant',
      company: 'University Lab',
      period: '2023 - Present',
      description: 'Research on medical imaging and agricultural AI applications',
    },
  ];

  const leadership = [
    {
      title: 'Vice Chair (Technical)',
      organization: 'IEEE Computer Society IIUC SBC',
      period: '2025–2026',
      description: null,
    },
    {
      title: 'UI/UX & Creative Design Secretary',
      organization: 'IIUC Developers & Entrepreneurs Society',
      period: '2026–Present',
      description: null,
    },
    {
      title: 'Website Designer & Design Lead',
      organization: 'IIUC Computer Club',
      period: '2024–2025',
      description: 'Designed official club website and led event branding and digital asset design',
    },
    {
      title: 'Campus Ambassador Leader',
      organization: 'ICT Olympiad Bangladesh',
      period: '2025–2026',
      description: null,
    },
  ];

  const achievements = [
    'Published 4 research papers in ML, Agriculture, and Aerospace',
    'Designed 12+ product interfaces for clients worldwide',
    'Developed ML models for agricultural disease detection',
    'Led design initiatives for multiple student organizations',
  ];

  return (
    <div className="min-h-screen">
      <TopBar title="About Me" />

      {/* Introduction */}
      <AnimatedSection>
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              src={Amadpic}
              alt="Amad uddin"
              className="w-48 h-48 rounded-2xl border-2 border-[#2a2a2a] object-cover"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">Amad uddin</h2>
              <p className="text-xl text-gray-400 mb-6">Product Designer | AI Research Enthusiast</p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a computer science student at the International Islamic University with a love for all things creative. 
                Whether it's designing user-friendly interfaces, UX, or writing lines of code, I'm all about bringing ideas to life.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey combines the analytical rigor of machine learning research with the creative process of product design. 
                I believe that the best solutions come from understanding both the technical possibilities and the human needs.
              </p>
            </div>
          </div>
        </Card>
      </AnimatedSection>

      {/* Professional Experience */}
      <AnimatedSection delay={0.1}>
        <Card className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
              <Building2 className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Professional Experience</h3>
          </div>
          <div className="space-y-8">
            {professionalExperience.map((exp, index) => (
              <div key={exp.company + index} className="border-l-2 border-[#2a2a2a] pl-6">
                <div className="mb-3">
                  <h4 className="text-xl font-bold text-white mb-1">{exp.company}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-1">
                    <span className="font-medium">{exp.role}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {index < professionalExperience.length - 1 && (
                  <div className="h-px bg-[#1a1a1a] mt-6" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </AnimatedSection>

      {/* Education & Experience */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-[#2a2a2a] pl-4">
                  <p className="text-sm text-gray-500 mb-1">{edu.period}</p>
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.title} className="border-l-2 border-[#2a2a2a] pl-4">
                  <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </StaggerContainer>

      {/* Leadership & Volunteering */}
      <AnimatedSection delay={0.2}>
        <Card className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Leadership & Volunteering</h3>
          </div>
          <div className="space-y-6">
            {leadership.map((role, index) => (
              <div key={role.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  {index < leadership.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-orange-500 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-sm text-gray-500 mb-1">{role.period}</p>
                  <h4 className="text-lg font-semibold text-white mb-1">{role.title}</h4>
                  <p className="text-gray-400 mb-2">{role.organization}</p>
                  {role.description && (
                    <p className="text-sm text-gray-500">{role.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </AnimatedSection>

      {/* Achievements */}
      <AnimatedSection delay={0.3}>
        <Card className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
              <Award className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#333] transition-colors"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <p className="text-gray-400">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </AnimatedSection>

      {/* Interests */}
      <AnimatedSection delay={0.4}>
        <Card>
          <h3 className="text-2xl font-semibold text-white mb-6">Research Interests</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Machine Learning & AI</h4>
              <div className="flex flex-wrap gap-2">
                <Tag variant="accent">Computer Vision</Tag>
                <Tag variant="accent">Deep Learning</Tag>
                <Tag variant="accent">Transformers</Tag>
                <Tag variant="accent">Transfer Learning</Tag>
                <Tag variant="accent">Explainable AI</Tag>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">Application Domains</h4>
              <div className="flex flex-wrap gap-2">
                <Tag variant="success">Smart Agriculture</Tag>
                <Tag variant="success">Healthcare AI</Tag>
                <Tag variant="success">Sustainability</Tag>
                <Tag variant="success">Aerospace Engineering</Tag>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">Design & Development</h4>
              <div className="flex flex-wrap gap-2">
                <Tag>Product Design</Tag>
                <Tag>User Experience</Tag>
                <Tag>Design Systems</Tag>
                <Tag>Frontend Development</Tag>
                <Tag>Prototyping</Tag>
              </div>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
}