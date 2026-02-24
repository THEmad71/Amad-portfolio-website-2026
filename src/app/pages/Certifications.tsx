import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { Award, Trophy, Target, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const certifications = [
  {
    title: 'UI/UX Design Specialization',
    provider: 'California Institute of the Arts (Coursera)',
    issued: 'Oct 2025',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Galactic Problem Solver',
    provider: 'NASA International Space Apps Challenge Dublin (Agent X)',
    issued: 'Sep 2025',
    skills: 'AI Agents, Prompt Engineering',
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Agent X',
    provider: 'NetCom Learning',
    issued: 'Sep 2025',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: '5G & 6G Networking Systems',
    provider: 'IEEE ComSoc IIUC Student Branch Chapter',
    issued: 'Dec 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'UI/UX Design Career Path (Batch 1)',
    provider: 'Interactive Cares',
    issued: 'Jan 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Foundations of User Experience',
    provider: 'Google via Coursera',
    issued: 'Sept 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Digital Skills: User Experience',
    provider: 'Accenture',
    issued: 'Apr 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'UI/UX Design using Adobe XD',
    provider: 'Alison',
    issued: 'May 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'UI/UX for Beginners',
    provider: 'Great Learning Academy',
    issued: 'Mar 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Start Your Journey with UI Design',
    provider: 'Instructory',
    issued: 'Apr 2024',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Humanitarian Project Exhibition',
    provider: 'IEEE Bangladesh Section',
    issued: null,
    skills: 'Prototyping',
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'NASA International Space Apps Challenge',
    provider: 'NASA International Space Apps Challenge',
    issued: null,
    skills: 'UI/UX, Research Skills, Video Editing',
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'SEO - A Complete Guideline',
    provider: 'Instructory',
    issued: 'May 2022',
    skills: null,
    credentialId: null,
    certificateUrl: '#',
  },
  {
    title: 'Certificate of Appreciation – IMUN Online Conference 283.0',
    provider: 'IMUNA',
    issued: 'Sep 2025',
    skills: null,
    credentialId: 'I283-MUN1-0046',
    certificateUrl: '#',
  },
];

const competitions = [
  {
    title: 'ICT Olympiad Bangladesh – Season 2',
    badge: 'Gala Round Participant',
    issued: 'May 2025',
    proofUrl: '#',
  },
  {
    title: 'Finalist – ICT Olympiad Bangladesh – Season 2',
    badge: 'Gala Round',
    issued: 'May 2025',
    proofUrl: '#',
  },
];

const honors = [
  {
    title: 'Best Volunteer',
    organization: 'IIUC Computer Club',
    issued: 'Aug 2025',
    description: 'Awarded in appreciation of hard work and dedication as Creative and Design Secretary.',
    proofUrl: '#',
  },
  {
    title: 'Runner-up (2nd Position)',
    organization: 'UI/UX Workshop (Beginner to Intermediate)',
    issued: 'Feb 2025',
    description: 'Organized by IEEE IIUC SB WIE AG; 3-day workshop.',
    proofUrl: '#',
  },
];

export function Certifications() {
  return (
    <div className="min-h-screen">
      <TopBar title="Certifications & Workshops" />

      <AnimatedSection>
        <Card className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-semibold text-white">Professional Development</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Continuous learning through certifications, courses, competitions, and hands-on workshops to stay current 
            with design trends, technology, and best practices.
          </p>
        </Card>
      </AnimatedSection>

      {/* A) Certifications */}
      <AnimatedSection delay={0.1}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Tag variant="accent">Certifications</Tag>
            <div className="h-px flex-1 bg-[#222]" />
          </div>
          
          <Card>
            <StaggerContainer className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title + index}
                  variants={itemVariants}
                  className="flex flex-col gap-2 pb-6 border-b border-[#222] last:border-b-0 last:pb-0"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {cert.provider}
                    {cert.issued && ` — Issued ${cert.issued}`}
                  </p>
                  {cert.skills && (
                    <p className="text-xs text-gray-500">
                      Skills: {cert.skills}
                    </p>
                  )}
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors w-fit mt-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </motion.a>
                </motion.div>
              ))}
            </StaggerContainer>
          </Card>
        </div>
      </AnimatedSection>

      {/* B) Competitions & Participation */}
      <AnimatedSection delay={0.2}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Tag variant="default">Competitions & Participation</Tag>
            <div className="h-px flex-1 bg-[#222]" />
          </div>

          <Card>
            <StaggerContainer className="space-y-6">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.title + index}
                  variants={itemVariants}
                  className="flex flex-col gap-2 pb-6 border-b border-[#222] last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-2 flex-wrap">
                    <h4 className="text-lg font-semibold text-white flex-1">
                      {comp.title}
                    </h4>
                    <span className="inline-flex items-center px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs font-medium text-blue-400">
                      {comp.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Issued {comp.issued}
                  </p>
                  <motion.a
                    href={comp.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors w-fit mt-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Proof
                  </motion.a>
                </motion.div>
              ))}
            </StaggerContainer>
          </Card>
        </div>
      </AnimatedSection>

      {/* C) Honors & Awards */}
      <AnimatedSection delay={0.3}>
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Tag variant="success">Honors & Awards</Tag>
            <div className="h-px flex-1 bg-[#222]" />
          </div>

          <StaggerContainer className="space-y-6">
            {honors.map((honor, index) => (
              <motion.div key={honor.title + index} variants={itemVariants}>
                <Card hover className="group">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-2xl border border-yellow-500/20">
                      <Trophy className="w-7 h-7 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {honor.title}
                      </h4>
                      <p className="text-gray-400 mb-2">
                        {honor.organization}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        Issued {honor.issued}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {honor.description}
                      </p>
                      <motion.a
                        href={honor.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors w-fit"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Proof
                      </motion.a>
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
