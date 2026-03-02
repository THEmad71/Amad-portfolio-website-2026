import { TopBar } from "../components/TopBar";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  itemVariants,
} from "../components/AnimatedSection";

import { ExternalLink, Eye, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import type { MouseEvent } from "react";

// ✅ Assets (match your folder exactly)
import boltpart from "../../assets/project/boltparts.png";
import groceryMobile from "../../assets/project/groceries-mobile.png";
import groceryWeb from "../../assets/project/Grocery web.jpg";
import nasa from "../../assets/project/nasa-space-app.jpg";
import computerclub from "../../assets/project/computerClub.jpg";
import floodaware from "../../assets/project/floodaware.jpg";
import poster from "../../assets/project/poster.jpg";
import hoodie from "../../assets/project/hoodie.jpg";
import jersey from "../../assets/project/jersey.jpg";
import jonsheba from "../../assets/project/jonsheba.jpg";

type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  prototypeUrl?: string; // figma/prototype link
  behanceUrl?: string; // behance link
};

const uiUxProjects: Project[] = [
  {
    slug: "boltparts-uae",
    title: "BoltParts – UAE Client Project",
    description:
      "E-commerce platform for automotive parts with advanced filtering and inventory management system.",
    tags: ["E-commerce", "UI/UX", "Client Work"],
    image: boltpart,
    prototypeUrl:
      "https://www.figma.com/proto/6OwHSZkliz3XCIouv0NQ6a/Boltpart--Copy-?node-id=388-14495&p=f&viewport=168%2C7%2C0.02&t=eS0rSIVVkf76gKlO-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=388%3A14495&page-id=388%3A14494",
  },
  {
    slug: "groceries-web",
    title: "Groceries Web Design",
    description:
      "Modern grocery shopping platform with intuitive navigation and seamless checkout experience.",
    tags: ["Web Design", "E-commerce", "Figma"],
    image: groceryWeb,
    prototypeUrl:
      "https://www.figma.com/design/piUb6Iv2Gmkvmvw4YIGEIj/GROCERY-WEB?node-id=0-1&t=V5hvneDCnekhoZe9-1",
    behanceUrl:
      "https://www.behance.net/gallery/193838595/Grocery-Website-web-design",
  },
  {
    slug: "groceries-mobile",
    title: "Groceries Mobile App Design",
    description:
      "Mobile-first grocery app design focusing on quick ordering and delivery tracking features.",
    tags: ["Mobile Design", "UI/UX", "App"],
    image: groceryMobile,
    prototypeUrl:
      "https://www.figma.com/design/XHkMztq50cvnHjDKfLT1Sc/MOBILE-APP-GROCERY?node-id=0-1&t=goBqL3raYhsRwuoy-1",
    behanceUrl:
      "https://www.behance.net/gallery/195274993/Grocery-Delivery-App-UIUX",
  },
  {
    slug: "nasa-space-app",
    title: "NASA Space App Challenge – Web Design",
    description:
      "Interactive web platform for NASA Space Apps Challenge with data visualization and team collaboration.",
    tags: ["Web Design", "NASA", "Challenge"],
    image: nasa,
    behanceUrl:
      "https://www.behance.net/gallery/210305007/ExoFun-NASA-Inspired-Space-Exploration-App",
  },
  {
    slug: "floodaware",
    title: "FloodAware App Design",
    description:
      "Emergency response application for flood monitoring and community alerts with real-time updates.",
    tags: ["Mobile App", "Social Impact", "UI/UX"],
    image: floodaware,
    prototypeUrl:
      "https://www.figma.com/design/x6jyJNyZSV3pqr8MtusGmZ/Hackathon--Copy-?node-id=0-1&t=se7xkEnVvfJuNxpM-1",
    behanceUrl:
      "https://www.behance.net/gallery/220601029/FloodAware-App-UIUX-Case-Study",
  },
  {
    slug: "iiuc-computer-club",
    title: "IIUC Computer Club Website Design",
    description:
      "Official website for university computer club showcasing events, contests, and student resources.",
    tags: ["Web Design", "Education", "Community"],
    image: computerclub,
    prototypeUrl:
      "https://www.figma.com/design/HmmpnhVxo5hhrOvSKryFIe/Computer-Club-Web-MAIN?node-id=0-1&t=tvfrsuDFgfFWD3ni-1",
    behanceUrl:
      "https://www.behance.net/gallery/221117007/Computer-Club-Landing-Page-ui-Design",
  },
  {
    slug: "jonsheba",
    title: "JonSheba App Design",
    description:
      "Healthcare service platform connecting patients with medical professionals and care providers.",
    tags: ["Healthcare", "Mobile App", "UI/UX"],
    image: jonsheba,
    prototypeUrl: "https://www.figma.com/",
  },
];

const graphicProjects: Project[] = [
  {
    slug: "poster-design",
    title: "Poster Design",
    description:
      "Event posters and promotional materials for tech conferences and university programs.",
    tags: ["Graphic Design", "Branding", "Print"],
    image:
      poster,
    behanceUrl:
      "https://www.behance.net/gallery/212921047/Design-for-the-IIUC-Computer-Club",
  },
  {
    slug: "hoodie-design",
    title: "Hoodie Design",
    description:
      "Custom hoodie designs for tech clubs and student organizations with modern graphics.",
    tags: ["Apparel Design", "Branding", "Merchandise"],
    image:
      hoodie,
    behanceUrl: "https://www.behance.net/gallery/185403681/Hoodie-Design",
  },
  {
    slug: "jersey-design",
    title: "Jersey Design",
    description:
      "Sports jersey and team apparel designs for university clubs and competitive events.",
    tags: ["Apparel Design", "Sports", "Graphics"],
    image:
      jersey,
    behanceUrl: "https://www.behance.net/gallery/183858049/Jersey-Design",
  },
];

const videoProjects: Project[] = [
  {
    slug: "computer-club-videos",
    title: "Computer Club Video Works",
    description:
      "Promotional videos, event coverage, and educational content for IIUC Computer Club initiatives.",
    tags: ["Video Production", "Motion Graphics", "Content"],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    behanceUrl: "https://www.behance.net/gallery/236128509/IIUC-Computer-Club-202425-Video-Works",
  },
];

function openExternal(url?: string, e?: MouseEvent) {
  if (e) {
    e.preventDefault();
    e.stopPropagation(); // ✅ prevent card Link click
  }
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function Projects() {
  return (
    <div className="min-h-screen">
      <TopBar title="Projects" />

      <AnimatedSection>
        <Card className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Creative Portfolio
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A collection of UI/UX design, graphic design, and video production
            work spanning client projects, academic initiatives, and community
            contributions.
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
              <motion.div key={project.slug} variants={itemVariants}>
                <Link to={`/projects/${project.slug}`} className="block">
                  <Card hover glow className="h-full group cursor-pointer">
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

                    <h4 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={(e) => openExternal(project.prototypeUrl, e)}
                        disabled={!project.prototypeUrl}
                        title={
                          project.prototypeUrl
                            ? "Open prototype"
                            : "Prototype link not added"
                        }
                      >
                        <Eye className="w-4 h-4" />
                        View Prototype
                      </Button>

                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={(e) => openExternal(project.behanceUrl, e)}
                        disabled={!project.behanceUrl}
                        title={
                          project.behanceUrl
                            ? "Open Behance"
                            : "Behance link not added"
                        }
                      >
                        <ExternalLink className="w-4 h-4" />
                        Behance
                      </Button>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                      <FileText className="w-4 h-4" />
                      Click prototype or Behance buttons to view detailed case study and project breakdowns.
                    </div>
                  </Card>
                </Link>
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
              <motion.div key={project.slug} variants={itemVariants}>
                <Link to={`/projects/${project.slug}`} className="block">
                  <Card hover glow className="h-full group cursor-pointer">
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

                    <h4 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Tag key={tag} size="sm" variant="success">
                          {tag}
                        </Tag>
                      ))}
                    </div>

                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full"
                      onClick={(e) => openExternal(project.behanceUrl, e)}
                      disabled={!project.behanceUrl}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Behance
                    </Button>
                  </Card>
                </Link>
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
              <motion.div key={project.slug} variants={itemVariants}>
                <Link to={`/projects/${project.slug}`} className="block">
                  <Card hover glow className="group cursor-pointer">
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
                        <h4 className="text-2xl font-bold text-white mb-4">
                          {project.title}
                        </h4>
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

                        <Button
                          variant="secondary"
                          size="md"
                          className="w-full md:w-auto"
                          onClick={(e) => openExternal(project.behanceUrl, e)}
                          disabled={!project.behanceUrl}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Portfolio
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </div>
  );
}