import { TopBar } from '../components/TopBar';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { AnimatedSection, StaggerContainer, itemVariants } from '../components/AnimatedSection';
import { Award, Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';


/* =========================
   A) UI/UX CERTIFICATIONS
========================= */

const uiuxCertifications = [
  {
    title: 'UI/UX Design Specialization',
    provider: 'California Institute of the Arts (Coursera)',
    issued: 'Oct 2025',
    certificateUrl: '#',
  },
  {
    title: 'UI/UX Design Career Path (Batch 1)',
    provider: 'Interactive Cares',
    issued: 'Jan 2024',
    certificateUrl: '#',
  },
  {
    title: 'Foundations of User Experience',
    provider: 'Google via Coursera',
    issued: 'Sept 2024',
    certificateUrl: '#',
  },
  {
    title: 'Digital Skills: User Experience',
    provider: 'Accenture',
    issued: 'Apr 2024',
    certificateUrl: '#',
  },
  {
    title: 'UI/UX Design using Adobe XD',
    provider: 'Alison',
    issued: 'May 2024',
    certificateUrl: '#',
  },
  {
    title: 'UI/UX for Beginners',
    provider: 'Great Learning Academy',
    issued: 'Mar 2024',
    certificateUrl: '#',
  },
  {
    title: 'Start Your Journey with UI Design',
    provider: 'Instructory',
    issued: 'Apr 2024',
    certificateUrl: '#',
  },
];


/* =========================
   B) COMPETITIONS
========================= */

const competitions = [
  {
    title: 'Finalist – ICT Olympiad Bangladesh – Season 2',
    badge: 'Gala Round',
    issued: 'May 2025',
    proofUrl: '#',
  },
  {
    title: 'Galactic Problem Solver – NASA International Space Apps Challenge',
    badge: 'International Challenge',
    issued: 'October 2024',
    proofUrl: '#',
  },
  {
    title: '2nd Position – UI/UX Workshop (Beginner to Intermediate)',
    badge: '2nd Position',
    issued: 'February 2024',
    proofUrl: '#',
  },
  {
    title: 'IIUC Tech Fest – Inter University Idea Generation Competition',
    badge: 'Participation',
    issued: '2025',
    proofUrl: '#',
  },
  {
    title: 'SciBlitz 1.0 (Poster Segment) – IEEE CUET Student Branch',
    badge: 'Poster Segment',
    issued: '2024',
    proofUrl: '#',
  },
  {
    title: 'SympSIST 2024 (Humanitarian Project Exhibition)',
    badge: 'Humanitarian Project Exhibition',
    issued: 'November 2024',
    proofUrl: '#',
  },
];


/* =========================
   C) HONORS
========================= */

const honors = [
  {
    title: 'Best Volunteer',
    organization: 'IIUC Computer Club',
    issued: 'Aug 2025',
    description:
      'Awarded in appreciation of hard work and dedication as Creative and Design Secretary.',
    proofUrl: '#',
  },

  {
    title: '2nd Position – UI/UX Workshop (Beginner to Intermediate)',
    organization: 'IEEE IIUC SB WIE AG',
    issued: 'February 2024',
    description:
      'Secured 2nd position in a 3-day UI/UX workshop organized by IEEE IIUC Student Branch WIE Affinity Group.',
    proofUrl: '#',
  },

  {
    title: 'Top 20 Finalist – ICT Olympiad Bangladesh Season 2',
    organization: 'ICT Olympiad Bangladesh',
    issued: 'May 2025',
    description:
      'Selected among the Top 20 finalists in the ICT Olympiad Bangladesh Season 2 (Gala Round) from the University category.',
    proofUrl: '#',
  },
];


/* =========================
   D) OTHER CERTIFICATES
========================= */

const otherCertificates = [
  {
    title: 'Agent X',
    provider: 'NetCom Learning',
    issued: 'Sep 2025',
    certificateUrl: '#',
  },
  {
    title: '5G & 6G Networking Systems',
    provider: 'IEEE ComSoc IIUC Student Branch Chapter',
    issued: 'Dec 2024',
    certificateUrl: '#',
  },
  {
    title: 'SEO - A Complete Guideline',
    provider: 'Instructory',
    issued: 'May 2022',
    certificateUrl: '#',
  },
  {
    title: 'Certificate of Appreciation – IMUN Online Conference 283.0',
    provider: 'International Model United Nations',
    issued: 'Sep 2025',
    certificateUrl: '#',
  },

  {
    title: '5G & 6G Networking Systems: Pioneering the Future of Connectivity',
    provider: 'IEEE ComSoc IIUC Student Branch Chapter',
    issued: 'Dec 2024',
    certificateUrl: '#',
  },

  {
    title: 'App Development Crash Course (12 Hours)',
    provider: 'IEEE Computer Society IIUC Student Branch Chapter',
    issued: '2024',
    certificateUrl: '#',
  },

  {
    title: 'Chattogram 10K Run 2025',
    provider: 'Rise & Run – Run for Better Bangladesh',
    issued: 'Feb 2025',
    certificateUrl: '#',
  },

  {
    title: 'UI/UX Design Virtual Internship',
    provider: 'CodSoft',
    issued: 'Jul–Aug 2024',
    certificateUrl: '#',
  },

  {
    title: 'Digital Marketing Course',
    provider: 'Excel IT Academy',
    issued: '2023',
    certificateUrl: '#',
  },

  {
    title: 'AI+ Prompt Engineer Level 1',
    provider: 'AI CERTs',
    issued: 'Aug 2025',
    certificateUrl: '#',
  },

  {
    title: 'Road to FAANG Companies Seminar',
    provider: 'IIUC Competitive Programming Society',
    issued: 'Mar 2025',
    certificateUrl: '#',
  },

  {
    title: 'Volunteer – Road to FAANG Companies Seminar',
    provider: 'IIUC Competitive Programming Society',
    issued: 'Mar 2025',
    certificateUrl: '#',
  },

  {
    title: 'SEO – A Complete Guideline',
    provider: 'Instructory',
    issued: 'May 2022',
    certificateUrl: '#',
  },

  {
    title: 'Agent X',
    provider: 'NetCom Learning',
    issued: 'Sep 2025',
    certificateUrl: '#',
  },
  {
  title: 'Richard E. Merwin Scholarship: Path to Winning $1,000 for IIUCian',
  provider: 'IEEE Computer Society IIUC Student Branch Chapter',
  issued: 'Mar 2025',
  certificateUrl: '#',
},

{
  title: 'Run for Chandanaish Mini Marathon – Finisher',
  provider: 'Run for Chandanaish',
  issued: 'Jan 2025',
  certificateUrl: '#',
},

{
  title: 'Full Stack Development with MERN – Career Guideline Workshop',
  provider: 'Creative IT Institute',
  issued: 'Oct 2024',
  certificateUrl: '#',
},

{
  title: 'SQA Workshop for Absolute Beginners',
  provider: 'Ostad',
  issued: '2024',
  certificateUrl: '#',
},
{
  title: 'Best Ambassador Team of the Month',
  provider: 'ICT Olympiad Bangladesh',
  issued: 'Sep 2025',
  description: 'Recognition for outstanding performance and contribution as an ambassador promoting ICT Olympiad Bangladesh.',
  certificateUrl: '#',
},

{
  title: 'Chattogram Divisional Meetup 2026 – Participation',
  provider: 'ICT Olympiad Bangladesh',
  issued: 'Feb 2026',
  certificateUrl: '#',
},
];


export function Certifications() {
  return (
    <div className="min-h-screen">

      <TopBar title="Certifications & Achievements" />

      {/* HEADER */}
      <AnimatedSection>
        <Card className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-semibold text-white">
              Professional Development
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Continuous learning through certifications, competitions,
            and workshops to stay updated with design, technology,
            and innovation.
          </p>
        </Card>
      </AnimatedSection>


      {/* UIUX CERTIFICATIONS */}
      <AnimatedSection delay={0.1}>
        <div className="mb-12">

          <div className="flex items-center gap-3 mb-8">
            <Tag variant="accent">UI/UX Certifications</Tag>
            <div className="h-px flex-1 bg-[#222]" />
          </div>

          <Card>
            <StaggerContainer className="space-y-6">

              {uiuxCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col gap-2 pb-6 border-b border-[#222] last:border-b-0 last:pb-0"
                >

                  <h4 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {cert.provider} — Issued {cert.issued}
                  </p>

                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white"
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


      {/* COMPETITIONS */}
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
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col gap-2 pb-6 border-b border-[#222] last:border-b-0"
                >

                  <div className="flex items-start gap-2 flex-wrap">

                    <h4 className="text-lg font-semibold text-white flex-1">
                      {comp.title}
                    </h4>

                    <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400">
                      {comp.badge}
                    </span>

                  </div>

                  <p className="text-gray-400 text-sm">
                    Issued {comp.issued}
                  </p>

                </motion.div>
              ))}

            </StaggerContainer>
          </Card>

        </div>

      </AnimatedSection>


      {/* HONORS */}
      <AnimatedSection delay={0.3}>

        <div className="mb-12">

          <div className="flex items-center gap-3 mb-8">
            <Tag variant="success">Honors & Awards</Tag>
            <div className="h-px flex-1 bg-[#222]" />
          </div>

          <StaggerContainer className="space-y-6">

            {honors.map((honor, index) => (
              <motion.div key={index} variants={itemVariants}>

                <Card hover>

                  <div className="flex items-start gap-6">

                    <div className="p-4 bg-yellow-500/20 rounded-2xl border border-yellow-500/20">
                      <Trophy className="w-7 h-7 text-yellow-400" />
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-white mb-1">
                        {honor.title}
                      </h4>

                      <p className="text-gray-400">
                        {honor.organization}
                      </p>

                      <p className="text-sm text-gray-500 mb-2">
                        Issued {honor.issued}
                      </p>

                      <p className="text-sm text-gray-400">
                        {honor.description}
                      </p>

                    </div>

                  </div>

                </Card>

              </motion.div>
            ))}

          </StaggerContainer>

        </div>

      </AnimatedSection>


      {/* OTHER CERTIFICATES */}
      <AnimatedSection delay={0.4}>

        <div>

          <div className="flex items-center gap-3 mb-8">
            <Tag variant="default">Volunteering & Other Certificates</Tag>
            <div className="h-px flex-1 bg-[#222]" />
          </div>

          <Card>

            <StaggerContainer className="space-y-6">

              {otherCertificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col gap-2 pb-6 border-b border-[#222] last:border-b-0"
                >

                  <h4 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {cert.provider} — Issued {cert.issued}
                  </p>

                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white"
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


    </div>
  );
}